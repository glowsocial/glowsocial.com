/**
 * /.well-known/agent-skills/index.json — Agent Skills Discovery (RFC v0.2.0)
 * Index of skills this site exposes to AI agents.
 */
export function GET() {
  const index = {
    $schema: "https://schemas.agentskills.io/discovery/0.2.0/schema.json",
    skills: [
      {
        name: "glow-social-management",
        type: "skill-md",
        description:
          "Affordable done-for-you social media management for local businesses — content generation, multi-platform publishing, Google Review monitoring, and a $99/mo starter plan.",
        url: "https://glowsocial.com/.well-known/agent-skills/SKILL.md",
        digest:
          "sha256:ffc18ee883fd8a6d91ebce1d41c9a11e7a13440ab1b823f246297a2d73e36d05",
      },
    ],
  };

  return new Response(JSON.stringify(index, null, 2), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
