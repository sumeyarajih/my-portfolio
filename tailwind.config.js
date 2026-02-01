/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: '#FF6B00',
                dark: '#1A1A1A',
                light: '#F5F5F5',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                header: ['Space Grotesk', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
