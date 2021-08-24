import Button from 'Components/Input/Button';
import FadeIn from 'Components/Visual/FadeIn';
import ListGraphic from 'Components/Visual/ListGraphic';
import routes from 'Constants/routes';
import { RouteData } from 'Constants/types';
import Row from 'Components/Common/Row';

import MeetingImage from 'Assets/meeting-squoosh.jpg';
import NotebooksImage from 'Assets/notebooks-squoosh.jpg';
import TypewriterImage from 'Assets/typewriter-squoosh.jpg';

import styles from './styles.module.scss';
import useHome from './useHome';

export default function Home(): JSX.Element {
	const {
		name,
	} = useHome();

	return (
		<div className={styles.container}>
			<nav className={styles.nav}>
				<span>
					simple-todo
				</span>
				<ul>
					{routes.map((route: RouteData) => (
						<li key={route.path}>
							<a href={route.path}>
								{route.title}
							</a>
						</li>
					))}
				</ul>
			</nav>
			<main className={styles.main}>
				<h1>
					{`welcome${name !== '' ? `, ${name}!` : '!'}`.toLocaleLowerCase()}
				</h1>
				<Row className={`${styles.row} ${styles.rowImgRight}`}>
					<div>
						<p className={styles.left}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, ex at scelerisque gravida, mi tortor ornare tortor, sed interdum lacus eros ut nibh. Sed tempor erat ac velit vulputate, sed sodales mauris rutrum. Morbi lobortis consequat lectus eget lobortis. Etiam in sem id nisl cursus faucibus. Donec nec justo quis tellus vehicula pellentesque. Curabitur tristique dignissim justo. Sed non dictum massa, ac molestie enim. Phasellus egestas non elit at dignissim. Mauris turpis ex, imperdiet sit amet ullamcorper vitae, finibus a mauris. Fusce nec scelerisque enim, in vulputate tortor. Praesent accumsan, odio non commodo lobortis, velit mauris tincidunt lorem, id ultrices risus ligula vel dui.
						</p>
						<p className={styles.left}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, ex at scelerisque gravida, mi tortor ornare tortor, sed interdum lacus eros ut nibh. Sed tempor erat ac velit vulputate, sed sodales mauris rutrum. Morbi lobortis consequat lectus eget lobortis. Etiam in sem id nisl cursus faucibus. Donec nec justo quis tellus vehicula pellentesque. Curabitur tristique dignissim justo. Sed non dictum massa, ac molestie enim. Phasellus egestas non elit at dignissim. Mauris turpis ex, imperdiet sit amet ullamcorper vitae, finibus a mauris. Fusce nec scelerisque enim, in vulputate tortor. Praesent accumsan, odio non commodo lobortis, velit mauris tincidunt lorem, id ultrices risus ligula vel dui.
						</p>
					</div>
					<FadeIn direction="right">
						<ListGraphic />
					</FadeIn>
				</Row>
				<Row className={`${styles.row} ${styles.rowImgLeft}`}>
					<FadeIn direction="left">
						<ListGraphic />
					</FadeIn>
					<div>
						<p className={styles.right}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, ex at scelerisque gravida, mi tortor ornare tortor, sed interdum lacus eros ut nibh. Sed tempor erat ac velit vulputate, sed sodales mauris rutrum. Morbi lobortis consequat lectus eget lobortis. Etiam in sem id nisl cursus faucibus. Donec nec justo quis tellus vehicula pellentesque. Curabitur tristique dignissim justo. Sed non dictum massa, ac molestie enim. Phasellus egestas non elit at dignissim. Mauris turpis ex, imperdiet sit amet ullamcorper vitae, finibus a mauris. Fusce nec scelerisque enim, in vulputate tortor. Praesent accumsan, odio non commodo lobortis, velit mauris tincidunt lorem, id ultrices risus ligula vel dui.
						</p>
						<p className={styles.right}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, ex at scelerisque gravida, mi tortor ornare tortor, sed interdum lacus eros ut nibh. Sed tempor erat ac velit vulputate, sed sodales mauris rutrum. Morbi lobortis consequat lectus eget lobortis. Etiam in sem id nisl cursus faucibus. Donec nec justo quis tellus vehicula pellentesque. Curabitur tristique dignissim justo. Sed non dictum massa, ac molestie enim. Phasellus egestas non elit at dignissim. Mauris turpis ex, imperdiet sit amet ullamcorper vitae, finibus a mauris. Fusce nec scelerisque enim, in vulputate tortor. Praesent accumsan, odio non commodo lobortis, velit mauris tincidunt lorem, id ultrices risus ligula vel dui.
						</p>
					</div>
				</Row>
				<Row className={styles.row}>
					<div className={styles.cards}>
						<div className={styles.card}>
							<img src={NotebooksImage} alt="" />
							<h2>
								Heading One
							</h2>
							<p>
								Sed facilisis ultrices nibh sed tempor. Maecenas eu laoreet mi. Integer id justo sit amet lacus molestie maximus nec in mauris. Nunc tempor dapibus orci at euismod. Donec vel commodo justo, sit amet hendrerit urna.
							</p>
						</div>
						<div className={styles.card}>
							<img src={TypewriterImage} alt="" />
							<h2>
								Heading Two
							</h2>
							<p>
								Cras pretium tortor non lobortis pharetra. Aliquam nulla sem, viverra ut sapien sed, viverra finibus est.
							</p>
						</div>
						<div className={styles.card}>
							<img src={MeetingImage} alt="" />
							<h2>
								Heading Three
							</h2>
							<p>
								Mauris vel elit eu mi tincidunt tincidunt ac vitae diam. Etiam et nisi dignissim, maximus diam at, placerat arcu. In aliquam odio sit amet tortor posuere, nec semper sem maximus. Sed elementum blandit magna, non efficitur erat laoreet sed.
							</p>
						</div>
					</div>
				</Row>
				<Row className={styles.row}>
					<Button label="create a list" />
				</Row>
			</main>
		</div>
	);
}
