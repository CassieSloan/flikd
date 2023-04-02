// eslint-disable-next-line import/no-named-as-default

import axios from 'axios';
import { AuthReqProps, generateConfig, urls } from '../sharedConfig';

export type AddMateProps = {
	username: string;
} & AuthReqProps;
/**
 * Login Function.
 */
export const addMate = async ({ handleFail, onSuccess, token, username }: AddMateProps) => {
	const config = generateConfig({ authToken: token, method: 'POST', values: { username } });

	await axios(urls.matesPost, config)
		.then((response) => {
			console.log('response', response);
			const { data, status } = response;
			if (status === 200) {
				const formattedResponse = data.data.Mates;
				formattedResponse ? onSuccess(formattedResponse) : handleFail(response);
			}
		})
		.catch((err) => {
			console.log('couldnt find profile information', err);
		});
};
