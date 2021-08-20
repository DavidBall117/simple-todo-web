import Pulse from 'Components/Common/Loaders/Pulse';

import styles from './styles.module.scss';

export default function PageLoading(): JSX.Element {
	return (
		<div className={styles.container}>
			<Pulse />
		</div>
	);
}
