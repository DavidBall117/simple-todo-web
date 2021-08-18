import { Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import { AppRouteProps } from './types';

export default function AppRoute({
	title,
	description,
	path,
	component,
	exact,
	authenticatedRoute
}: AppRouteProps) {
	return (
		<Route
			path={path}
			exact={exact}
		>
			<Helmet>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Helmet>
			{component}
		</Route>
	);
}
