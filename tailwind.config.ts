import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-card":
          "linear-gradient(rgba(27, 30, 36, 0) 0%, rgba(27, 30,36 ,.9) 84.21%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        hero: "linear-gradient(0deg, rgb(201, 188, 244) 0%, rgb(255, 255, 255) 95.83%)",
      },
      boxShadow: {
        input:
          "rgba(27, 30, 36, 0.06) 0px 8px 16px, rgba(27, 30, 36, 0.04) 0px 0px 8px;",
      },
    },
  },
  plugins: [],
};
export default config;
