import styled from 'styled-components';
import {
	primary100,
	primary500,
	primary700,
	tertiary100,
	tertiary500,
	tertiary700,
} from '../../../design/colors/colors';
import { offWhite, white } from '../../../design/colors/shades';
import { Heading3 } from '../../../design/typography/typography';
import Form from '../base/Form';
import { Label, TextInput } from '../base/FormComponents';

export const StyledAuthForm = styled(Form)`
	border-radius: 16px;
	padding: 24px;
	max-width: 400px;
	background: ${offWhite};
	${Label} {
		position: absolute;
		top: -1.5px;
		left: 8px;
		line-height: 0.3;
		background: ${offWhite};
		color: ${primary700};
		padding: 0 5px;
	}
	${TextInput} {
		width: -webkit-fill-available;
		border: 1px solid ${primary500};

		&::placeholder {
			color: ${primary100};
		}
	}
	${Heading3} {
		text-align: center;
		margin: 0;
	}
`;

export const loginFields = [
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

export const registrationFields = [
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

const loginError = 'This user does not exist. Please register to continue';
const registerError = 'This user already exists. Please login to continue';

/**
 * Get Auth form error based on login or register.
 */
export const getAuthFormError = (isLoggingIn: boolean) =>
	isLoggingIn ? loginError : registerError;

/**
 * Values for Auth Form based on login or register.
 */
export const getAuthFormValues = (isLoggingIn: boolean) => {
	console.log('isLoggingIn in vaues', isLoggingIn);
	const fields = isLoggingIn ? loginFields : registrationFields;
	const submitButton = isLoggingIn ? 'Login' : 'Register';
	const title = isLoggingIn ? 'Welcome back' : 'Create an account';

	return { fields, submitButton, title };
};
