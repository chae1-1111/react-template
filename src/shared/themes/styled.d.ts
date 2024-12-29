import 'styled-components'
import {Palette} from "../types/colorPalette.ts";

declare module 'styled-components' {
    export interface DefaultTheme {
        color: {
            red: Palette;
            volcano: Palette;
            orange: Palette;
            gold: Palette;
            yellow: Palette;
            lime: Palette;
            green: Palette;
            cyan: Palette;
            blue: Palette;
            greekBlue: Palette;
            purple: Palette;
            magenta: Palette;
            gray?: Palette;
        }
    }
}
