import styles from './styles.module.scss';
import { ButtonProps } from './types';

export default function Button({
	label,
	primary,
	secondary,
	onClick,
	submit
}: ButtonProps): JSX.Element {
	return (
		<button
			className={`${styles.button} ${primary ? styles.primary : ''} ${secondary? styles.secondary : ''}`.trim()}
			onClick={onClick}
			type={submit ? 'submit' : 'button'}
		>
			{label}
		</button>
	);
}
