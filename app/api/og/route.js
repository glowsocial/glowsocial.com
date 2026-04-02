import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

// Pinterest-optimized: 1000×1500 (2:3)
const WIDTH = 1000;
const HEIGHT = 1500;

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Glow Social";
  const description = searchParams.get("description") || "";

  // Truncate title for display
  const displayTitle =
    title.length > 80 ? title.slice(0, 77) + "…" : title;
  const displayDesc =
    description.length > 120 ? description.slice(0, 117) + "…" : description;

  return new ImageResponse(
    (
      <div
        style={{
          width: WIDTH,
          height: HEIGHT,
          display: "flex",
          flexDirection: "column",
          background: "#192734", // --navy
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background accent blob top-right */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -120,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(147, 153, 204, 0.18)", // --everglow muted
            display: "flex",
          }}
        />

        {/* Background accent blob bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: 80,
            left: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(215, 226, 120, 0.10)", // --accent muted
            display: "flex",
          }}
        />

        {/* Top logo area */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "60px 64px 0",
          }}
        >
          {/* Glow dot */}
          <div
            style={{
              width: 16,
              height: 16,
              borderRadius: "50%",
              background: "#d7e278",
              marginRight: 12,
              display: "flex",
            }}
          />
          <span
            style={{
              color: "#ffffff",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: "1px",
              textTransform: "uppercase",
            }}
          >
            Glow Social
          </span>
        </div>

        {/* Main content — fills middle */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "60px 64px",
          }}
        >
          {/* Eyebrow label */}
          <div
            style={{
              display: "flex",
              marginBottom: 32,
            }}
          >
            <span
              style={{
                background: "#d7e278",
                color: "#192734",
                fontSize: 18,
                fontWeight: 700,
                padding: "8px 20px",
                borderRadius: 24,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Social Media Tips
            </span>
          </div>

          {/* Title */}
          <div
            style={{
              color: "#ffffff",
              fontSize: displayTitle.length > 50 ? 56 : 68,
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: 32,
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            {displayTitle}
          </div>

          {/* Description */}
          {displayDesc && (
            <div
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: 26,
                lineHeight: 1.5,
                display: "flex",
                flexWrap: "wrap",
              }}
            >
              {displayDesc}
            </div>
          )}
        </div>

        {/* Bottom CTA bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "36px 64px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <span
            style={{
              color: "rgba(255,255,255,0.5)",
              fontSize: 22,
              letterSpacing: "0.5px",
            }}
          >
            glowsocial.com
          </span>

          <div
            style={{
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
            }}
          >
            Read More →
          </div>
        </div>
      </div>
    ),
    {
      width: WIDTH,
      height: HEIGHT,
    }
  );
}
