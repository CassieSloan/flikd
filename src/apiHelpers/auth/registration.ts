import axios from 'axios';
import { FormSubmitApiProps, generateConfig, urls } from '../sharedConfig';

/**
 * Register user function.
 */
export const registerUser = async ({
	handleFail,
	onSuccess,
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
				accessToken ? onSuccess(accessToken) : handleFail(response);
			}
		})
		.catch((err) => {
			handleFail(err);
		});
};
