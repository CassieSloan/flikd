import axios from 'axios';
import { MediaType } from '@/types/fliks/fliks';
import { ApiHandlers, generateConfig, urls } from '../sharedConfig';

export type UpcomingFliks = {
	values: { mediaType: MediaType | null };
} & ApiHandlers;
/**
 * Register user function.
 */
export const getTrendingFliks = async ({ handleFail, onSuccess, values }: UpcomingFliks) => {
	const config = generateConfig({ method: 'POST', values });
	await axios(urls.fliksTrending, config)
		.then((response) => {
			const { data, status } = response;
			console.log('trending', response);
			if (status === 200) data ? onSuccess(data) : handleFail(response);
		})
		.catch((err) => {
			handleFail(err);
		});
};
