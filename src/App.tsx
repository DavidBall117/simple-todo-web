import { Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import AuthContextProvider from 'Contexts/AuthContext';
import AppRoute from 'Components/Routing/AppRoute';
import routes from 'Constants/routes';
import { RouteData } from 'Constants/types';
import Overlay from 'Components/Common/Overlay';

export default function App() {
	return (
		<BrowserRouter>
			<AuthContextProvider>
				<Suspense fallback={<Overlay />}>
					<Switch>
						{routes.map((route: RouteData) => (
							<AppRoute
								key={route.path}
								title={route.title}
								description={route.description}
								path={route.path}
								component={route.component}
								exact={route.exact}
								authenticatedRoute={route.authenticatedRoute}
							/>
						))}
					</Switch>
				</Suspense>
			</AuthContextProvider>
		</BrowserRouter>
	);
}
