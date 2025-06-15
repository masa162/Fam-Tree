/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#d6eadd',   // 明るい若草色
          DEFAULT: '#7cbf8c', // ベースグリーン
          dark: '#4b8158',    // 深みのある緑
        },
        accent: {
          yellow: '#f3eac2',  // 柔らかな黄色（光）
          brown: '#9d856a',   // 木の幹や土の色（アクセント）
        },
      },
      fontFamily: {
        sans: ['"Noto Sans JP"', 'ui-sans-serif', 'system-ui'],
        serif: ['"Shippori Mincho B1"', 'serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: true, // 有効な全テーマを使用（将来カスタムテーマ化も可）
    darkTheme: 'dark',
    logs: false
  }
}
