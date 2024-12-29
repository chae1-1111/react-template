export const getSessionStorage = <T>(key: string, defaultValue?: T): T | undefined => {
    try {
        const value = window.sessionStorage.getItem(key);
        return value ? JSON.parse(value) : defaultValue;
    } catch (err) {
        console.error(`[SessionStorage Error] ${key} - Failed to get value`, err);
        return defaultValue;
    }
};

export const setSessionStorage = <T>(key: string, value: T): void => {
    try {
        window.sessionStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.error(`[SessionStorage Error] ${key} - Failed to set value`, err);
    }
};

export const removeSessionStorage = (key: string): void => {
    try {
        window.sessionStorage.removeItem(key);
    } catch (err) {
        console.error(`[SessionStorage Error] ${key} - Failed to remove value`, err);
    }
};
