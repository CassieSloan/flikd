import axios from 'axios';
import { UserInfo } from '../../types/auth/users';
import { UpdateProfileOptions } from '../../utils/profileHelpers';
import { AuthReqProps, generateConfig, urls } from '../sharedConfig';

export type UpdateProfileProps = {
	values: UpdateProfileOptions;
} & AuthReqProps;
/**
 * Register user function.
 */
export const updateProfile = async ({
	handleFail,
	onSuccess,
	token,
	values,
}: UpdateProfileProps) => {
	console.log('values', values);
	const config = generateConfig({ authToken: token, method: 'POST', values });
	await axios(urls.profilePost, config)
		.then((response) => {
			const { data, status } = response;
			if (status === 200) {
				data.data ? onSuccess(data.data as UserInfo) : handleFail(response);
			}
		})
		.catch((err) => {
			handleFail(err);
		});
};
