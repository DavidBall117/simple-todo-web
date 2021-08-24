import useRestService from 'Services/Common/RestService';

import {
	CreateUserRequestData,
	CreateUserResponseData,
	CreateUserResponse,
	GetUserResponseData,
	GetUserResponse,
	UpdateUserRequestData
} from './types';

export default function useUserService() {
	const {
		get,
		post,
		getWithAuth,
		putWithAuth,
		deleteWithAuth
	} = useRestService();

	async function isEmailTaken(email: string): Promise<boolean | null> {
		const res = await get<boolean>(`/user/is-email-taken/${email}`);
		return res.data;
	};

	async function createUser(request: CreateUserRequestData): Promise<CreateUserResponse> {
		return await post<CreateUserRequestData, CreateUserResponseData>('/user', request);
	};

	async function getUser(): Promise<GetUserResponse> {
		return await getWithAuth<GetUserResponseData>('/user');
	};

	async function updateUser(request: UpdateUserRequestData): Promise<number> {
		const res = await putWithAuth('/user', request);
		return res.status;
	};

	async function deleteUser(): Promise<number> {
		const res = await deleteWithAuth('user');
		return res.status;
	};

	return {
		isEmailTaken,
		createUser,
		getUser,
		updateUser,
		deleteUser
	};
}
