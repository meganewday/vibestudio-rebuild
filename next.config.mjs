import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextProjectConfig} */
const nextConfig = {
  // Your existing config options go here (e.g., reactStrictMode, etc.)
  reactStrictMode: true,
};

export default withPWA(nextConfig);
