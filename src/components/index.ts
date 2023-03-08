import { CssInJs } from "../types";
import button from "./button";

const components: CssInJs = (theme) => ({
    ...button(theme),
});

export default components;
