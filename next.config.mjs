import createMDX from '@next/mdx';
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const baseConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

const withPWAConfig = withPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
});

export default withPWAConfig(withMDX(baseConfig));

