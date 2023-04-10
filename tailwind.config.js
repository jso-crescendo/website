/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        background: "#FDFDFD",
        primary: {
          lighter: "#5045c4",
          main: "#2417b5",
          darker: "#1d1291",
        },
        secondary: {
          lighter: "#c44d50",
          main: "#b52124",
          darker: "#911a1d",
        },
        accent: {
          lighter: "#3f7d49",
          main: "#0f5d1c",
          darker: "#0c4a16",
        },
      },
      textColor: {
        onBackground: "#212121",
        onPrimary: "#c9c9dd",
        onSecondary: "#e5efcf",
        onAccent: "#dff1ba",
      },
      fontFamily: {
        sans: ["var(--font-montserrat)"],
        serif: ["var(--font-lora)"]
      }
    },
  },
};
