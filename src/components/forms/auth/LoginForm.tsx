// eslint-disable-next-line import/no-named-as-default
import Router from 'next/router';
import { FC, useContext, useState } from 'react';
import { login } from '../../../apiHelpers/auth/login';
import { Profile } from '../../../context/context';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import { FieldValues } from '../base/FormTypes';
import { StyledAuthForm } from './StyledAuthForm';

const loginFields = [
	{
		label: 'username',
		name: 'user',
		placeholder: 'a cool username',
		type: 'text',
		validation: { required: true },
		validationMessage: 'Please enter a username',
	},
	{
		label: 'password',
		name: 'password',
		placeholder: 'f***y**',
		type: 'password',
		validation: {
			pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
			required: true,
		},
		validationMessage:
			'Please enter password with: Minimum eight characters, at least one uppercase letter, one lowercase letter and one number',
	},
];

/**
 * Login Form component.
 */
export const LoginForm: FC = () => {
	const [noUserExists, setNoUserExists] = useState(false);
	const [loading, setLoading] = useState(false);
	const { setAuthToken } = useContext(Profile);

	const onSuccess = (token: string) => {
		setAuthToken(token);
		console.log('redirecting');
		Router.push('/profile');
	};

	const onSubmit = async (values: FieldValues) => {
		setLoading(true);
		const handleFail = () => setNoUserExists(true);
		login({ handleFail, onSuccess, values });
		setLoading(false);
	};

	return (
		<>
			{noUserExists && (
				<span>This user does not exist. Please register to continue</span>
			)}
			<StyledAuthForm
				onSubmit={onSubmit}
				fields={loginFields}
				title="Welcome back"
				submitButton="Login"
			/>
			{loading && <LoadingSpinner />}
		</>
	);
};
