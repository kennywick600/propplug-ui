// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx,mdx}", // must include all src folders
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
export default config
