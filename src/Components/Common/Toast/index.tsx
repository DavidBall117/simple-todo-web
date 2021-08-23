import styles from './styles.module.scss';
import { ToastProps } from './types';

function getStyle(type: 'success' | 'info' | 'warning' | 'error'): string {
	switch(type) {
		case 'success':
			return styles.success;
		case 'info':
			return styles.info;
		case 'warning':
			return styles.warning;
		case 'error':
			return styles.error;
		default:
			return '';
	}
}

export default function Toast({
	title,
	body,
	show,
	onClose,
	type
}: ToastProps): JSX.Element {
	return (
		<div
			className={`${styles.toastContainer} ${show ? styles.show : ''} ${type ? getStyle(type) : ''}`.trim()}
			aria-hidden={!show}
		>
			<div className={styles.toastTitleContainer}>
				<span>
					{title}
				</span>
				<button
					className={styles.closeButton}
					onClick={() => { onClose() }}
				>
					&#10006;
				</button>
			</div>
			<div className={styles.toastTitleBody}>
				{body}
			</div>
		</div>
	);
}
