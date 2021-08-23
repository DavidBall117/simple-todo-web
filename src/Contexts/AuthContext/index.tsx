import {
	createContext,
	useContext,
	useState,
	ReactNode
} from 'react';
import { useHistory } from 'react-router-dom';

import { setToken, getToken, removeToken } from 'Services/Common/LocalStorageService';

import { AuthContextType, AuthActionsContextType } from './types';

const AuthContext = createContext<AuthContextType>({
	authToken: '',
	authenticated: false
});

const AuthActionsContext = createContext<AuthActionsContextType>({
	setAuthenticated: (token: string | null) => {}
});

// Use to get properties.
export const useAuthContext = () => useContext<AuthContextType>(AuthContext);
// Use to get functions.
export const useAuthActionsContext = () => useContext<AuthActionsContextType>(AuthActionsContext);

export default function AuthContextProvider({ children }: { children: ReactNode }) {
	const history = useHistory();
	const token: string | null = getToken();
	const [authToken, setAuthToken] = useState<string>(token ?? '');
	const [authenticated, setAuthenticatedState] = useState<boolean>(token !== null);
	const setAuthenticated = (token: string | null) => {
		setAuthToken(token !== null ? token : '');
		setAuthenticatedState(token !== null);
		token !== null ? setToken(token) : removeToken();
		if (token === null) history.push('/login');
	};
	return (
		<AuthContext.Provider value={{
			authToken,
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
