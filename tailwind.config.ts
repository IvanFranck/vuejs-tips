import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{ts,vue,tsx}",
  ],

  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

