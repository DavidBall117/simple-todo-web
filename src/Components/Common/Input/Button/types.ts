import { MouseEventHandler } from 'react';

export type ButtonProps = {
	label: string;
	primary?: boolean;
	secondary?: boolean;
	onClick?: MouseEventHandler<HTMLButtonElement>;
	submit?: boolean;
}
