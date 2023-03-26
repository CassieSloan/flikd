import axios from 'axios';
import { GetProfileResponse } from '../../types/auth/users';
import { generateConfig, urls } from '../sharedConfig';

/**
 * GetProfile Function.
 */
export const getProfile = async (token: string) => {
	if (!token) return {};

	const config = generateConfig({ authToken: token, method: 'GET' });
	await axios(urls.getProfile, config)
		.then((response) => {
			console.log('response', response);
			const { data, status } = response;
			if (status === 200) {
				const formattedResponse = data as GetProfileResponse;
				return formattedResponse;
			}
		})
		.catch((err) => {
			console.log('couldnt find profile information', err);
		});
};
