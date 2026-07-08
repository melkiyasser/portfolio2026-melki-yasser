import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #0f172a 0%, #134e4a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "#2dd4bf",
            fontSize: 28,
            fontWeight: 600,
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 14,
              height: 14,
              borderRadius: 999,
              background: "#2dd4bf",
            }}
          />
          Open to full-time roles in Germany
        </div>
        <div style={{ display: "flex", color: "white", fontSize: 76, fontWeight: 700 }}>
          Yasser Melki
        </div>
        <div style={{ display: "flex", color: "#5eead4", fontSize: 38, fontWeight: 500, marginTop: 12 }}>
          Full-Stack Developer · React &amp; Node.js
        </div>
        <div style={{ display: "flex", color: "#94a3b8", fontSize: 28, marginTop: 30 }}>
          Gelsenkirchen, Germany
        </div>
      </div>
    ),
    { ...size }
  );
}
