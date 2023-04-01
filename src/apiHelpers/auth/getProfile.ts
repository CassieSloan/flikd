import axios from 'axios';
import { GetProfileResponse } from '../../types/auth/users';
import { FormSubmitApiProps, generateConfig, urls } from '../sharedConfig';

export type GetProfileProps = Omit<FormSubmitApiProps, 'values'> & { token: string };
/**
 * GetProfile Function.
 */
export const getProfile = async ({ handleFail, onSuccess, token }: GetProfileProps) => {
	const config = generateConfig({ authToken: token, method: 'GET' });
	await axios(urls.profileGet, config)
		.then((response) => {
			console.log('response', response);
			const { data, status } = response;
			if (status === 200) {
				const formattedResponse = data as GetProfileResponse;
				formattedResponse ? onSuccess(formattedResponse) : handleFail(response);
			}
		})
		.catch((err) => {
			console.log('couldnt find profile information', err);
		});
};
