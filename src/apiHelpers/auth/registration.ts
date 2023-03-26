import axios from 'axios';
import Router from 'next/router';
import { FormSubmitApiProps, generateConfig, urls } from '../sharedConfig';

/**
 * Register user function.
 */
export const registerUser = async ({
	handleFail,
	values,
}: FormSubmitApiProps) => {
	const config = generateConfig({ method: 'POST', values });

	await axios(urls.register, config)
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
