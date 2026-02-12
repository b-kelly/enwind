import { PluginAPI } from "tailwindcss/plugin";

export type CssInJs = Parameters<PluginAPI["addBase"]>[0];

export type ThemedCss = (theme: PluginAPI["theme"]) => CssInJs;
