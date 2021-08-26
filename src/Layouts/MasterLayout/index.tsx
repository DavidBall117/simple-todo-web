import { Link } from 'react-router-dom';

import Bounce from 'Components/Loaders/Bounce';
import Button from 'Components/Input/Button';
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
				<ul className={styles.startNav}>
					<li>
						<Link to="/lists">
							todo lists
						</Link>
					</li>
					<li>
						<Link to="/archive">
							archive
						</Link>
					</li>
				</ul>
				<ul className={styles.endNav}>
					<li>
						<Link to="/account">
							account
						</Link>
					</li>
					<li>
						<Button
							secondary
							label="log out"
							onClick={() => console.log('log out')}
						/>
					</li>
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
