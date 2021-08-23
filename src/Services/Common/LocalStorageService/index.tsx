const tokenKey: string = 'ACCESS_TOKEN';
const emailKey: string = 'EMAIL_ADDRESS';

export const setToken = (token: string) => {
	localStorage.setItem(tokenKey, token);
};

export const getToken = (): string | null => {
	return localStorage.getItem(tokenKey);
};

export const removeToken = () => {
	localStorage.removeItem(tokenKey);
};

export const setEmail = (email: string) => {
	localStorage.setItem(emailKey, email);
};

export const getEmail = (): string | null => {
	return localStorage.getItem(emailKey);
};

export const removeEmail = () => {
	localStorage.removeItem(emailKey);
};
