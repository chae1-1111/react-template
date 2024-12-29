import {useState} from "react";
import {getLocalStorage, setLocalStorage} from "../utils/localStorage.ts";

const useLocalStorage = <T>(key: string, initialValue: T) => {
    const [storedData, setStoredData] = useState<T>(() => {
            const storedValue = getLocalStorage<T>(key);
            return storedValue ?? initialValue;
    });

    const setValue = (value: T) => {
        try {
            setStoredData(value);
            setLocalStorage<T>(key, value);
        } catch (err) {
            console.error(`Failed to set value in localStorage for key : ${key}`, err);
        }
    };

    return [storedData, setValue] as const;
}

export default useLocalStorage;
