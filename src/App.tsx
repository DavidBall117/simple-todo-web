import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import routes from 'Constants/routes';
import { RouteData } from 'Constants/types';

const App = () => {
	return (
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					{routes.map((route: RouteData) => (
						<Route
							key={route.path}
							path={route.path}
							exact={route.exact}
						>
							<Helmet>
								<title>{route.title}</title>
								<meta name="description" content={route.description} />
							</Helmet>
							{route.component}
						</Route>
					))}
				</Switch>
			</Suspense>
		</Router>
	);
};

export default App;
