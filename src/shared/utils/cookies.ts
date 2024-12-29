import {Cookies} from "react-cookie";
import {CookieSetOptions} from "universal-cookie/cjs/types";

const DEFAULT_COOKIES_OPTIONS: CookieSetOptions = {
    path: "/",
    secure: true,
    sameSite: "strict",
};

const cookies = new Cookies();

export const getCookies = <T>(key: string, defaultValue?: T): T | undefined => {
    try {
        const value = cookies.get(key);
        return value ? JSON.parse(value) : defaultValue;
    } catch (err) {
        console.error(`[Cookie Error] ${key} - Failed to get value`, err);
        return defaultValue;
    }
};

export const setCookies = <T>(key: string, value: T, options?: CookieSetOptions): void => {
    try {
        cookies.set(key, JSON.stringify(value), {...DEFAULT_COOKIES_OPTIONS, ...options});
    } catch (err) {
        console.error(`[Cookie Error] ${key} - Failed to set value`, err);
    }
};

export const removeCookies = (key: string, options?: CookieSetOptions): void => {
    try {
        cookies.remove(key, {...DEFAULT_COOKIES_OPTIONS, ...options});
    } catch (err) {
        console.error(`[Cookie Error] ${key} - Failed to remove value`, err);
    }
};
