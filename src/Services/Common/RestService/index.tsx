import { useState, useEffect } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosResponse, AxiosRequestConfig, CancelTokenSource, AxiosError } from 'axios';

import { useAuthContext, useAuthActionsContext } from 'Contexts/AuthContext';

export default function useRestService() {
	const { authToken } = useAuthContext();
	const { setAuthenticated } = useAuthActionsContext();

	const [signal] = useState<CancelTokenSource>(axios.CancelToken.source());

	useEffect(() => {
		return () => signal.cancel();
	}, [signal]);

	const request = async function<RequestType, ResponseType>(
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

	const get = function<ResponseType>(route: string)
	: Promise<{ data: ResponseType, status: number }> {
		return request<null, ResponseType>('GET', route);
	};

	const post = function<RequestType, ResponseType>(route: string, data: RequestType)
	: Promise<{ data: ResponseType, status: number }> {
		return request<RequestType, ResponseType>('POST', route, data);
	};

	const getWithAuth = function<ResponseType>(route: string)
	: Promise<{ data: ResponseType, status: number }> {
		return request<null, ResponseType>('GET', route, null, true);
	};

	const postWithAuth = function<RequestType, ResponseType>(route: string, data: RequestType)
	: Promise<{ data: ResponseType, status: number }> {
		return request<RequestType, ResponseType>('POST', route, data, true);
	};

	const putWithAuth = function<RequestType, ResponseType>(route: string, data: RequestType)
	: Promise<{ data: ResponseType, status: number }> {
		return request<RequestType, ResponseType>('PUT', route, data, true);
	};

	const deleteWithAuth = function<ResponseType>(route: string)
	: Promise<{ data: ResponseType, status: number }> {
		return request<null, ResponseType>('DELETE', route, null, true);
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
