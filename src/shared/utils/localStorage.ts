export const getLocalStorage = <T>(key: string, defaultValue?: T): T | undefined => {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : defaultValue;
    } catch (err) {
        console.error(`[LocalStorage Error] ${key} - Failed to get value`, err);
        return defaultValue;
    }
};

export const setLocalStorage = <T>(key: string, value: T): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.error(`[LocalStorage Error] ${key} - Failed to set value`, err);
    }
};

export const removeLocalStorage = (key: string): void => {
    try {
        localStorage.removeItem(key);
    } catch (err) {
        console.error(`[LocalStorage Error] ${key} - Failed to remove value`, err);
    }
};
