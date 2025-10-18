const TOKEN_KEY = "USER_TOKEN";

export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const setToken = (token: string) => localStorage.setItem(TOKEN_KEY, token);
export const deleteToken = () => localStorage.removeItem(TOKEN_KEY);
