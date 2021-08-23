import { MouseEventHandler } from 'react';

export type ButtonProps = {
	label: string;
	disabled?: boolean;
	secondary?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	submit?: boolean;
}
