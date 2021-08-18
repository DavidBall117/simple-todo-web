import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import axios, { AxiosResponse, AxiosRequestConfig, AxiosError, CancelTokenSource } from 'axios';

import { removeToken, getToken } from 'Services/Generic/LocalStorageService';

export default function useRestService() {
	const history = useHistory();

	const signal: CancelTokenSource = axios.CancelToken.source();

	useEffect(() => {
		return () => signal.cancel();
	}, [signal]);

	const request = async function<RequestType, ResponseType>(
		method: 'GET' | 'POST' | 'PUT' | 'DELETE',
		route: string,
		data?: RequestType,
		auth?: boolean
	): Promise<{ data: ResponseType, status: number }> {
		try {
			const config: AxiosRequestConfig = {
				method,
				url: `${process.env.REACT_APP_API_URI}${route}`,
				data,
				cancelToken: signal.token,
				headers: auth ? { Authorization: `Bearer ${getToken()}`} : null
			};
			const response: AxiosResponse<ResponseType> = await axios.request<ResponseType>(config);
			return {
				data: response.data,
				status: response.status
			};
		} catch (err) {
			if (axios.isAxiosError(err) && err.response?.status === 401) {
				// TODO: Handle axios error
				console.error('Unauthorized request.');
				// removeToken();
				// history.push('/login');
			} else {
				// TODO: Display toast notification showing error.
				console.error(err);
			}
			throw err;
		}
	};

	const get = async function<ResponseType>(route: string): Promise<{ data: ResponseType, status: number }> {
		try {
			return await request<null, ResponseType>('GET', route);
		} catch (err) {
			throw err;
		}
	};

	const post = async function<RequestType, ResponseType>(route: string, data: RequestType): Promise<{ data: ResponseType, status: number }> {
		try {
			return await request<RequestType, ResponseType>('POST', route, data);
		} catch (err) {
			throw err;
		}
	};

	const getWithAuth = async function<ResponseType>(route: string): Promise<{ data: ResponseType, status: number }> {
		try {
			return await request<null, ResponseType>('GET', route, null, true);
		} catch (err) {
			throw err;
		}
	};

	const postWithAuth = async function<RequestType, ResponseType>(route: string, data: RequestType): Promise<{ data: ResponseType, status: number }> {
		try {
			return await request<RequestType, ResponseType>('POST', route, data, true);
		} catch (err) {
			throw err;
		}
	};

	const putWithAuth = async function<RequestType, ResponseType>(route: string, data: RequestType): Promise<{ data: ResponseType, status: number }> {
		try {
			return await request<RequestType, ResponseType>('PUT', route, data, true);
		} catch (err) {
			throw err;
		}
	};

	const deleteWithAuth = async function<ResponseType>(route: string): Promise<{ data: ResponseType, status: number }> {
		try {
			return await request<null, ResponseType>('DELETE', route, null, true);
		} catch (err) {
			throw err;
		}
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
