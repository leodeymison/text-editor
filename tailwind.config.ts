import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: {
          primary: "#515151",
          secondary: "#414141",
          secondary1: "#202020",
          active: "#08DD7E",
        },
        text: {
          primary: "#fff",
          link: "#0404FF",
          secondary: "#d1d1d1",
          secondary2: "#b5b5b5",
          secondary3: "#989898",
          active: "#000",
          danger: "#F00",
          fixed: "#fff",
        },
        bg: {
          primary: "#000",
          primary2: "#060606",
          active: "#f1f1f1",
          secondary: "#101010",
          secondary1: "#202020",
          secondary2: "#515151",
          fixed: "#33333378",
        },
        button: {
          primary: "#90D5FF",
          success: "#08DD7E",
          danger: "#FF0000",
          warnning: "#FFFF00",
          secondary: "#6c757d",
          noutfound: "#8562b6",
        },
        buttonText: {
          primary: "#000",
          success: "#000",
          danger: "#FFF",
          secondary: "#FFF",
          warnning: "#000",
          noutfound: "#FFF",
        },
        icons: {
          primary: "#929292",
          light: "#eee",
          active: "#08DD7E",
          success: "#08DD7E",
          background: "#27272A",
          danger: "#FF0000",
          warnning: "#FFFF00",
          hover: {
            light: "#fff",
            success: "#09DD9E",
            background: "#47474A",
            danger: "#FF3333",
            warnning: "#FFFF55",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
