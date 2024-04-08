import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors:{
        'jockey':{
          DEFAULT: '#29A7DE',
          'light': '#4DB9E8',
          'dark': '#072B55',
          'transparent': '#C0E3FF'
        },
      },
      fontFamily: {
        'gotham': ['Gotham', 'sans-serif'],
        'gotham-black': ['Gotham Black', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
