import axios from 'axios';
import { MediaType } from '@/types/fliks/fliks';
import { ApiHandlers, generateConfig, urls } from '../sharedConfig';

export type DiscoverFliks = {
	values: { mediaType: MediaType | null };
} & ApiHandlers;
/**
 * Register user function.
 */
export const getDiscoverFliks = async ({ handleFail, onSuccess, values }: DiscoverFliks) => {
	const config = generateConfig({ method: 'GET', values });
	await axios(urls.fliksDiscover, config)
		.then((response) => {
			const { data, status } = response;
			console.log('Discover response', response);
			if (status === 200) data ? onSuccess(data) : handleFail(response);
		})
		.catch((err) => {
			handleFail(err);
		});
};
