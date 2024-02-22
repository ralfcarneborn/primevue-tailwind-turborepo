import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    extend: {
      colors: {
        "smooth-primary": "rgba(244, 246, 251, 0.9)",
        "smooth-button": "rgba(231, 234, 255, 0.1)",
        "white-opacity-15": "rgba(255,255,255,0.15)",
        "smooth-default": "#121313",
        "smooth-level1": "#171719",
        "smooth-level2": "#232326",
        "smooth-level3": "#2E2F33",
      },
    },
  },
  plugins: [],
};
export default config;
