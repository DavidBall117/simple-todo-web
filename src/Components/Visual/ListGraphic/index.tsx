import styles from './styles.module.scss';

export default function ListGraphic(): JSX.Element {
	return (
		<div className={styles.graphic}>
			<span />
			<ul>
				{[...Array(10)].map((_val, index: number) => (
					<li key={index} />
				))}
			</ul>
		</div>
	);
}
