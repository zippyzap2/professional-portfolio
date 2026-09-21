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
        primary: "#0f172a", // Deep slate for professional feel
        accent: "#3b82f6",  // Modern blue for highlights
        surface: "#f8fafc", // Light gray for contrast
      },
    },
  },
  plugins: [],
};
export default config;
