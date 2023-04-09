import { Box, Heading, List } from 'grommet';
import moment from 'moment';
import { FC } from 'react';
import { Flex } from '../../../design/components/Flex';
import { GetProfileResponse } from '../../../types/auth/users';
import { DeleteAccount } from './DeleteAccount';
import { UpdateAvatar } from './UpdateAvatar';
import { UpdatePronouns } from './UpdatePronouns';

type UserDetailOptions = Pick<
	GetProfileResponse['data'],
	'userSince' | 'username' | 'pronouns' | 'profilePhoto'
>;
type UserDetailsProps = Partial<UserDetailOptions>;

/**
 * UserDetails.
 */
export const UserDetails: FC<UserDetailsProps> = ({ username, userSince }) => {
	const formattedUserSince = moment(userSince).format('D MMMM YYYY');

	return (
		<Box margin="small">
			<Flex justify="space-between">
				<Heading level={3}>Profile</Heading>
				<DeleteAccount />
			</Flex>
			<List
				primaryKey="id"
				secondaryKey="value"
				data={[
					{ id: 'Avatar', value: <UpdateAvatar /> },
					{ id: 'Username', value: username },
					{ id: 'Pronouns', value: <UpdatePronouns /> },
					{ id: 'User since', value: formattedUserSince },
				]}
			/>
		</Box>
	);
};