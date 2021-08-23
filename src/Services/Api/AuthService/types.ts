export type LoginRequestData = {
	email: string;
	password: string;
}

export type LoginResponseData = {
	type: string;
	token: string;
	expires_at: string;
}

export type LoginResponse = {
	data: LoginResponseData;
	status: number;
}
