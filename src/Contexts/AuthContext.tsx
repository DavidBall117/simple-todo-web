import {
	createContext,
	useContext,
	useState,
	useEffect,
	Dispatch,
	SetStateAction,
	ReactNode
} from 'react';

import { getToken, removeToken } from 'Services/Generic/LocalStorageService';

export type AuthContextType = {
	authenticated: boolean;
}
export type AuthActionsContextType = {
	setAuthenticated: Dispatch<SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContextType>({
	authenticated: false
});
const AuthActionsContext = createContext<AuthActionsContextType>({
	setAuthenticated: () => {}
});

export const useAuthContext = () => useContext<AuthContextType>(AuthContext);
export const useAuthActionsContext = () => useContext<AuthActionsContextType>(AuthActionsContext);

export default function AuthContextProvider({ children }: { children: ReactNode }) {
	const [authenticated, setAuthenticated] = useState<boolean>(getToken() !== null);

	useEffect(() => {
		if (!authenticated) removeToken();
	}, [authenticated]);

	return (
		<AuthContext.Provider value={{
			authenticated
		}}>
			<AuthActionsContext.Provider value={{
				setAuthenticated
			}}>
				{children}
			</AuthActionsContext.Provider>
		</AuthContext.Provider>
	);
}
