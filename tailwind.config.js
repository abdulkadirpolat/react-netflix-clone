module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      inset: {
        "1/20": "5%",
        "1/10": "10%",
        "1/5": "20%",
        t30: "30%",
      },
      padding: {
        "1/25":"4%",
        "1/20": "5%",
       "15" :"3.75rem"
      },
      borderRadius: {
        smm: "4px",
      },
      minWidth: {
        m1: "380px",
      },
      maxWidth: {
        mw: "450px",
      },
      minHeight: {
        h: "625px",
        h2: "660px",
        h3: "550px",
        h4: "515px",
      },
      fontSize: {
        100: ".85vw",
        200: "1.2vw",
        300: "1.5vw",
      },
      colors: {
        nx: {
          lkblue: "#0071eb",
          glblue: "#0080ff",
          red: "#e50914",
          "gray-100": "#e5e5e5",
          "gray-200": "#b3b3b3",
          "gray-300": "#999999",
          "gray-400": "#8c8c8c",
          "gray-500": "#757575",
          "gray-600": "#737373",
          "gray-700": "#333",
          grey: "#808080",
          yellow: "#e87c03",
          green: "#46d369",
          black: "#141414",
        },
        opac: {
          100: "#000000bf",
          200: "#0000008a",
        },
      },
      screens: {
        "2xlm": { max: "1601px" },
        // => @media (max-width: 1601px) { ... }

        xlm: { max: "1280px" },
        // => @media (max-width: 1280px) { ... }

        mdm: { max: "840px" },
        // => @media (max-width: 840px) { ... }

        smm: { max: "480px" },
        // => @media (max-width: 480px) { ... }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
