const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      purple: "#1a5fa8",
      red: "#cf0000",
      green: "#00ac56",
      indigo: {
        light: "#9ed1ff",
        dark: "#002859",
      },
      gray: {
        light: {
          1: "#f0f0f0",
          2: "#dbdbdb",
          3: "#aaaaaa",
          4: "#8a8a8a",
        },
        dark: {
          1: "#1e2d3d",
          2: "#162535",
          3: "#0f1e2d",
          4: "#0b1825",
          5: "#07101b",
        },
      },
    },
    fontFamily: {
      sans: [
        "var(--font-sans-primary)",
        "var(--font-calibre)",
        "-apple-system",
        "BlinkMacSystemFont",
        '"PingFang SC"',
        '"Hiragino Sans GB"',
        '"Microsoft YaHei"',
        '"Segoe UI"',
        "sans-serif",
      ],
      mono: ["var(--font-jetbrains-mono)", "monospace"],
    },
    extend: {
      animation: {
        meteor: "meteor 5s linear infinite",
      },
      keyframes: {
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: 1,
          },
          "70%": {
            opacity: 1,
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
