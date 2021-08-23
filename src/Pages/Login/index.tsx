import { FormProvider } from 'react-hook-form';

import { emailRegExp } from 'Constants/regexp';
import AppLink from 'Components/Routing/AppLink';
import Button from 'Components/Input/Button';
import Checkbox from 'Components/Input/Checkbox';
import FocusedLayout from 'Layouts/FocusedLayout';
import Heading from 'Components/Common/Heading';
import Overlay from 'Components/Common/Overlay';
import TextInput from 'Components/Input/TextInput';
import Toast from 'Components/Common/Toast';

import useLogin from './useLogin';
import styles from './styles.module.scss';

export default function Login(): JSX.Element {
	const {
		isLoading,
		showPassword,
		methods,
		showToast,
		toastType,
		toastTitle,
		toastBody,
		onCloseToast,
		onSubmit,
		onToggleShowPassword
	} = useLogin();

	return (
		<FocusedLayout>
			<Overlay
				show={isLoading}
			/>
			<Heading>
				simple-todo
			</Heading>
			<FormProvider {...methods}>
				<form className={styles.form} onSubmit={methods.handleSubmit(onSubmit)}>
					<TextInput
						label="email"
						errorMessage="please enter a valid email address"
						name="email"
						required
						minLength={1}
						maxLength={50}
						pattern={emailRegExp}
						disabled={isLoading}
					/>
					<TextInput
						label="password"
						errorMessage="please enter a password"
						type={showPassword ? "text" : "password"}
						name="password"
						required
						minLength={1}
						maxLength={50}
						disabled={isLoading}
					/>
					<Checkbox
						label="show password"
						id="ShowPassword"
						value={showPassword}
						onChange={onToggleShowPassword}
					/>
					<Button
						label="log in"
						disabled={isLoading}
						submit
					/>
				</form>
			</FormProvider>
			<AppLink
				to="/create-account"
				label="create account"
			/>
			<Toast
				title={toastTitle}
				body={toastBody}
				show={showToast}
				onClose={onCloseToast}
				type={toastType}
			/>
		</FocusedLayout>
	);
}
