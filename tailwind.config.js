module.exports = {
    mode: 'jit',
    purge: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                title: ['Montserrat', 'sans-serif'],
            },
            colors: {
                primary: {
                    50: '#6dffff',
                    100: '#63ffff',
                    200: '#59ffff',
                    300: '#4ffaff',
                    400: '#45f0ff',
                    500: '#3be6f8',
                    600: '#31dcee',
                    700: '#27d2e4',
                    800: '#1dc8da',
                    900: '#13bed0',
                },
            },
            zIndex: {
                hero: -1,
                mandala: -2,
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
