export const deepFreeze = <T>(obj: T): T => {
    Object.freeze(obj);
    Object.getOwnPropertyNames(obj).forEach(prop => {
        const value = obj[prop as keyof T];
        if (value && typeof value === 'object') {
            Object.freeze(value);
        }
    });
    return obj;
};
