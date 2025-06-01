// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}', // make sure this matches your folder layout
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
export default config;
