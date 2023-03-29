import { FieldValues } from '../components/forms/base/FormTypes';

export const headers = {
	'Content-Type': 'application/json',
	'x-api-key': `${process.env.NEXT_PUBLIC_RENDER_API_KEY}`,
	'X-Requested-With': 'XMLHttpRequest',
};

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const urls = {
	addMate: `${baseUrl}/profile/add-mate`,
	getMates: `${baseUrl}/profile/get-mates`,
	getProfile: `${baseUrl}/profile/get-profile`,
	login: `${baseUrl}/auth/login`,
	register: `${baseUrl}/auth/register`,
};

export type FormSubmitApiProps = {
	values: FieldValues;
	handleFail: (json: unknown) => void;
	onSuccess: (arg: any) => void;
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
