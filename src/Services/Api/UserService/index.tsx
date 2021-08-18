import useRestService from 'Services/Generic/RestService';

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

	const isEmailTaken = async (email: string): Promise<boolean> => {
		const res = await get<boolean>(`/user/is-email-taken/${email}`);
		return res.data;
	};

	const createUser = async (request: CreateUserRequestData): Promise<CreateUserResponse> => {
		return await post<CreateUserRequestData, CreateUserResponseData>('/user', request);
	};

	const getUser = async (): Promise<GetUserResponse> => {
		return await getWithAuth<GetUserResponseData>('/user');
	};

	const updateUser = async (request: UpdateUserRequestData): Promise<number> => {
		const res = await putWithAuth('/user', request);
		return res.status;
	};

	const deleteUser = async (): Promise<number> => {
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
