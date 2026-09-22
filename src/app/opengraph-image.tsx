import { ImageResponse } from "next/og";

export const alt = "Parth Vasave — Software Developer, Mumbai";
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
          justifyContent: "space-between",
          padding: 80,
          background: "#09090b",
          color: "#fafafa",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 72,
            height: 72,
            borderRadius: 14,
            background: "#EAB308",
            color: "#09090b",
            fontSize: 32,
            fontWeight: 700,
          }}
        >
          PV
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 88, fontWeight: 700, letterSpacing: -2 }}>
            Parth Vasave
          </div>
          <div style={{ fontSize: 36, color: "#a1a1aa", marginTop: 12 }}>
            Software Developer · Mumbai, India
          </div>
        </div>
      </div>
    ),
    size,
  );
}
