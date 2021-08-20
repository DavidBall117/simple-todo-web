import { FormProvider } from 'react-hook-form';

import { emailRegExp } from 'Constants/regexp';
import TextInput from 'Components/Common/Input/TextInput';
import Button from 'Components/Common/Input/Button';

import useLogin from './useLogin';
import styles from './styles.module.scss';

export default function Login(): JSX.Element {
	const {
		methods,
		onSubmit
	} = useLogin();

	return (
		<div className={styles.container}>
			<h1 className={styles.heading}>
				simple-todo
			</h1>
			<FormProvider {...methods}>
				<form onSubmit={methods.handleSubmit(onSubmit)}>
					<TextInput
						label="email"
						errorMessage="Please enter a valid email address."
						name="email"
						required
						minLength={1}
						maxLength={50}
						pattern={emailRegExp}
					/>
					<TextInput
						label="password"
						errorMessage="Please enter a password."
						type="password"
						name="password"
						required
						minLength={1}
						maxLength={50}
					/>
					<Button
						submit
						label="log in"
					/>
				</form>
			</FormProvider>
		</div>
	);
}
