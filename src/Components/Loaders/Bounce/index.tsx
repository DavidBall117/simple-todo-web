import styles from './styles.module.scss';
import { BounceProps } from './types';

export default function Bounce({ secondary }: BounceProps): JSX.Element {
	return (
		<div className={`${styles.bounce} ${secondary ? styles.secondary : ''}`.trim()}>
			<div />
			<div />
			<div />
		</div>
	);
}
