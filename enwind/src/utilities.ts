import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const sp = defaultTheme.spacing;

export const utilities: NonNullable<Config["theme"]> = {
    spacing: {
        sm: sp[2],
        md: sp[4],
    },
};
