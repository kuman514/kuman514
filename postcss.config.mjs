/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'emphasize-underline':
          'linear-gradient(180deg, var(--tw-gradient-stops))',
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
      },
      zIndex: {
        header: '99999999',
      },
    },
  },
};

export default config;
