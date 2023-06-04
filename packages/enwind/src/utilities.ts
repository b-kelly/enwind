import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

/** Enwind specific theme config; values that match the default config are there for strict mode */
export const utilities: NonNullable<Config["theme"]> = {
    spacing: {
        xs: defaultTheme.spacing[1],
        sm: defaultTheme.spacing[2],
        md: defaultTheme.spacing[4],
        lg: defaultTheme.spacing[6],
    },
    borderRadius: {
        DEFAULT: defaultTheme.borderRadius.DEFAULT,
        full: defaultTheme.borderRadius.full,
    },
    borderWidth: {
        DEFAULT: defaultTheme.borderWidth.DEFAULT,
    },
    opacity: {
        disabled: defaultTheme.opacity[60],
    },
    outlineWidth: {
        sm: defaultTheme.outlineWidth[2],
    },
};
