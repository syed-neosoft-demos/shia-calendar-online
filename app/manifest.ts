import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shia Calendar Online",
    short_name: "Shia Calendar",
    description:
      "Check Hijri dates, Shia Islamic events, martyrdoms, celebrations, and important Ahlul Bayt occasions.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#030712",
    theme_color: "#030712",
    categories: ["education", "lifestyle", "utilities"],
    lang: "en",
    icons: [
      {
        src: "/calendar.gif",
        sizes: "48x48",
        type: "image/gif",
      },
    ],
  };
}

