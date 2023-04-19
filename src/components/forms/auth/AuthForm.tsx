// eslint-disable-next-line import/no-named-as-default
import jwt_decode from 'jwt-decode';
import Router from 'next/router';
import { FC, useContext, useState } from 'react';
import { DecodedAuthToken } from '@/types/auth/users';
import { login } from '../../../apiHelpers/auth/login';
import { registerUser } from '../../../apiHelpers/auth/registerUser';
import { Profile } from '../../../context/context';
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
	const { setAuthToken, setProfileRef } = useContext(Profile);

	const formProps = getAuthFormValues(isLoggingIn);
	const errorMsg = getAuthFormError(isLoggingIn);

	const handleFail = () => setError(errorMsg);
	const onSuccess = (token: string) => {
		setAuthToken(token);
		const decoded: DecodedAuthToken = jwt_decode(token);
		setProfileRef(decoded?.profile);
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
