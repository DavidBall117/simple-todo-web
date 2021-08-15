import { useParams } from 'react-router-dom';

import { ListParams } from 'Pages/List/types';

const List = (): JSX.Element => {
	const { id } = useParams<ListParams>();
	return (
		<div>
			<p>
				TODO: List: {id}
			</p>
		</div>
	);
};

export default List;
