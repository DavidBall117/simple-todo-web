import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

import useAuthService from 'Services/Api/AuthService';
import { LoginRequestData, LoginResponse } from 'Services/Api/AuthService/types';
import { useAuthActionsContext } from 'Contexts/AuthContext';

export default function useLogin() {
	const history = useHistory();

	const {
		login
	} = useAuthService();

	const { setAuthenticated } = useAuthActionsContext();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [showPassword, setShowPassword] = useState<boolean>(false);

	const [showToast, setShowToast] = useState<boolean>(false);
	const [toastType, setToastType] = useState<'success' | 'info' | 'warning' | 'error'>();
	const [toastTitle, setToastTitle] = useState<string>('');
	const [toastBody, setToastBody] = useState<string>('');

	const methods = useForm<LoginRequestData>({
		reValidateMode: 'onChange',
		shouldFocusError: true,
		defaultValues: {
			email: '',
			password: ''
		}
	});

	const onCloseToast = () => {
		setShowToast(false);
	};

	const onSubmit = async (data: LoginRequestData) => {
		setIsLoading(true);
		try {
			const res: LoginResponse = await login(data);
			setAuthenticated(res.data.token);
			history.push('/');
		} catch (error) {
			setToastType('error');
			if (axios.isAxiosError(error) && error.response?.status === 401) {
				setToastTitle('log in failed');
				setToastBody(`this email/password combo doesn't seem familiar`);
			} else if (axios.isAxiosError(error) && error.response?.status === 422) {
				setToastTitle('log in failed');
				setToastBody(`the request was malformed`);
			} else {
				setToastTitle('log in failed');
				setToastBody(`an unknown error occured`);
			}
			setShowToast(true);
		}
		setIsLoading(false);
	};

	const onToggleShowPassword = () => {
		setShowPassword(prevState => !prevState);
	};

	return {
		isLoading,
		showPassword,
		methods,
		showToast,
		toastType,
		toastTitle,
		toastBody,
		onCloseToast,
		onSubmit,
		onToggleShowPassword
	};
}
