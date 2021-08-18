import { useParams } from 'react-router-dom';

import { ListParams } from './types';

export default function List(): JSX.Element {
	const { id } = useParams<ListParams>();
	return (
		<div>
			<p>
				TODO: List: {id}
			</p>
		</div>
	);
}
