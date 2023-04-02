import axios from 'axios';
import { ApiHandlers, generateConfig, urls } from '../sharedConfig';

export type UpcomingFliks = {
	values: { page: number };
} & ApiHandlers;
/**
 * Register user function.
 */
export const getUpcomingFliks = async ({ handleFail, onSuccess, values }: UpcomingFliks) => {
	console.log('api req', values);
	const config = generateConfig({ method: 'POST', values });
	await axios(urls.upcomingFliks, config)
		.then((response) => {
			const { data, status } = response;
			if (status === 200) {
				console.log('200');
				console.log('data', data);
				data ? onSuccess(data) : handleFail(response);
			}
		})
		.catch((err) => {
			handleFail(err);
		});
};
