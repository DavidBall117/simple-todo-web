import { Link } from 'react-router-dom';

import styles from './styles.module.scss';
import { LinkProps } from './types';

export default function AppLink({
	label,
	to,
	button
}: LinkProps): JSX.Element {
	return (
		<Link className={`${button ? styles.button : styles.link}`} to={to}>
			{label}
		</Link>
	);
}
