import {useState} from "react";
import {getSessionStorage, setSessionStorage} from "../utils/sessionStorage.ts";

const useSessionStorage = <T>(key: string, initialValue: T) => {
    const [storedData, setStoredData] = useState<T>(() => {
        return getSessionStorage<T>(key, initialValue);
    });

    const setValue = (value: T) => {
        setStoredData(value);
        setSessionStorage<T>(key, value);
    }

    return [storedData, setValue] as const;
}

export default useSessionStorage;
