import useRestService from 'Services/Generic/RestService';

import { LoginRequestData, LoginResponseData, LoginResponse } from './types';

export default function useAuthService() {
	const {
		post,
		deleteWithAuth
	} = useRestService();

	const login = async (request: LoginRequestData): Promise<LoginResponse> => {
		return await post<LoginRequestData, LoginResponseData>('/login', request);
	};

	const logout = async (): Promise<number> => {
		const res = await deleteWithAuth('/logout');
		return res.status;
	};

	const logoutAll = async (): Promise<number> => {
		const res = await deleteWithAuth('/logout-all');
		return res.status;
	};

	return {
		login,
		logout,
		logoutAll
	};
}
