#!/usr/bin/env node
/**
 * Submit URLs to IndexNow after publishing new or updated pages.
 *
 * Usage:
 *   npm run indexnow
 *   npm run indexnow -- https://glowsocial.com/blog/example
 *   npm run indexnow -- --dry-run
 */

const HOST = "glowsocial.com";
const KEY = "4f5e9a2c8b6d4a1f9c0e3b7a6d8f2c1e";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const ENDPOINT = "https://api.indexnow.org/indexnow";
const SITEMAP_URL = "https://glowsocial.com/sitemap.xml";

const args = process.argv.slice(2);
const dryRun = args.includes("--dry-run");
const explicitUrls = args.filter((arg) => arg.startsWith("https://"));

async function urlsFromSitemap() {
  const response = await fetch(SITEMAP_URL);
  if (!response.ok) {
    throw new Error(`Could not fetch sitemap: ${response.status}`);
  }

  const xml = await response.text();
  return [...xml.matchAll(/<loc>(.*?)<\/loc>/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith(`https://${HOST}/`));
}

async function submit(urlList) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  };

  if (dryRun) {
    console.log(`Dry run: would submit ${urlList.length} URLs to IndexNow.`);
    console.log(urlList.slice(0, 20).join("\n"));
    if (urlList.length > 20) console.log(`...and ${urlList.length - 20} more`);
    return;
  }

  const response = await fetch(ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`IndexNow failed: ${response.status} ${text}`);
  }

  console.log(`Submitted ${urlList.length} URLs to IndexNow.`);
}

async function main() {
  const urls = explicitUrls.length ? explicitUrls : await urlsFromSitemap();
  const uniqueUrls = [...new Set(urls)];

  if (uniqueUrls.length === 0) {
    console.log("No URLs to submit.");
    return;
  }

  await submit(uniqueUrls);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
