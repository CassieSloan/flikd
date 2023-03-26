// eslint-disable-next-line import/no-named-as-default
import Router from 'next/router';
import { FC, useContext, useState } from 'react';
import { registerUser } from '../../../apiHelpers/auth/registration';
import { Profile } from '../../../context/context';
import { setSessionItem } from '../../../utils/base';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import { FieldValues } from '../base/FormTypes';
import { StyledAuthForm } from './StyledAuthForm';

const registrationFields = [
	{
		label: 'username',
		name: 'user',
		placeholder: 'a cool username',
		type: 'text',
		validation: { required: true },
		validationMessage: 'Please enter a username',
	},
	{
		label: 'email',
		name: 'email',
		placeholder: 'you@email.com',
		type: 'email',
		validation: {
			pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
			required: true,
		},
		validationMessage: 'Please enter your first name',
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
	{
		label: 'confirm password',
		name: 'passwordTwo',
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
 * Registeration Form component.
 */
export const RegistrationForm: FC = () => {
	const [userExists, setUserExists] = useState(false);
	const [loading, setLoading] = useState(false);
	const { setAuthToken } = useContext(Profile);

	const onSuccess = (token: string) => {
		setAuthToken(token);
		setSessionItem('userAuth', token);
		console.log('redirecting');
		Router.push('/profile');
	};

	const onSubmit = async (values: FieldValues) => {
		setLoading(true);
		const handleFail = () => setUserExists(true);
		registerUser({ handleFail, onSuccess, values });
		setLoading(false);
	};

	return (
		<>
			{userExists && <span>This user already exists. Please login to continue</span>}
			<StyledAuthForm
				onSubmit={onSubmit}
				fields={registrationFields}
				title="Create an account"
				submitButton="Register"
			/>
			{loading && <LoadingSpinner />}
		</>
	);
};
