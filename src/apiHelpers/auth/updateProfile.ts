import axios from 'axios';
import { UserInfo } from '../../types/auth/users';
import { UpdateProfileOptions } from '../../utils/profileHelpers';
import { generateConfig, urls } from '../sharedConfig';
import { GetProfileProps } from './getProfile';

export type UpdateProfileProps = {
	values: UpdateProfileOptions;
} & GetProfileProps;
/**
 * Register user function.
 */
export const updateProfile = async ({
	handleFail,
	onSuccess,
	token,
	values,
}: UpdateProfileProps) => {
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
