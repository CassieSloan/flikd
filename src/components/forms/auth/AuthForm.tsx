// eslint-disable-next-line import/no-named-as-default
import Router from 'next/router';
import { FC, useContext, useState } from 'react';
import { login } from '../../../apiHelpers/auth/login';
import { Profile } from '../../../context/context';
import { setSessionItem } from '../../../utils/base';
import { LoadingSpinner } from '../../common/LoadingSpinner';
import { FieldValues } from '../base/FormTypes';
import { getAuthFormError, getAuthFormValues, StyledAuthForm } from './base';

type AuthFormProps = { isLoggingIn: boolean };
/**
 * Login Form component.
 */
export const AuthForm: FC<AuthFormProps> = ({ isLoggingIn }: AuthFormProps) => {
	const [error, setError] = useState<string | undefined>();
	const [loading, setLoading] = useState(false);
	const { setAuthToken } = useContext(Profile);

	const formProps = getAuthFormValues(isLoggingIn);
	console.log('formProps', formProps);
	const errorMsg = getAuthFormError(isLoggingIn);
	const handleFail = () => setError(errorMsg);
	const onSuccess = (token: string) => {
		setAuthToken(token);
		setSessionItem('userAuth', token);
		console.log('redirecting');
		Router.push('/profile');
	};
	const onSubmit = async (values: FieldValues) => {
		setLoading(true);
		login({ handleFail, onSuccess, values });
		setLoading(false);
	};

	return (
		<>
			{error && <span>This user does not exist. Please register to continue</span>}
			<StyledAuthForm {...{ ...formProps, onSubmit }} />
			{loading && <LoadingSpinner />}
		</>
	);
};