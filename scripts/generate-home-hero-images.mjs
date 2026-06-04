import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const MODEL = "gemini-3.1-flash-image-preview";
const ROOT = process.cwd();
const APP_ENV_PATH = path.resolve(ROOT, "../glow-social-app/.env.local");
const OUT_DIR = path.resolve(ROOT, "public/images/home/generated");

const sizes = {
  video: { width: 1080, height: 1920, aspect: "9:16 vertical" },
  carousel: { width: 1080, height: 1350, aspect: "4:5 portrait" },
  quote: { width: 1080, height: 1080, aspect: "1:1 square" },
};

const mediaItems = [
  ["hero-bg-01.jpg", "video", "a neighborhood cafe", "warm morning cafe counter with coffee, pastry, sunlit wood, plants, quiet third-place feeling"],
  ["hero-bg-02.jpg", "quote", "a boutique hair salon", "premium salon color station with brushes, foils, soft light, clean mirror edge, warm neutral styling"],
  ["hero-bg-03.jpg", "carousel", "an interior design studio", "finished living room detail with textured fabric, wood, stone, sunlight, editorial design magazine look"],
  ["hero-bg-04.jpg", "video", "a landscaping company", "healthy desert-friendly front yard with clean edging, green lawn, native plants, bright morning light"],
  ["hero-bg-05.jpg", "quote", "a dental office", "calm modern dental treatment room detail, clean chair, soft blue light, organized professional tools"],
  ["hero-bg-06.jpg", "carousel", "a real estate advisor", "inviting home entryway with warm natural light, keys on console, architectural detail, polished but lived-in"],
  ["hero-bg-07.jpg", "video", "a real estate advisor", "home tour detail with open kitchen, bright windows, neutral finishes, ready-to-move-in feel"],
  ["hero-bg-08.jpg", "video", "a wellness clinic", "serene wellness studio with treatment table, folded towels, plants, mineral textures, soft daylight"],
  ["hero-bg-09.jpg", "carousel", "a roofing contractor", "clean roof shingles and flashing detail after a storm, crisp daylight, trustworthy home exterior"],
  ["hero-bg-10.jpg", "quote", "a braid and hair studio", "braiding studio detail with textured hair accessories, combs, clips, warm salon counter, elegant styling"],
  ["hero-bg-11.jpg", "video", "a pet grooming salon", "clean grooming station with towel, brush, gentle spa colors, pet care tools arranged neatly"],
  ["hero-bg-12.jpg", "carousel", "a chiropractic office", "ergonomic desk setup with chair, laptop closed, posture props, calm clinical office lighting"],
  ["hero-bg-13.jpg", "quote", "an independent bookstore", "cozy bookstore table with stacked books, reading lamp, wood shelves, inviting community feel"],
  ["hero-bg-14.jpg", "video", "a custom bakery", "custom cake detail with frosting texture, berries, pastry tools, soft bakery window light"],
  ["hero-bg-15.jpg", "carousel", "an auto repair shop", "organized mechanic bench with tire gauge, clean tools, car detail, professional service bay"],
  ["hero-bg-16.jpg", "quote", "a yoga studio", "quiet yoga studio floor with mats, blocks, warm sunlight, plants, calm textured walls"],
  ["hero-bg-17.jpg", "video", "a mortgage advisor", "calm home office desk with house model, notebook, coffee, warm financial planning mood"],
  ["hero-bg-18.jpg", "carousel", "a pet grooming salon", "puppy grooming preparation scene with soft towel, brush, treats, clean bright station"],
  ["hero-bg-19.jpg", "quote", "an accounting firm", "organized bookkeeping desk with calculator, notebook, tidy papers, calm professional light"],
  ["hero-bg-20.jpg", "carousel", "a med spa", "premium med spa treatment room detail with skincare bottles, towel, soft beige stone, polished lighting"],
];

