import { FieldValues } from '../components/forms/base/FormTypes';

export const headers = {
	'Content-Type': 'application/json',
	'x-api-key': `${process.env.NEXT_PUBLIC_RENDER_API_KEY}`,
	'X-Requested-With': 'XMLHttpRequest',
};

const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const urls = {
	login: `${baseUrl}/auth/login`,
	matesDelete: `${baseUrl}/remove-mate`,
	matesGet: `${baseUrl}/profile/get-mates`,
	matesGetProfile: `${baseUrl}/profile/get-mates-profile`,
	matesPost: `${baseUrl}/profile/add-mate`,
	profileGet: `${baseUrl}/profile/get-profile`,
	profilePost: `${baseUrl}/profile/update-profile`,
	register: `${baseUrl}/auth/register`,
	timelineGet: `${baseUrl}/profile/get-timeline`,
};

export type FormSubmitApiProps = {
	values: FieldValues;
	handleFail: (json: unknown) => void;
	onSuccess: (arg: any) => void;
};
export type AuthReqProps = Omit<FormSubmitApiProps, 'values'> & WithToken;
export type WithToken = { token: string };
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
