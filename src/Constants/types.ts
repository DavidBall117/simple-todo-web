export type RouteData = {
	title: string;
	description: string;
	path: string;
	component: JSX.Element;
	exact?: boolean;
	authenticatedRoute?: boolean;
};