const carouselExamples = [
  {
    sourceIndex: 3,
    businessName: "Oak & Stone Interiors",
    avatar: "CA",
    accent: "#bd7d4b",
    slides: [
      ["Before you renovate", "Three decisions that make the project calmer."],
      ["Start with use", "Choose the room around how you actually live."],
      ["Then choose materials", "Texture, maintenance, and light matter more than trends."],
    ],
  },
  {
    sourceIndex: 6,
    businessName: "Desert Key Realty",
    avatar: "LI",
    accent: "#2f7fa8",
    slides: [
      ["Buying this spring?", "Do these three things before you tour."],
      ["Know the payment", "Pre-approval is only useful if the monthly number works."],
      ["Watch the timing", "Your best offer depends on more than list price."],
    ],
  },
  {
    sourceIndex: 9,
    businessName: "Copper Ridge Roofing",
    avatar: "RF",
    accent: "#4878d9",
    slides: [
      ["After the storm", "What homeowners should check before calling anyone."],
      ["Start from the ground", "Look for granules, dents, and shifted flashing."],
      ["Document before repair", "Clear photos make the next step easier."],
    ],
  },
  {
    sourceIndex: 12,
    businessName: "Summit Chiropractic",
    avatar: "GO",
    accent: "#d7e278",
    slides: [
      ["Desk tension again?", "Your setup may be asking too much from your neck."],
      ["Move before it hurts", "Small breaks help before stiffness becomes pain."],
      ["Book when it lingers", "Persistent discomfort deserves a real assessment."],
    ],
  },
  {
    sourceIndex: 15,
    businessName: "Metro Auto Repair",
    avatar: "AR",
    accent: "#4878d9",
    slides: [
      ["Before a road trip", "Three checks save bigger problems later."],
      ["Tires first", "Pressure and tread tell you more than you think."],
      ["Listen cold", "New sounds on startup are worth catching early."],
    ],
  },
  {
    sourceIndex: 18,
    businessName: "Milo Pet Grooming",
    avatar: "CA",
    accent: "#bd7d4b",
    slides: [
      ["New puppy?", "Start grooming before the first big haircut."],
      ["Touch paws often", "Gentle handling makes nail trims less stressful."],
      ["Keep it short", "Early wins matter more than perfect style."],
    ],
  },
  {
    sourceIndex: 20,
    businessName: "Saguaro Med Spa",
    avatar: "MS",
    accent: "#b83a45",
    slides: [
      ["Before your first visit", "Know the goal before choosing the treatment."],
      ["Ask about downtime", "The best plan fits your calendar too."],
      ["Think in months", "Subtle results usually come from consistency."],
    ],
  },
];

