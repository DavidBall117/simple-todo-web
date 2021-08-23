import Heading from 'Components/Common/Heading';
import routes from 'Constants/routes';
import { RouteData } from 'Constants/types';
import Bounce from 'Components/Loaders/Bounce';

import styles from './styles.module.scss';
import useHome from './useHome';

export default function Home(): JSX.Element {
	const {
		isLoading,
		name,
	} = useHome();

	return (
		<div className={styles.container}>
			<aside className={styles.aside}>
				<nav>
					<ul>
						{routes.map((route: RouteData) => (
							<li>
								<a href={route.path}>
									{route.title}
								</a>
							</li>
						))}
					</ul>
				</nav>
			</aside>
			<main className={styles.main}>
				{isLoading ? (
					<div>
						<Bounce />
					</div>
				) : (
					<Heading>
						{`Welcome, ${name}`}
					</Heading>
				)}
			</main>
		</div>
	);
}
