import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { LinkProps } from './types';

export default function AppLink({
	label,
	to
}: LinkProps): JSX.Element {
	return (
		<Link className={styles.link} to={to}>
			{label}
		</Link>
	);
}
