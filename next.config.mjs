import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const baseConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(baseConfig);

