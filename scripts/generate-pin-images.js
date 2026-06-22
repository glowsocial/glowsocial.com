#!/usr/bin/env node
/**
 * Generate static Pinterest pin images (1000×1500, 2:3) for all content.
 * Uses satori + @resvg/resvg-js to render JSX → SVG → PNG.
 *
 * Run: node scripts/generate-pin-images.js
 *      node scripts/generate-pin-images.js --slug=my-post --force
 * Output: public/pins/{slug}.png
 */

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.join(__dirname, "..", "content");
const DROPS_DIR = path.join(__dirname, "..", "content-bank", "new-site-launch", "drafts");
const OUTPUT_DIR = path.join(__dirname, "..", "public", "pins");

const WIDTH = 1000;
const HEIGHT = 1500;
const args = process.argv.slice(2);
const force = args.includes("--force");
const targetSlugs = args
  .filter((arg) => arg.startsWith("--slug="))
  .map((arg) => arg.split("=")[1])
  .filter(Boolean);

// Ensure output dir exists
fs.mkdirSync(OUTPUT_DIR, { recursive: true });

/**
 * Load a system font for satori.
 * Must be .ttf or .otf — .ttc (TrueType Collection) is not supported.
 */
async function loadFonts() {
  // Try TTF fonts (not TTC!)
  const regularPaths = [
    "/System/Library/Fonts/Supplemental/Arial.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf",
  ];
  const boldPaths = [
    "/System/Library/Fonts/Supplemental/Arial Bold.ttf",
    "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf",
  ];

  let regular, bold;

  for (const fp of regularPaths) {
    if (fs.existsSync(fp)) {
      regular = fs.readFileSync(fp);
      break;
    }
  }
  for (const fp of boldPaths) {
    if (fs.existsSync(fp)) {
      bold = fs.readFileSync(fp);
      break;
    }
  }

  if (regular) {
    return { regular, bold: bold || regular };
  }

  // Fetch Inter from Google Fonts as fallback
  console.log("Downloading Inter font...");
  const res = await fetch(
    "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiA.woff"
  );
  const data = Buffer.from(await res.arrayBuffer());
  return { regular: data, bold: data };
}

function getPostsFromDir(subdir) {
  const dir = path.join(CONTENT_DIR, subdir);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => /\.(md|mdx)$/.test(f))
    .map((filename) => {
      const filePath = path.join(dir, filename);
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      const slug = data.slug || filename.replace(/\.(md|mdx)$/, "");

      return {
        title: data.title || "",
        description: data.description || "",
        slug,
        category: subdir,
      };
    })
    .filter((p) => p.title);
}

function getMarkdownFilesRecursive(dir) {
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) return getMarkdownFilesRecursive(fullPath);
      if (/\.(md|mdx)$/.test(entry.name)) return [fullPath];
      return [];
    });
}

function getDrops() {
  return getMarkdownFilesRecursive(DROPS_DIR)
    .map((filePath) => {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(fileContent);
      const slug = data.slug || path.basename(filePath).replace(/\.(md|mdx)$/, "");

      return {
        title: data.title || "",
        description: data.description || "",
        slug,
        category: "drops",
      };
    })
    .filter((p) => p.title);
}

function truncate(str, max) {
  if (!str) return "";
  return str.length > max ? str.slice(0, max - 3) + "..." : str;
}

/**
 * Build the JSX element for the pin image.
 * Intentionally boring: title on a brand background.
 */
function buildPinJsx(title, category = "blog") {
  const displayTitle = truncate(title, 90);
  const label = category === "drops" ? "Boomp Drops" : "Glow Social";
  return {
    type: "div",
    props: {
      style: {
        width: WIDTH,
        height: HEIGHT,
        display: "flex",
        flexDirection: "column",
        background: "#192734",
        fontFamily: "sans-serif",
        position: "relative",
        overflow: "hidden",
      },
      children: [
        // Logo area
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              padding: "72px 72px 0",
            },
            children: [
              {
                type: "div",
                props: {
                  style: {
                    width: 16,
                    height: 16,
                    borderRadius: "50%",
                    background: "#d7e278",
                    marginRight: 12,
                    display: "flex",
                  },
                },
              },
              {
                type: "span",
                props: {
                  style: {
                    color: "#ffffff",
                    fontSize: 28,
                    fontWeight: 700,
                    letterSpacing: "1px",
                    textTransform: "uppercase",
                  },
                  children: label,
                },
              },
            ],
          },
        },
        // Main content
        {
          type: "div",
          props: {
            style: {
              flex: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "72px",
            },
            children: [
              // Title
              {
                type: "div",
                props: {
                  style: {
                    color: "#ffffff",
                    fontSize: displayTitle.length > 50 ? 56 : 68,
                    fontWeight: 800,
                    lineHeight: 1.1,
                    display: "flex",
                    flexWrap: "wrap",
                  },
                  children: displayTitle,
                },
              },
            ],
          },
        },
        // Bottom bar
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "36px 64px",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            },
            children: [
              {
                type: "span",
                props: {
                  style: {
                    color: "rgba(255,255,255,0.5)",
                    fontSize: 22,
                    letterSpacing: "0.5px",
                  },
                  children: "glowsocial.com",
                },
              },
            ],
          },
        },
      ],
    },
  };
}

async function main() {
  const fonts = await loadFonts();

  const allPosts = [
    ...getPostsFromDir("blog"),
    ...getPostsFromDir("comparisons"),
    ...getPostsFromDir("local"),
    ...getDrops(),
  ].filter((post) => targetSlugs.length === 0 || targetSlugs.includes(post.slug));

  console.log(`Generating ${allPosts.length} pin images...`);
  if (force) console.log("Force mode: overwriting existing images.");
  if (targetSlugs.length) console.log(`Target slugs: ${targetSlugs.join(", ")}`);

  let generated = 0;
  let skipped = 0;

  for (const post of allPosts) {
    const outPath = path.join(OUTPUT_DIR, `${post.slug}.png`);

    // Skip if already exists (for incremental builds)
    if (!force && fs.existsSync(outPath)) {
      skipped++;
      continue;
    }

    try {
      const element = buildPinJsx(post.title, post.category);

      const svg = await satori(element, {
        width: WIDTH,
        height: HEIGHT,
        fonts: [
          {
            name: "sans-serif",
            data: fonts.regular,
            weight: 400,
            style: "normal",
          },
          {
            name: "sans-serif",
            data: fonts.bold,
            weight: 700,
            style: "normal",
          },
          {
            name: "sans-serif",
            data: fonts.bold,
            weight: 800,
            style: "normal",
          },
        ],
      });

      const resvg = new Resvg(svg, {
        fitTo: { mode: "width", value: WIDTH },
      });
      const pngData = resvg.render();
      const pngBuffer = pngData.asPng();

      fs.writeFileSync(outPath, pngBuffer);
      generated++;

      if (generated % 50 === 0) {
        console.log(`  ...${generated} generated`);
      }
    } catch (err) {
      console.error(`  ERROR: ${post.slug}: ${err.message}`);
    }
  }

  console.log(
    `\nDone: ${generated} generated, ${skipped} skipped (already exist)`
  );
  console.log(`Output: public/pins/`);
}

main().catch(console.error);
