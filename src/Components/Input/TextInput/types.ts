export type TextInputProps = {
	id?: string;
	name: string;
	type?: string;
	label?: string;
	disabled?: boolean;
	required?: boolean;
	minLength?: number;
	maxLength?: number;
	pattern?: RegExp;
	errorMessage?: string;
}
