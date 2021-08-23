import { useState } from 'react';

import useUserService from 'Services/Api/UserService';
import { GetUserResponse } from 'Services/Api/UserService/types';

export default function useHome() {
	const { getUser } = useUserService();

	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [name, setName] = useState<string>('');

	const fetchUser = async () => {
		setIsLoading(true);
		try {
			const res: GetUserResponse = await getUser();
			setName(res.data.first_name);
		} catch (error) {
			setName('');
		}
		setIsLoading(false);
	};

	return {
		isLoading,
		name,
		fetchUser
	};
}
