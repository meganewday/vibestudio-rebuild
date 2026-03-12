/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './src/**/*.{ts,tsx,mdx}',
    './content/**/*.{mdx,md}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        surface: {
          1: '#111111',
          2: '#1A1A1A',
          3: '#242424',
        },
        accent: '#C8F53A',
        text: {
          primary: '#F5F2EC',
          muted: 'rgba(245,242,236,0.60)',
        },
      },
      borderRadius: {
        md: '6px',
        lg: '8px',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'system-ui', 'sans-serif'],
        body: ['var(--font-barlow)', 'system-ui', 'sans-serif'],
        label: ['var(--font-barlow-condensed)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;

