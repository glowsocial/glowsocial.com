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
          "Done-for-you social media management for local businesses — content generation, multi-platform publishing, and Google Review monitoring.",
        url: "https://glowsocial.com/.well-known/agent-skills/SKILL.md",
        digest:
          "sha256:3aa06e342fd758397bdbafa2ce51999e6baafd7f559b955b58b9ab0e5f328af7",
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
