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

	const isEmailTaken = async (email: string): Promise<boolean | null> => {
		const res = await get<boolean>(`/user/is-email-taken/${email}`);
		return res.data;
	};

	const createUser = (request: CreateUserRequestData): Promise<CreateUserResponse> => {
		return post<CreateUserRequestData, CreateUserResponseData>('/user', request);
	};

	const getUser = (): Promise<GetUserResponse> => {
		return getWithAuth<GetUserResponseData>('/user');
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
