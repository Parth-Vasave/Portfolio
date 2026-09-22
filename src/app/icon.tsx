import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#EAB308",
          color: "#09090b",
          borderRadius: 7,
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: -0.5,
        }}
      >
        PV
      </div>
    ),
    size,
  );
}
