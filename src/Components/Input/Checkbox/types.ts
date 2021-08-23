import { ChangeEventHandler } from 'react';

export type CheckboxProps = {
	id: string;
	label: string;
	value?: boolean;
	onChange?: ChangeEventHandler<HTMLInputElement>;
}
