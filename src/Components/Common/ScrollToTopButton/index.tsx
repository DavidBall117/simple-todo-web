import { useState } from 'react';
import { TiArrowUpThick } from 'react-icons/ti';

import styles from './styles.module.scss';
import { ScrollToTopProps } from './types';

export default function ScrollToTopButton({ containerId }: ScrollToTopProps): JSX.Element {
	const [visible, setVisible] = useState<boolean>(false);

	const container: HTMLElement | null = document.getElementById(containerId);

	const onToggleVisibillity = () => {
		const scrollDistance: number = container?.scrollTop ?? 0;
		if (scrollDistance > 300) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	};

	const scrollToTop = () => {
		container?.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};

	container?.addEventListener('scroll', onToggleVisibillity);

	return (
		<button
			className={`${styles.button} ${visible ? styles.show : ''}`.trim()}
			onClick={scrollToTop}
		>
			<TiArrowUpThick />
		</button>
	);
}
