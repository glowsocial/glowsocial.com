#!/usr/bin/env node
/**
 * Generate static Pinterest pin images (1000×1500, 2:3) for all content.
 * Uses satori + @resvg/resvg-js to render JSX → SVG → PNG.
 *
 * Run: node scripts/generate-pin-images.js
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
const OUTPUT_DIR = path.join(__dirname, "..", "public", "pins");

const WIDTH = 1000;
const HEIGHT = 1500;

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

function truncate(str, max) {
  if (!str) return "";
  return str.length > max ? str.slice(0, max - 3) + "…" : str;
}

/**
 * Build the JSX element for the pin image.
 * Matches the existing /api/og route design.
 */
function buildPinJsx(title, description) {
  const displayTitle = truncate(title, 80);
  const displayDesc = truncate(description, 120);

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
        // Background blob top-right
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              top: -120,
              right: -120,
              width: 500,
              height: 500,
              borderRadius: "50%",
              background: "rgba(147, 153, 204, 0.18)",
              display: "flex",
            },
          },
        },
        // Background blob bottom-left
        {
          type: "div",
          props: {
            style: {
              position: "absolute",
              bottom: 80,
              left: -80,
              width: 400,
              height: 400,
              borderRadius: "50%",
              background: "rgba(215, 226, 120, 0.10)",
              display: "flex",
            },
          },
        },
        // Logo area
        {
          type: "div",
          props: {
            style: {
              display: "flex",
              alignItems: "center",
              padding: "60px 64px 0",
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
                  children: "Glow Social",
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
              padding: "60px 64px",
            },
            children: [
              // Eyebrow
              {
                type: "div",
                props: {
                  style: { display: "flex", marginBottom: 32 },
                  children: {
                    type: "span",
                    props: {
                      style: {
                        background: "#d7e278",
                        color: "#192734",
                        fontSize: 18,
                        fontWeight: 700,
                        padding: "8px 20px",
                        borderRadius: 24,
                        letterSpacing: "1px",
                        textTransform: "uppercase",
                      },
                      children: "Social Media Tips",
                    },
                  },
                },
              },
              // Title
              {
                type: "div",
                props: {
                  style: {
                    color: "#ffffff",
                    fontSize: displayTitle.length > 50 ? 56 : 68,
                    fontWeight: 800,
                    lineHeight: 1.1,
                    marginBottom: 32,
                    display: "flex",
                    flexWrap: "wrap",
                  },
                  children: displayTitle,
                },
              },
              // Description
              ...(displayDesc
                ? [
                    {
                      type: "div",
                      props: {
                        style: {
                          color: "rgba(255,255,255,0.65)",
                          fontSize: 26,
                          lineHeight: 1.5,
                          display: "flex",
                          flexWrap: "wrap",
                        },
                        children: displayDesc,
                      },
                    },
                  ]
                : []),
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
              {
                type: "div",
                props: {
                  style: {
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    background: "#d7e278",
                    color: "#192734",
                    padding: "14px 28px",
                    borderRadius: 40,
                    fontSize: 20,
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                  },
                  children: "Read More →",
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
  ];

  console.log(`Generating ${allPosts.length} pin images...`);

  let generated = 0;
  let skipped = 0;

  for (const post of allPosts) {
    const outPath = path.join(OUTPUT_DIR, `${post.slug}.png`);

    // Skip if already exists (for incremental builds)
    if (fs.existsSync(outPath)) {
      skipped++;
      continue;
    }

    try {
      const element = buildPinJsx(post.title, post.description);

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
