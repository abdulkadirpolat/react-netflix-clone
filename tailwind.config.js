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
      height: {
        "h-17": "68px",
        "h-41": "41px",
        "h-25": "25px",
        "h-60": "60px",
        "h-70": "70px",
        "h-75": "75px",
        "h-91": "91px",
        "61": "245px",
      },
      padding: {
        "1/25": "4%",
        "1/20": "5%",
        15: "3.75rem",
      },
      margin: {
        "m-1": "3%",
      },
      borderRadius: {
        smm: "4px",
      },
      minWidth: {
        m74: "74px",
        m100: "100px",
        m220: "220px",
        m380: "380px",
        m450: "450px",
        m500: "500px",
      },
      maxWidth: {
        mw: "450px",
        mw500: "500px",
        "5xl-1": "1000px",
      },
      minHeight: {
        "min-h-1/4": "25%",
        900: "900px",
        720: "720px",
        h: "625px",
        h2: "660px",
        h3: "550px",
        h4: "515px",
        mh40: "40px",
        mh50: "50px",
        mh60: "60px",
        mh70: "70px",
        
      },
      maxHeight: {
        0: "0",
        "1/4": "25%",
        "1/2": "50%",
        "3/4": "75%",
        full: "100%",
        "xl": "503px",
        "3xl": "720px",
        "4xl": "900px"
      },
      fontSize: {
        100: ".85vw",
        200: "1.2vw",
        300: "1.5vw",
        f13: "13px",
      },
      colors: {
        nx: {
          lkblue: "#0071eb",
          glblue: "#0080ff",
          red: "#e50914",
          "red-2": "#FE0C18",
          "gray-10": "#f3f3f3",
          "gray-50": "#e6e6e6",
          "gray-60": "#e5e5e5",
          "gray-100": "#e5e5e5",
          "gray-200": "#b3b3b3",
          "gray-250": "#a6a6a6",
          "gray-300": "#999999",
          "gray-400": "#8c8c8c",
          "gray-500": "#757575",
          "gray-600": "#737373",
          "gray-700": "#333",
          "gray-800": "#181818",
          "gray-900": "#141414",
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
      cursor: ["hover", "focus"],
      flex: {
        2: "2 2 0%",
      },
      screens: {
        "2xlm": { max: "1601px" },
        // => @media (max-width: 1601px) { ... }

        "2xlmin-1": { min: "1601px" },
        // => @media (min-width: 1601px) { ... }

        "2xlmin-2": { min: "1500px" },
        // => @media (min-width: 1500px) { ... }

        "2xlmin-3": { min: "1450px" },
        // => @media (min-width: 1450px) { ... }

        xlm: { max: "1280px" },
        // => @media (max-width: 1280px) { ... }

        "xlmin-1": { min: "1330px" },
        // => @media (min-width: 1330px) { ... }

        "xlmin-2": { min: "1280px" },
        // => @media (min-width: 1280px) { ... }

        "xlmin-3": { min: "1200px" },
        // => @media (min-width: 1200px) { ... }

        lgm: { min: "950px" },
        // => @media (min-width: 950px) { ... }

        lgmax: { max: "950px" },
        // => @media (max-width: 950px) { ... }

        "mdmin-1": { min: "885px" },
        // => @media (min-width: 885px) { ... }

        "mdmin-2": { min: "840px" },
        // => @media (min-width: 840px) { ... }

        "mdmin-3": { min: "740px" },
        // => @media (min-width: 740px) { ... }

        "mdm-3": { max: "740px" },
        // => @media (max-width: 740px) { ... }

        "mdm-2": { max: "700px" },
        // => @media (min-width: 700px) { ... }

        mdm: { max: "840px" },
        // => @media (max-width: 840px) { ... }

        smm: { max: "480px" },
        // => @media (max-width: 480px) { ... }

        smm2: { max: "500px" },
        // => @media (max-width: 500px) { ... }

        smm3: { max: "550px" },
        // => @media (max-width: 550px) { ... }

        smin: { min: "480px" },
        // => @media (min-width: 480px) { ... }
        "2xl-lg": { min: "950px", max: "1449px" },

        "xl-md": { min: "841px", max: "1280px" },

        "md-sm": { min: "481px", max: "840px" },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
