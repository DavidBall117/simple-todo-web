export type CreateUserRequestData = {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export type CreateUserResponseData = {
	type: string;
	token: string;
	expires_at: string;
}

export type CreateUserResponse = {
	data: CreateUserResponseData;
	status: number;
}

export type GetUserResponseData = {
	first_name: string;
	last_name: string;
	email: string;
	created_at: Date;
	updated_at: Date;
}

export type GetUserResponse = {
	data: GetUserResponseData;
	status: number;
}

export type UpdateUserRequestData = {
	firstName?: string;
	lastName?: string;
	email?: string;
	password?: string;
}
