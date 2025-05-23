import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        designjoy: '#ECE6E8',
      },
      fontFamily: {
        sans: ['Figtree-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;