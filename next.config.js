/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    minimumCacheTTL: 60 * 60 * 24,
    remotePatterns: [
      {
        protocol: "http",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "github.com",
      },
      {
        protocol: "https",
        hostname: "**.githubusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.nhcarrigan.com",
      },
      {
        protocol: "https",
        hostname: "avatars.dicebear.com",
      },
    ],
    formats: ["image/webp"],
  }
}

module.exports = nextConfig
