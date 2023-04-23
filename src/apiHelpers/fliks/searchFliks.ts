import axios from 'axios';
import { SearchMediaType } from '@/types/fliks/fliks';
import { ApiHandlers, generateConfig, urls } from '../sharedConfig';

export type SearchFliksProps = {
	values: { page?: number; mediaType?: SearchMediaType; searchTerm?: string };
} & ApiHandlers;

/**
 * Register user function.
 */
export const searchFliks = async ({ handleFail, onSuccess, values }: SearchFliksProps) => {
	const config = generateConfig({ method: 'POST', values });
	await axios(urls.fliksSearch, config)
		.then((response) => {
			const { data, status } = response;
			console.log('searchFlik res', response);
			if (status === 200) data ? onSuccess(data) : handleFail(response);
		})
		.catch((err) => {
			handleFail(err);
		});
};
