/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}", "./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    screens: {
      sm: "649px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      fontFamily: {
        lora: ["var(--font-lora)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
      backgroundImage: {
        hero: "url(/hero/bg.png)",
        menu: "url(/menu/bg.png)",
        reservation: "url(/reservation/bg.png)",
        footer: "url(/footer/bg.png)",
      },
      colors: {
        body: "#e5e5e5",
        white: "#fff",
        green: { DEFAULT: "#539592", hover: "#40807d" },
        black: { DEFAULT: "#273029", heavy: "#1b211c" },
        grey: "#888888",
        orange: { DEFAULT: "#f2994a", hover: "#da863c" },
        outline: "#f1f1f1",
        pink: "#ffa5a5",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
