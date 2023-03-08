import { CSSRuleObject, PluginAPI } from "tailwindcss/types/config";

export type CssInJs = (theme: PluginAPI["theme"]) => CSSRuleObject;
