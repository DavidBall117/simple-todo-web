import { useForm } from 'react-hook-form';

import { LoginRequestData } from 'Services/Api/AuthService/types';

export default function useLogin() {
	const methods = useForm({
		reValidateMode: 'onChange',
		shouldFocusError: true,
		defaultValues: {
			email: '',
			password: ''
		}
	});

	const onSubmit = (data: LoginRequestData) => {
		console.log(data);
	};

	return {
		methods,
		onSubmit
	};
}
