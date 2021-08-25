import { Link } from 'react-router-dom';

import Bounce from 'Components/Loaders/Bounce';
import routes from 'Constants/routes';
import { RouteData } from 'Constants/types';
import ScrollToTopButton from 'Components/Common/ScrollToTopButton';

import styles from './styles.module.scss';
import { MasterLayoutProps } from './types';

export default function MasterLayout({ children, loading }: MasterLayoutProps): JSX.Element {
	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				<span>
					simple-todo
				</span>
				<ul>
					{routes.map((route: RouteData) => (
						<li key={route.path}>
							<Link to={route.path}>
								{route.title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<div id="MainContainer" className={styles.mainContainer}>
				<main className={styles.main}>
					{loading ? (
						<div className={styles.loading}>
							<Bounce secondary />
						</div>
					) : (
						children
					)}
				</main>
				<footer className={styles.footer}>
					&copy; {new Date().getFullYear()} simple-todo
				</footer>
				<ScrollToTopButton
					containerId="MainContainer"
				/>
			</div>
		</div>
	);
}
