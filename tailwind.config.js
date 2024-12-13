/** @type {import('tailwindcss').Config} */
export default {
    
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],

    theme: {
        extend: {
            fontFamily: {
                'serif': [ 'sserif', 'serif' ],
                'sans': [ 'ssans-serif', 'sans' ],
            }
        },
    },

    plugins: [],
}

