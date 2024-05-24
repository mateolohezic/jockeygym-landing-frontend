import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors:{
        'jockey':{
          DEFAULT: '#29A7DE',
          'light': '#4DB9E8',
          'dark': '#072B55',
          'transparent': '#C0E3FF'
        },
        'invalid':{
          DEFAULT: '#F45050'
        },
        'hotsale':{
          DEFAULT: '#DE3429'
        }
      },
      fontFamily: {
        'gotham': ['Gotham', 'sans-serif'],
        'gotham-black': ['Gotham Black', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;