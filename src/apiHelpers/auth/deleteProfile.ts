import axios from 'axios';
import { AuthReqProps, generateConfig, urls } from '../sharedConfig';

/**
 * Register user function.
 */
export const deleteProfile = async ({ handleFail, onSuccess, token }: AuthReqProps) => {
	const config = generateConfig({ authToken: token, method: 'POST' });
	await axios(urls.profileDelete, config)
		.then((response) => {
			const { status } = response;
			if (status === 200) {
				onSuccess(response);
			}
		})
		.catch((err) => {
			handleFail(err);
		});
};
