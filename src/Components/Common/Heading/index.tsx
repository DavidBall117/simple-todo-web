import styles from './styles.module.scss';
import { HeadingProps } from './types';

export default function Heading({ children }: HeadingProps): JSX.Element {
	return (
		<h1 className={styles.heading}>
			{children}
		</h1>
	);
}
