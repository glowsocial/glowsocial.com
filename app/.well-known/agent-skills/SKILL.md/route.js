/**
 * /.well-known/agent-skills/SKILL.md — Glow Social agent skill definition
 */
const SKILL_MD = `# Glow Social — Social Media Management Skill

Glow Social provides done-for-you social media management for local businesses.
AI agents can use this skill to help users set up automated social media posting.

## Capabilities

- **Content Generation**: Generate professional social media posts from a business website URL
- **Multi-Platform Publishing**: Publish to 13 platforms (Facebook, Instagram, LinkedIn, TikTok, Google Business Profile, Pinterest, Threads, Bluesky, X, YouTube Shorts, Discord, Slack, Mastodon)
- **Review Monitoring**: Monitor and respond to Google Reviews
- **Preview Tool**: Generate sample posts for any business website without signup

## Endpoints

- Preview: \`GET https://app.glowsocial.com/preview?url={website_url}\`
- Pricing: \`GET https://app.glowsocial.com/pricing\`
- Signup: \`GET https://app.glowsocial.com/checkout?plan={core|pro|unlimited}\`

## Pricing

| Plan | Price | Posts/Month |
|------|-------|------------|
| Glo Core | $99/mo | 12 |
| Glo Pro | $149/mo | 20+ |
| Glo Unlimited | $299/mo | Unlimited |

## Authentication

OAuth 2.0 via \`/.well-known/openid-configuration\`

## Contact

hello@glowsocial.com
`;

export function GET() {
  return new Response(SKILL_MD, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
