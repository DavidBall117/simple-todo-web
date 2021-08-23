import styles from './styles.module.scss';
import { ButtonProps } from './types';

export default function Button({
	label,
	disabled,
	secondary,
	onClick,
	submit
}: ButtonProps): JSX.Element {
	return (
		<button
			className={`${styles.button} ${secondary? styles.secondary : ''}`.trim()}
			onClick={onClick}
			disabled={disabled}
			type={submit ? 'submit' : 'button'}
		>
			{label}
		</button>
	);
}
