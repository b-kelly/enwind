export default {
    light: {
        body: {
            DEFAULT: "var(--color-white)",
            content: {
                DEFAULT: "var(--color-gray-800)",
                light: "var(--color-gray-700)",
                dark: "var(--color-black)",
            },
            highlight: "var(--color-neutral-200)",
            overlay: "rgb(0 0 0 / 0.5)", // TODO color choice,
        },
        primary: {
            DEFAULT: "var(--color-indigo-500)",
            content: "var(--color-white)",
            focus: "var(--color-indigo-600)",
        },
        success: {
            DEFAULT: "var(--color-green-500)",
            focus: "var(--color-green-600)",
        },
        warn: {
            DEFAULT: "var(--color-amber-400)",
            focus: "var(--color-amber-500)",
        },
        danger: {
            DEFAULT: "var(--color-red-500)",
            focus: "var(--color-red-600)",
        },
        code: {
            DEFAULT: "var(--color-gray-800)", // body.content.DEFAULT
            addition: "var(--color-green-500)", // success.DEFAULT
            attr: "var(--color-black)", // body.content.dark
            builtin: "var(--color-green-700)",
            comment: "var(--color-gray-700)", // body.content.light
            deletion: "var(--color-red-500)", // danger.DEFAULT
            literal: "var(--color-green-700)",
            meta: "var(--color-cyan-700)",
            string: "var(--color-indigo-500)", // primary.DEFAULT
            tag: "var(--color-gray-800)", // body.content.DEFAULT
            title: "var(--color-red-900)",
            variable: "var(--color-red-900)",
        },
    },
    dark: {
        body: {
            DEFAULT: "var(--color-slate-900)",
            content: {
                DEFAULT: "var(--color-gray-200)",
                light: "var(--color-gray-300)",
                dark: "var(--color-white)",
            },
            highlight: "var(--color-slate-600)",
            overlay: "rgb(0 0 0 / 0.5)", // TODO copied from light mode
        },
        primary: {
            DEFAULT: "var(--color-teal-500)",
            content: "var(--color-black)",
            focus: "var(--color-teal-600)",
        },
        success: {
            DEFAULT: "var(--color-green-500)",
            focus: "var(--color-green-600)",
        },
        warn: {
            DEFAULT: "var(--color-amber-400)",
            focus: "var(--color-amber-500)",
        },
        danger: {
            DEFAULT: "var(--color-red-500)",
            focus: "var(--color-red-600)",
        },
        code: {
            DEFAULT: "var(--color-gray-200)", // body.content.DEFAULT
            addition: "var(--color-green-500)", // success.DEFAULT
            attr: "var(--color-white)", // body.content.dark
            builtin: "var(--color-green-600)",
            comment: "var(--color-gray-300)", // body.content.light
            deletion: "var(--color-red-500)", // danger.DEFAULT
            literal: "var(--color-green-500)",
            meta: "var(--color-cyan-500)",
            string: "var(--color-teal-500)", // primary.DEFAULT
            tag: "var(--color-gray-200)", // body.content.DEFAULT
            title: "var(--color-orange-700)",
            variable: "var(--color-orange-700)",
        },
    },
};
