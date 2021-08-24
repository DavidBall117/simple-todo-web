import useRestService from 'Services/Common/RestService';

import { LoginRequestData, LoginResponseData, LoginResponse } from './types';

export default function useAuthService() {
	const {
		post,
		deleteWithAuth
	} = useRestService();

	function login(request: LoginRequestData): Promise<LoginResponse> {
		return post<LoginRequestData, LoginResponseData>('/login', request);
	};

	async function logout(): Promise<number> {
		const res = await deleteWithAuth('/logout');
		return res.status;
	};

	async function logoutAll(): Promise<number> {
		const res = await deleteWithAuth('/logout-all');
		return res.status;
	};

	return {
		login,
		logout,
		logoutAll
	};
}
