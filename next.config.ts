import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // images: {
  //   domains: ["example.com"], // Replace with your image domains
  // },
  env: {
    CUSTOM_API_URL: process.env.CUSTOM_API_URL, // Access this in your app with process.env.CUSTOM_API_URL
  },
  i18n: {
    locales: ["en-US", "fr", "es"],
    defaultLocale: "en-US",
  },
  webpack: (config) => {
    // Custom Webpack configuration
    return config;
  },
};

export default nextConfig;
