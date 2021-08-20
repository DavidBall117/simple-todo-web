import { useFormContext } from 'react-hook-form';

import styles from './styles.module.scss';
import { TextInputProps } from './types';

export default function TextInput({
	id,
	name,
	type,
	label,
	required,
	minLength,
	maxLength,
	pattern,
	errorMessage
}: TextInputProps): JSX.Element {
	const {
		register,
		formState
	} = useFormContext();
	return (
		<div className={styles.group}>
			<input
				className={styles.field}
				type={type ?? 'text'}
				id={id ?? name}
				placeholder={label}
				{...register(name, {
					required,
					minLength,
					maxLength,
					pattern
				})}
			/>
			<label
				className={styles.label}
				htmlFor={name}>
					{label}
			</label>
			{formState.errors[name] && errorMessage && (
				<div className={styles.error}>
					{errorMessage}
				</div>
			)}
		</div>
	);
}
