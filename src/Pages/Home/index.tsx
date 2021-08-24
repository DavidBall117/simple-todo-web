import Bounce from 'Components/Loaders/Bounce';
import FadeIn from 'Components/Visual/FadeIn';
import Heading from 'Components/Common/Heading';
import ListGraphic from 'Components/Visual/ListGraphic';
import routes from 'Constants/routes';
import { RouteData } from 'Constants/types';

import styles from './styles.module.scss';
import useHome from './useHome';

export default function Home(): JSX.Element {
	const {
		isLoading,
		name,
	} = useHome();

	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				<span>
					simple-todo
				</span>
				<ul>
					{routes.map((route: RouteData) => (
						<li key={route.path}>
							<a href={route.path}>
								{route.title}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<main className={styles.main}>
				{isLoading ? (
					<div>
						<Bounce />
					</div>
				) : (
					<>
						<Heading>
							{`welcome, ${name}`.toLocaleLowerCase()}
						</Heading>
						<FadeIn direction="right">
							<ListGraphic />
						</FadeIn>
					</>
				)}
			</main>
		</div>
	);
}
