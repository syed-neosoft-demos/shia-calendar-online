import { ImageResponse } from "next/og";

export const alt = "Shia Calendar Online - Hijri dates and Shia Islamic events";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background: "#030712",
          color: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          fontFamily: "Arial, sans-serif",
          height: "100%",
          justifyContent: "space-between",
          padding: "76px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            gap: "22px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#16a34a",
              borderRadius: "28px",
              color: "#052e16",
              display: "flex",
              fontSize: "48px",
              fontWeight: 700,
              height: "96px",
              justifyContent: "center",
              width: "96px",
            }}
          >
            1
          </div>
          <div
            style={{
              color: "#a7f3d0",
              display: "flex",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            Hijri Calendar
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "84px",
              fontWeight: 800,
              lineHeight: 1.05,
            }}
          >
            Shia Calendar Online
          </div>
          <div
            style={{
              color: "#d1d5db",
              display: "flex",
              fontSize: "34px",
              lineHeight: 1.35,
              maxWidth: "960px",
            }}
          >
            Shia Islamic events, Hijri dates, martyrdoms, celebrations, and
            Ahlul Bayt occasions.
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            borderTop: "2px solid #1f2937",
            color: "#9ca3af",
            display: "flex",
            fontSize: "28px",
            justifyContent: "space-between",
            paddingTop: "30px",
          }}
        >
          <span>shia-calendar-online.vercel.app</span>
          <span>By Syed Hasnain Mehadi</span>
        </div>
      </div>
    ),
    size
  );
}

