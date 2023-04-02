import axios from 'axios';
import { AuthReqProps, generateConfig, urls } from '../sharedConfig';

/**
 * Get mates api fetch.
 */
export const getMates = async ({ handleFail, onSuccess, token }: AuthReqProps) => {
	const config = generateConfig({ authToken: token, method: 'GET' });
	await axios(urls.matesGet, config)
		.then((response) => {
			console.log('response', response);
			const { data, status } = response;
			if (status === 200) {
				const formattedResponse = data.data;
				formattedResponse ? onSuccess(formattedResponse) : handleFail(response);
			}
		})
		.catch((err) => {
			console.log('couldnt find profile information', err);
		});
};
