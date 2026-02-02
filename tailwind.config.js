/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#b46a45',
                dark: '#1A1A1A',
                light: '#f2d4af',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                header: ['Space Grotesk', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
