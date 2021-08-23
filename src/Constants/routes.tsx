import { lazy } from 'react';

import { RouteData } from './types';

const NotFound = lazy(() => import('Pages/404'));
const Account = lazy(() => import('Pages/Account'));
const Archive = lazy(() => import('Pages/Archive'));
const CreateAccount = lazy(() => import('Pages/CreateAccount'));
const Home = lazy(() => import('Pages/Home'));
const List = lazy(() => import('Pages/List'));
const Lists = lazy(() => import('Pages/Lists'));
const Login = lazy(() => import('Pages/Login'));

const routes: RouteData[] = [
	{
		title: 'Home | simple-todo',
		description: 'Home page for simple-todo application.',
		path: '/',
		component: <Home />,
		exact: true,
		authenticatedRoute: true
	},
	{
		title: 'Login | simple-todo',
		description: 'Login to your account and get started managing your to-do lists.',
		path: '/login',
		component: <Login />
	},
	{
		title: 'Create Account | simple-todo',
		description: 'Create an account and get started making your to-do lists.',
		path: '/create-account',
		component: <CreateAccount />
	},
	{
		title: 'Account | simple-todo',
		description: 'Manage your account.',
		path: '/account',
		component: <Account />,
		authenticatedRoute: true
	},
	{
		title: 'Archive | simple-todo',
		description: 'View archived lists.',
		path: '/archive',
		component: <Archive />,
		authenticatedRoute: true
	},
	{
		title: 'List | simple-todo',
		description: 'Manage your lists items.',
		path: '/list/:id',
		component: <List />,
		authenticatedRoute: true
	},
	{
		title: 'Lists | simple-todo',
		description: 'View active lists.',
		path: '/lists',
		component: <Lists />,
		authenticatedRoute: true
	},
	{
		title: 'Page Not Found | simple-todo',
		description: 'URL entered is incorrect.',
		path: '*',
		component: <NotFound />
	}
];

export default routes;
