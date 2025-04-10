// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // ✅ critical for dark mode with class toggle
  content: [
    "./app/**/*.{ts,tsx}",       // Scans all files inside the `app` folder
    "./components/**/*.{ts,tsx}", // Scans all files inside the `components` folder
    "./pages/**/*.{ts,tsx}",      // Include pages folder too
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
