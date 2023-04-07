import axios from 'axios';
import { FlikList, MediaType } from '../../types/fliks/fliks';
import { AuthReqProps, generateConfig, urls } from '../sharedConfig';

export type UpcomingFliks = {
	values: {
		id: number;
		mediaType: MediaType;
		listType: FlikList;
		mates?: Record<string, 'id'>[];
		comment?: string;
	};
} & AuthReqProps;
/**
 * Add flik to list request.
 */
export const addFlikToList = async ({ handleFail, onSuccess, token, values }: UpcomingFliks) => {
	console.log('values', values);
	const config = generateConfig({ authToken: token, method: 'POST', values });
	await axios(urls.fliksAdd, config)
		.then((response) => {
			const { data, status } = response;
			if (status === 200) data ? onSuccess(data) : handleFail(response);
		})
		.catch((err) => {
			handleFail(err);
		});
};
