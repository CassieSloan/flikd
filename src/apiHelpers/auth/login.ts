import axios from 'axios';
import Router from 'next/router';
import { FormSubmitApiProps, generateConfig, urls } from '../sharedConfig';

/**
 * Login Function.
 */
export const login = async ({ handleFail, values }: FormSubmitApiProps) => {
	const config = generateConfig({ method: 'POST', values });

	await axios(urls.login, config)
		.then((response) => {
			console.log('response', response);
			const {
				data: { accessToken },
				status,
			} = response;
			if (status === 200) {
				accessToken
					? Router.push(`/profile?auth=${accessToken}`)
					: handleFail(response);
			}
		})
		.catch((err) => {
			handleFail(err);
		});
};
