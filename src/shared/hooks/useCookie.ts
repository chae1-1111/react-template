import {useState} from "react";
import {getCookies, setCookies} from "../utils/cookies.ts";

const useCookies = <T>(key: string, initialValue: T) => {

    const [storedData, setStoredData] = useState<T>(() => {
        return getCookies<T>(key, initialValue) ?? initialValue;
    });

    const setValue = (value: T) => {
        setStoredData(value);
        setCookies<T>(key, value);
    }

    return [storedData, setValue] as const;
}

export default useCookies;
