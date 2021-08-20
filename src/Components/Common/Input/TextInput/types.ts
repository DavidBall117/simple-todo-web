export type TextInputProps = {
	id?: string;
	name: string;
	type?: string;
	label?: string;
	required?: boolean;
	minLength?: number;
	maxLength?: number;
	pattern?: RegExp;
	errorMessage?: string;
}
