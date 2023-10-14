/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "roc-primary": "#0076ce",
        "fs-search-button-text": "#fff",
        "fs-search-surface-bg": "#fafbfc",
        darkgray: "#aeb0b4",
        silver: "#bfbfbf",
        dimgray: "#616161",
        black: "#000",
        gray: "rgba(255, 255, 255, 0)",
        "fs-search-red": "#ff6666",
        "fs-search-table-bg": "#f4f4f4",
        "fs-search-banner-blue": "#ddf3ff",
        "fs-search-banner-purple": "#efd9f9",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        inter: "Inter",
        poppins: "Poppins",
      },
      borderRadius: {
        "2xl": "21px",
        "3xs": "10px",
        xl: "20px",
        mini: "15px",
        "10xs": "3px",
      },
    },
    fontSize: {
      base: "16px",
      lg: "18px",
      xl: "20px",
      "46xl": "65px",
      "5xl": "24px",
      sm: "14px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
  