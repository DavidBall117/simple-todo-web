import styles from './styles.module.scss';
import { ToastProps } from './types';

export default function Toast({
	title,
	body,
	show,
	onClose,
	type
}: ToastProps): JSX.Element {
	return (
		<div
			className={`${styles.toastContainer} ${show ? styles.show : ''} ${type ? styles[type] : ''}`.trim()}
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
