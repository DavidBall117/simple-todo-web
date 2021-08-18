export type LoginRequestData = {
	email: string;
	password: string;
}

export type LoginResponseData = {
	type: string;
	token: string;
	expires_at: Date;
}

export type LoginResponse = {
	data: LoginResponseData;
	status: number;
}
