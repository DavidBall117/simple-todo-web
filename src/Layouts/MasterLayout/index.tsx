import routes from 'Constants/routes';
import { RouteData } from 'Constants/types';

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
							<a href={route.path}>
								{route.title}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<div className={styles.mainContainer}>
				<main className={styles.main}>
					{loading ? (
						<div>
							Loading...
						</div>
					) : (
						children
					)}
				</main>
				<footer className={styles.footer}>
					&copy; {new Date().getFullYear()} simple-todo
				</footer>
			</div>
		</div>
	);
}
