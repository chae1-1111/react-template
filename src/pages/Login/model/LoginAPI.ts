export const login = async (userName: string, password: string): Promise<boolean> => {
    // const response = await fetch('/api/initialCount');
    // const data = await response.json();
    return userName === "admin" && password === "password";
}
