import styles from './styles.module.scss';

export default function ListGraphic(): JSX.Element {
	return (
		<div className={styles.board}>
			<span className={styles.clip} />
			<div className={styles.pencil}>
				<span />
			</div>
			<ul className={styles.list}>
				{[...Array(10)].map((_val, index: number) => (
					<li key={index} />
				))}
			</ul>
		</div>
	);
}
