import axios from 'axios';
import { FormSubmitApiProps, generateConfig, urls } from '../sharedConfig';

/**
 * Login Function.
 */
export const login = async ({ handleFail, onSuccess, values }: FormSubmitApiProps) => {
	console.log('hits login');
	const config = generateConfig({ method: 'POST', values });

	await axios(urls.login, config)
		.then((response) => {
			console.log('login response', response);
			const {
				data: { accessToken },
				status,
			} = response;
			if (status === 200) {
				accessToken ? onSuccess(accessToken) : handleFail(response);
			}
		})
		.catch((err) => {
			handleFail(err);
		});
};
