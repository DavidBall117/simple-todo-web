const tokenKey = 'ACCESS_TOKEN';

export const setToken = (token: string) => {
	localStorage.setItem(tokenKey, token);
};

export const getToken = (): string | null => {
	return localStorage.getItem(tokenKey);
};

export const removeToken = () => {
	localStorage.removeItem(tokenKey);
};
