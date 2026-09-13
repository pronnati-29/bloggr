// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: [
      "images.unsplash.com", // ✅ for Unsplash
      "media.licdn.com",
      "www.datocms-assets.com",
      "www.opencolleges.edu.au",
      "www.iienstitu.com",
    ],
  },
};

module.exports = nextConfig;
