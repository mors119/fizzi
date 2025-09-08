/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Tailwind가 className 검색할 경로
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-alpino)", "sans-serif"], // 커스텀 폰트
      },
      keyframes: {
        "slide-left": {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-left": "slide-left 3s linear infinite",
        "spin-slow": "spin 6s linear infinite",
      },
    },
  },
  plugins: [],
};
