import styles from './styles.module.scss';
import { RowProps } from './types';

export default function Row({ children, className }: RowProps): JSX.Element {
	return (
		<section className={`${styles.row} ${className ? className : ''}`.trim()}>
			{children}
		</section>
	);
}
