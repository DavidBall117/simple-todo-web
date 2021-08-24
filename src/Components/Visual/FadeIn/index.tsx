import styles from './styles.module.scss';
import { FadeInProps } from './types';

export default function FadeIn({ children, direction }: FadeInProps): JSX.Element {
	return (
		<div className={`${styles.animation} ${direction ? styles[direction] : ''}`.trim()}>
			{children}
		</div>
	);
}
