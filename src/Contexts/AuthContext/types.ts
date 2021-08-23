export type AuthContextType = {
	authToken: string;
	authenticated: boolean;
}

export type AuthActionsContextType = {
	setAuthenticated: (token: string | null) => void;
}
