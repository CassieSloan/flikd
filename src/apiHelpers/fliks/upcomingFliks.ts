import axios from 'axios';
import { ApiHandlers, generateConfig, urls } from '../sharedConfig';

export type UpcomingFliks = {
	values: { page: number };
} & ApiHandlers;
/**
 * Register user function.
 */
export const getUpcomingFliks = async ({ handleFail, onSuccess, values }: UpcomingFliks) => {
	const config = generateConfig({ method: 'POST', values });
	await axios(urls.fliksUpcoming, config)
		.then((response) => {
			const { data, status } = response;
			if (status === 200) data ? onSuccess(data) : handleFail(response);
		})
		.catch((err) => {
			handleFail(err);
		});
};
