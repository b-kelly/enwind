/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,ts}", "./index.html"],
    theme: {
        extend: {},
    },
    plugins: [require("enwind")],
};
