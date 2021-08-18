import { useState, useEffect } from 'react';

export default function useIsMounted(): boolean {
	const [_isMounted, setIsMounted] = useState<boolean>(false);

	useEffect(() => {
		setIsMounted(true);
		return () => {
			setIsMounted(false);
		};
	}, []);

	return _isMounted;
}
