import {presetPalettes} from "./Bright.ts";
import {presetDarkPalettes} from "./Dark.ts";

export const brightTheme = {
    mode: "light",
    color: presetPalettes,
};

export const darkTheme = {
    mode: "dark",
    color: presetDarkPalettes,
};

export const defaultTheme = brightTheme;

export type themeType = typeof defaultTheme;
