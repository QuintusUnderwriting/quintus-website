import type { MetadataRoute } from "next";

const routes = [
  "",
  "/about-us",
  "/products",
  "/property-owners",
  "/specialist-home-insurance",
  "/landowners-liability",
  "/bespoke-schemes",
  "/become-a-broker-partner",
  "/privacy-policy",
  "/terms-and-conditions",
  "/fca-notice",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://quintusunderwriting.com${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
