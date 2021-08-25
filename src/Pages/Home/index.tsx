import AppLink from 'Components/Routing/AppLink';
import FadeIn from 'Components/Visual/FadeIn';
import ListGraphic from 'Components/Visual/ListGraphic';
import MasterLayout from 'Layouts/MasterLayout';
import Row from 'Components/Common/Row';

import MeetingImage from 'Assets/meeting-squoosh.jpg';
import NotebooksImage from 'Assets/notebooks-squoosh.jpg';
import TypewriterImage from 'Assets/typewriter-squoosh.jpg';

import styles from './styles.module.scss';
import useHome from './useHome';
import { Card } from './types';

const cards: Card[] = [
	{
		image: NotebooksImage,
		heading: 'manage yourself',
		content: 'create a list for your event, project, grocery run, anything you want, the list is endless!',
	},
	{
		image: TypewriterImage,
		heading: 'type it down',
		content: 'start recording your tasks, reminders and ideas',
	},
	{
		image: MeetingImage,
		heading: 'stay organized',
		content: `keep your ideas seperated with unlimited lists, no subscription required`,
	},
];

export default function Home(): JSX.Element {
	const {
		isLoading,
		name,
	} = useHome();

	return (
		<MasterLayout loading={isLoading}>
			<h1 className={styles.title}>
				{`welcome${name !== '' ? `, ${name}!` : '!'}`.toLocaleLowerCase()}
			</h1>
			<Row className={styles.row}>
				<AppLink
					label="create a list"
					to="/lists"
					button
				/>
				<AppLink
					label="view your archive"
					to="/archive"
					button
				/>
				<AppLink
					label="manage your account"
					to="/account"
					button
				/>
			</Row>
			<Row className={`${styles.row} ${styles.rowImgRight}`}>
				<div>
					<p className={styles.left}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lobortis, ex at scelerisque gravida, mi tortor ornare tortor, sed interdum lacus eros ut nibh. Sed tempor erat ac velit vulputate, sed sodales mauris rutrum. Morbi lobortis consequat lectus eget lobortis. Etiam in sem id nisl cursus faucibus. Donec nec justo quis tellus vehicula pellentesque. Curabitur tristique dignissim justo. Sed non dictum massa, ac molestie enim. Phasellus egestas non elit at dignissim. Mauris turpis ex, imperdiet sit amet ullamcorper vitae, finibus a mauris. Fusce nec scelerisque enim, in vulputate tortor. Praesent accumsan, odio non commodo lobortis, velit mauris tincidunt lorem, id ultrices risus ligula vel dui.
					</p>
					<p className={styles.left}>
					Cras non vulputate metus. Maecenas egestas nulla nec velit imperdiet, quis faucibus nisi ornare. Nam ornare vel ipsum ut faucibus. Ut facilisis id sem tincidunt gravida. Duis mattis rhoncus egestas. Sed vitae metus vitae sapien aliquam commodo. Etiam tempor lacus vitae odio condimentum rhoncus. Aenean tempus sollicitudin nisi ac maximus. Vivamus interdum lectus eget leo malesuada, eget gravida ex pellentesque. Integer in facilisis dolor.
					</p>
				</div>
				<FadeIn direction="right">
					<ListGraphic />
				</FadeIn>
			</Row>
			<Row className={styles.row}>
				<div className={styles.cards}>
					{cards.map((card: Card, index: number) => (
						<FadeIn key={index} direction={index === 0 ? 'left' : index === 1 ? 'bottom' : index === 2 ? 'right' : undefined}>
							<div className={styles.card}>
								<img src={card.image} alt="" />
								<h2>
									{card.heading}
								</h2>
								<p>
									{card.content}
								</p>
							</div>
						</FadeIn>
					))}
				</div>
			</Row>
		</MasterLayout>
	);
}
