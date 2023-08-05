import { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import { PluginUtils } from "tailwindcss/types/config";

// the default theme values are all callable, so cast them for code cleanliness
type ResolvableTo = <T>(utils: PluginUtils) => T;
const heightConf = defaultTheme.height as ResolvableTo;
const maxHeightConf = defaultTheme.maxHeight as ResolvableTo;
const widthConf = defaultTheme.width as ResolvableTo;

/** Enwind specific theme config; values that match the default config are there for strict mode */
export const utilities: NonNullable<Config["theme"]> = {
    spacing: {
        px: defaultTheme.spacing["px"],
        0: defaultTheme.spacing[0],
        xs: defaultTheme.spacing[1],
        sm: defaultTheme.spacing[2],
        md: defaultTheme.spacing[4],
        lg: defaultTheme.spacing[6],
        xl: defaultTheme.spacing[8],
        "2xl": defaultTheme.spacing[12],
        "3xl": defaultTheme.spacing[16],
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

    // don't override the default height/width with the new spacing
    height: (config) => ({
        ...defaultTheme.spacing,
        ...heightConf(config),
    }),
    maxHeight: (config) => ({
        ...defaultTheme.spacing,
        ...maxHeightConf(config),
    }),
    width: (config) => ({
        ...defaultTheme.spacing,
        ...widthConf(config),
    }),
};
