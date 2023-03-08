/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./demo/**/*.{html,ts}", "./demo/index.html"],
    theme: {
        extend: {},
    },
    plugins: [require("../dist/plugin.umd.cjs")],
};
