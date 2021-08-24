import { useState, useEffect } from 'react';

import useUserService from 'Services/Api/UserService';
import { GetUserResponse } from 'Services/Api/UserService/types';

export default function useHome() {
	const { getUser } = useUserService();

	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [name, setName] = useState<string>('');

	useEffect(() => {
		getUser()
			.then((res: GetUserResponse) => {
				setName(res.data.first_name);
				setIsLoading(false);
			})
			.catch((_error) => {
				setIsLoading(false);
			});
	}, [getUser]);

	return {
		isLoading,
		name,
	};
}
