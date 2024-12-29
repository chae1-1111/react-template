import {Palette, PalettesProps} from "../types/colorPalette.ts";

export const redDark: Palette = ['#2a1215', '#431418', '#58181c', '#791a1f', '#a61d24', '#d32029', '#e84749', '#f37370', '#f89f9a', '#fac8c3',];
redDark.primary = redDark[5];
export const volcanoDark: Palette = ['#2b1611', '#441d12', '#592716', '#7c3118', '#aa3e19', '#d84a1b', '#e87040', '#f3956a', '#f8b692', '#fad4bc',];
volcanoDark.primary = volcanoDark[5];
export const orangeDark: Palette = ['#2b1d11', '#442a11', '#593815', '#7c4a15', '#aa6215', '#d87a16', '#e89a3c', '#f3b765', '#f8cf8d', '#fae3b7',];
orangeDark.primary = orangeDark[5];
export const goldDark: Palette = ['#2b2111', '#443111', '#594214', '#7c5914', '#aa7714', '#d89614', '#e8b339', '#f3cc62', '#f8df8b', '#faedb5',];
goldDark.primary = goldDark[5];
export const yellowDark: Palette = ['#2b2611', '#443b11', '#595014', '#7c6e14', '#aa9514', '#d8bd14', '#e8d629', '#f3ea62', '#f8f48b', '#fafab5',];
yellowDark.primary = yellowDark[5];
export const limeDark: Palette = ['#1f2611', '#2e3c10', '#3e4f13', '#536d13', '#6f9412', '#8bbb11', '#a9d134', '#c9e75d', '#e4f88b', '#f0fab5',];
limeDark.primary = limeDark[5];
export const greenDark: Palette = ['#162312', '#1d3712', '#274916', '#306317', '#3c8618', '#49aa19', '#6abe39', '#8fd460', '#b2e58b', '#d5f2bb',];
greenDark.primary = greenDark[5];
export const cyanDark: Palette = ['#112123', '#113536', '#144848', '#146262', '#138585', '#13a8a8', '#33bcb7', '#58d1c9', '#84e2d8', '#b2f1e8',];
cyanDark.primary = cyanDark[5];
export const blueDark: Palette = ['#111d2c', '#112a45', '#15395b', '#164c7e', '#1765ad', '#177ddc', '#3c9ae8', '#65b7f3', '#8dcff8', '#b7e3fa',];
blueDark.primary = blueDark[5];
export const greekBlueDark: Palette = ['#131629', '#161d40', '#1c2755', '#203175', '#263ea0', '#2b4acb', '#5273e0', '#7f9ef3', '#a8c1f8', '#d2e0fa',];
greekBlueDark.primary = greekBlueDark[5];
export const purpleDark: Palette = ['#1a1325', '#24163a', '#301c4d', '#3e2069', '#51258f', '#642ab5', '#854eca', '#ab7ae0', '#cda8f0', '#ebd7fa',];
purpleDark.primary = purpleDark[5];
export const magentaDark: Palette = ['#291321', '#40162f', '#551c3b', '#75204f', '#a02669', '#cb2b83', '#e0529c', '#f37fb7', '#f8a8cc', '#fad2e3',];
magentaDark.primary = magentaDark[5];
export const grayDark: Palette = ['#ffffff', '#fafafa', '#f5f5f5', '#f0f0f0', '#d9d9d9', '#bfbfbf', '#8c8c8c', '#595959', '#434343', '#262626', '#1f1f1f', '#141414', '#000000',];
grayDark.primary = grayDark[5];

export const presetDarkPalettes: PalettesProps = {
    red: redDark,
    volcano: volcanoDark,
    orange: orangeDark,
    gold: goldDark,
    yellow: yellowDark,
    lime: limeDark,
    green: greenDark,
    cyan: cyanDark,
    blue: blueDark,
    greekBlue: greekBlueDark,
    purple: purpleDark,
    magenta: magentaDark,
    gray: grayDark,
};