function parseDotEnv(contents) {
  const values = {};
  for (const line of contents.split(/\r?\n/)) {
    const match = line.match(/^([A-Z0-9_]+)=(.*)$/);
    if (!match) continue;
    values[match[1]] = match[2].replace(/^['"]|['"]$/g, "");
  }
  return values;
}

function buildPrompt({ business, scene, type, aspect }) {
  const useCase = type === "carousel"
    ? "It will sit behind a white rounded carousel text card and small logo row."
    : type === "quote"
      ? "It will sit behind a white rounded quote card."
    : "It will be used as the photo background for a short-form video card; UI controls will be added separately.";

  return [
    "Generate a high-quality photorealistic social media background image.",
    `Business context: ${business}.`,
    `Scene: ${scene}.`,
    `Aspect ratio: ${aspect}.`,
    useCase,
    "Style: premium commercial photography, realistic materials, sharp focal point, natural light, professional Instagram-ready composition.",
    "Composition: full-bleed image, strong visual texture, uncluttered middle area so an overlay card can sit on top.",
    "MUST look like a real photograph, not an illustration, not a vector graphic, not a template.",
    "MUST NOT include people, faces, hands, body parts, animals, readable signs, menus, labels, brand marks, logos, watermarks, or any written words.",
    "MUST NOT include social media UI, play buttons, progress bars, icons, frames, borders, or overlay graphics.",
    "Avoid screens, posters, packaging labels, signs, price boards, storefront signs, and branded equipment.",
  ].join("\n");
}

function escapeXml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function wrapText(value, maxChars, maxLines) {
  const words = String(value || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let current = "";

  for (const word of words) {
    const next = current ? `${current} ${word}` : word;
    if (next.length > maxChars && current) {
      lines.push(current);
      current = word;
    } else {
      current = next;
    }
    if (lines.length === maxLines) break;
  }

  if (current && lines.length < maxLines) {
    lines.push(current);
  }

  return lines;
}

function textLines({ lines, x, y, size, lineHeight, color, weight = 700, family = "Arial, Helvetica, sans-serif" }) {
  return lines.map((line, index) => (
    `<text x="${x}" y="${y + index * lineHeight}" font-family="${family}" font-size="${size}" font-weight="${weight}" fill="${color}">${escapeXml(line)}</text>`
  )).join("");
}

function getContrastTextColor(hex) {
  const clean = String(hex || "#d7e278").replace("#", "");
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.58 ? "#192734" : "#ffffff";
}

async function renderCarouselSlide({ backgroundPath, example, slideIndex }) {
  const width = 1080;
  const height = 1350;
  const cardX = 90;
  const cardY = 326;
  const cardW = 900;
  const cardH = 690;
  const cardPadX = 52;
  const totalSlides = example.slides.length;
  const [title, body] = example.slides[slideIndex];
  const titleLines = wrapText(title, slideIndex === 0 ? 17 : 21, slideIndex === 0 ? 3 : 2);
  const bodyLines = wrapText(body, 33, 3);
  const avatarFill = example.accent;
  const avatarText = getContrastTextColor(avatarFill);
  const activeDots = Array.from({ length: totalSlides }).map((_, index) => {
    const dotW = index === slideIndex ? 48 : 18;
    const dotX = cardX + (cardW / 2) - 48 + index * 38;
    return `<rect x="${dotX}" y="${cardY + cardH - 72}" width="${dotW}" height="10" rx="5" fill="${index === slideIndex ? example.accent : "#e0e0e6"}"/>`;
  }).join("");
  const backgroundData = (await fs.readFile(backgroundPath)).toString("base64");

  const svg = `
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="26" stdDeviation="30" flood-color="#192734" flood-opacity="0.24"/>
        </filter>
      </defs>
      <image href="data:image/jpeg;base64,${backgroundData}" x="0" y="0" width="${width}" height="${height}" preserveAspectRatio="xMidYMid slice"/>
      <rect width="${width}" height="${height}" fill="#000000" opacity="0.15"/>
      <rect x="${cardX}" y="${cardY}" width="${cardW}" height="${cardH}" rx="28" fill="rgba(255,255,255,0.95)" stroke="rgba(0,0,0,0.06)" filter="url(#cardShadow)"/>
      <circle cx="${cardX + cardPadX + 28}" cy="${cardY + 72}" r="28" fill="${avatarFill}"/>
      <text x="${cardX + cardPadX + 28}" y="${cardY + 81}" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="24" font-weight="700" fill="${avatarText}">${escapeXml(example.avatar)}</text>
      <text x="${cardX + cardPadX + 74}" y="${cardY + 65}" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700" fill="#1a1a2e">${escapeXml(example.businessName)}</text>
      <text x="${cardX + cardPadX + 74}" y="${cardY + 91}" font-family="Arial, Helvetica, sans-serif" font-size="16" font-weight="400" letter-spacing="1" fill="#8b8b99">${slideIndex + 1} / ${totalSlides}</text>
      <rect x="${cardX + cardPadX}" y="${cardY + 144}" width="72" height="6" rx="3" fill="${example.accent}"/>
      ${textLines({
        lines: titleLines,
        x: cardX + cardPadX,
        y: cardY + 238,
        size: slideIndex === 0 ? 78 : 58,
        lineHeight: slideIndex === 0 ? 84 : 64,
        color: "#1a1a2e",
        weight: 700,
      })}
      ${bodyLines.length ? textLines({
        lines: bodyLines,
        x: cardX + cardPadX,
        y: cardY + (slideIndex === 0 ? 500 : 428),
        size: 46,
        lineHeight: 58,
        color: "#555566",
        weight: 600,
      }) : ""}
      ${activeDots}
    </svg>
  `;

  return sharp(Buffer.from(svg)).jpeg({ quality: 90, mozjpeg: true }).toBuffer();
}

async function renderCarouselAssets() {
  for (const example of carouselExamples) {
    const backgroundPath = path.join(OUT_DIR, `hero-bg-${String(example.sourceIndex).padStart(2, "0")}.jpg`);

    for (let slideIndex = 0; slideIndex < example.slides.length; slideIndex += 1) {
      const outPath = path.join(
        OUT_DIR,
        `carousel-${String(example.sourceIndex).padStart(2, "0")}-slide-${slideIndex + 1}.jpg`
      );

      const buffer = await renderCarouselSlide({ backgroundPath, example, slideIndex });
      await fs.writeFile(outPath, buffer);
      console.log(`rendered ${path.basename(outPath)}`);
    }
  }
}

async function generateImage(apiKey, prompt, attempt = 1) {
  const effectivePrompt = attempt === 1
    ? prompt
    : `GENERATE THE IMAGE DIRECTLY. Do not describe the image. Follow every MUST and MUST NOT rule.\n\n${prompt}`;

  const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`, {
    method: "POST",
    headers: {
      "x-goog-api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ parts: [{ text: effectivePrompt }] }],
      generationConfig: { responseModalities: ["image", "text"] },
    }),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Google API ${response.status}: ${text.slice(0, 500)}`);
  }

  const result = await response.json();
  const part = result.candidates?.[0]?.content?.parts?.find((item) => item.inlineData?.data || item.text?.startsWith("data:image"));

  if (!part) {
    throw new Error("Google returned no image part");
  }

  if (part.inlineData?.data) {
    return Buffer.from(part.inlineData.data, "base64");
  }

  const dataUrlMatch = part.text.match(/^data:[^;]+;base64,(.+)$/);
  if (!dataUrlMatch) {
    throw new Error("Google returned an unreadable image payload");
  }

  return Buffer.from(dataUrlMatch[1], "base64");
}

async function main() {
  const env = parseDotEnv(await fs.readFile(APP_ENV_PATH, "utf8"));
  const apiKey = env.GOOGLE_AI_API_KEY || env.NEXT_PUBLIC_GOOGLE_AI_API_KEY;

  if (!apiKey) {
    throw new Error(`Missing GOOGLE_AI_API_KEY in ${APP_ENV_PATH}`);
  }

  await fs.mkdir(OUT_DIR, { recursive: true });

  for (let index = 0; index < mediaItems.length; index += 1) {
    const [filename, type, business, scene] = mediaItems[index];
    const target = sizes[type];
    const outPath = path.join(OUT_DIR, filename);

    try {
      await fs.access(outPath);
      console.log(`skip ${filename}`);
      continue;
    } catch {
      // Generate missing files.
    }

    const prompt = buildPrompt({ business, scene, type, aspect: target.aspect });
    let sourceBuffer = null;
    let lastError = null;

    for (let attempt = 1; attempt <= 3; attempt += 1) {
      try {
        sourceBuffer = await generateImage(apiKey, prompt, attempt);
        break;
      } catch (error) {
        lastError = error;
        if (attempt < 3) {
          await new Promise((resolve) => setTimeout(resolve, attempt * 1200));
        }
      }
    }

    if (!sourceBuffer) {
      throw new Error(`Failed ${filename}: ${lastError?.message || "unknown error"}`);
    }

    await sharp(sourceBuffer)
      .resize(target.width, target.height, { fit: "cover", position: "center" })
      .jpeg({ quality: 88, mozjpeg: true })
      .toFile(outPath);

    console.log(`generated ${filename}`);
  }

  await renderCarouselAssets();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
