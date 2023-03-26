import { FieldValues } from '../components/forms/base/FormTypes';

export const headers = {
	'Content-Type': 'application/json',
	'x-api-key': `${process.env.NEXT_PUBLIC_RENDER_API_KEY}`,
	'X-Requested-With': 'XMLHttpRequest',
};

export const urls = {
	addMate: `${process.env.NEXT_PUBLIC_ADD_MATE_URL}`,
	getProfile: `${process.env.NEXT_PUBLIC_PROFILE_URL}`,
	login: `${process.env.NEXT_PUBLIC_LOGIN_URL}`,
	register: `${process.env.NEXT_PUBLIC_REGISTER_URL}`,
};

export type FormSubmitApiProps = {
	values: FieldValues;
	handleFail: (json: unknown) => void;
	onSuccess: (any) => void;
};

type Method = 'GET' | 'POST' | 'DELETE';
type GenerateConfigOptions = {
	values?: FieldValues;
	method?: Method;
	authToken?: string;
};

const generateHeaders = (authToken?: string) => ({
	...headers,
	...(authToken && { Authorization: `Bearer ${authToken}` }),
});

/**
 * Generate config for API reqs.
 */
export const generateConfig = ({ authToken, method = 'GET', values }: GenerateConfigOptions) => ({
	...(values && { data: JSON.stringify(values) }),
	headers: generateHeaders(authToken),
	method,
});
