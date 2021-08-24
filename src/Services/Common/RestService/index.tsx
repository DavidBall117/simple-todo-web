import { useState, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosResponse, AxiosRequestConfig, CancelTokenSource, AxiosError } from 'axios';

import { useAuthContext, useAuthActionsContext } from 'Contexts/AuthContext';

export default function useRestService() {
	const { authToken } = useAuthContext();
	const { setAuthenticated } = useAuthActionsContext();

	const [signal] = useState<CancelTokenSource>(axios.CancelToken.source());

	useEffect(() => {
		return () => signal.cancel(`Request Cancelled: ${signal.token.reason?.message}`);
	}, [signal]);

	async function request<RequestType, ResponseType>(
		method: 'GET' | 'POST' | 'PUT' | 'DELETE',
		route: string,
		data?: RequestType,
		auth?: boolean
	): Promise<{ data: ResponseType, status: number }> {
		const config: AxiosRequestConfig = {
			method,
			url: `${process.env.REACT_APP_API_BASE_URI}${route}`,
			data,
			cancelToken: signal.token,
			headers: auth ? { Authorization: `Bearer ${authToken}` } : null
		};
		try {
			const axiosResponse: AxiosResponse<ResponseType> = await axios.request<ResponseType>(config);
			return {
				data: axiosResponse.data,
				status: axiosResponse.status
			};
		} catch(error: any | Error | AxiosError) {
			// Set AuthContext token to null if the response status is 401
			if (axios.isAxiosError(error) && error.response?.status === 401) {
				setAuthenticated(null);
			}
			throw error;
		}
	};

	async function get<ResponseType>(route: string)
	: Promise<{ data: ResponseType, status: number }> {
		return await request<null, ResponseType>('GET', route);
	};

	async function post<RequestType, ResponseType>(route: string, data: RequestType)
	: Promise<{ data: ResponseType, status: number }> {
		return await request<RequestType, ResponseType>('POST', route, data);
	};

	async function getWithAuth<ResponseType>(route: string)
	: Promise<{ data: ResponseType, status: number }> {
		return await request<null, ResponseType>('GET', route, null, true);
	};

	async function postWithAuth<RequestType, ResponseType>(route: string, data: RequestType)
	: Promise<{ data: ResponseType, status: number }> {
		return await request<RequestType, ResponseType>('POST', route, data, true);
	};

	async function putWithAuth<RequestType, ResponseType>(route: string, data: RequestType)
	: Promise<{ data: ResponseType, status: number }> {
		return await request<RequestType, ResponseType>('PUT', route, data, true);
	};

	async function deleteWithAuth<ResponseType>(route: string)
	: Promise<{ data: ResponseType, status: number }> {
		return await request<null, ResponseType>('DELETE', route, null, true);
	};

	return {
		get,
		post,
		getWithAuth,
		postWithAuth,
		putWithAuth,
		deleteWithAuth
	};
}
