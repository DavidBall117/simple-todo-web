import Bounce from 'Components/Loaders/Bounce';

import styles from './styles.module.scss';
import { OverlayProps } from './types';

export default function Overlay({ show }: OverlayProps): JSX.Element {
	return (
		<>
			{(show === true || show == null) && (
				<div className={styles.container}>
					<Bounce />
				</div>
			)}
		</>
	);
}
