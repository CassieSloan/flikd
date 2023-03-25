// eslint-disable-next-line import/no-named-as-default
import Router from 'next/router';
import { FieldValues } from '../../components/forms/base/FormTypes';

type LoginProps = {
	values: FieldValues;
	handleFail: (json: unknown) => void;
	setLoading: () => void;
};
/**
 * Login Function.
 */
export const login = async ({ handleFail, setLoading, values }: LoginProps) => {
	setLoading();
	const loginUrl = `${process.env.NEXT_PUBLIC_LOGIN_URL}`;

	const config = {
		body: JSON.stringify(values),
		headers: {
			'Content-Type': 'application/json',
			'x-api-key': `${process.env.NEXT_PUBLIC_RENDER_API_KEY}`,
			'X-Requested-With': 'XMLHttpRequest',
		},
		method: 'POST',
	};

	const response = await fetch(loginUrl, config);
	console.log('response', response);
	const json = await response.json();
	console.log('json', json);
	if (response.ok) {
		console.log('json', json);
		console.log('finished');
		if (json.accessToken) {
			Router.push(`/profile?auth=${json.accessToken}`);
		} else {
			handleFail(json);
		}
	} else {
		handleFail(json);
	}
};
