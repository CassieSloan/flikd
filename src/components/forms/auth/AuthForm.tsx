// eslint-disable-next-line import/no-named-as-default
import jwt_decode from 'jwt-decode';
import Router from 'next/router';
import { FC, useContext, useState } from 'react';
import { GetProfileResponse } from '@/types/auth/users';
import { login } from '../../../apiHelpers/auth/login';
import { registerUser } from '../../../apiHelpers/auth/registerUser';
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
	const { setAuthToken, setProfileInfo } = useContext(Profile);

	const formProps = getAuthFormValues(isLoggingIn);
	console.log('formProps', formProps);
	const errorMsg = getAuthFormError(isLoggingIn);

	const handleFail = () => setError(errorMsg);
	const onSuccess = (token: string) => {
		setAuthToken(token);
		setSessionItem('userAuth', token);
		const decoded = jwt_decode(token);
		console.log('decoded', decoded);
		setProfileInfo(decoded as GetProfileResponse);
		Router.push('/profile');
	};

	const onSubmit = async (values: FieldValues) => {
		setLoading(true);
		isLoggingIn
			? login({ handleFail, onSuccess, values })
			: registerUser({ handleFail, onSuccess, values });
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
