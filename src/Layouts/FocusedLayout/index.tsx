import styles from './styles.module.scss';
import { FocusedLayoutProps } from './types';

export default function FocusedLayout({ children }: FocusedLayoutProps): JSX.Element {
	return (
		<main className={styles.focused}>
			{children}
		</main>
	);
}
