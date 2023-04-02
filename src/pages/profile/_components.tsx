import { Box, DataTable, Heading, List } from 'grommet';
import moment from 'moment';
import { FC, useContext } from 'react';
import { Avatar } from '../../components/library/Avatar';
import { Profile } from '../../context/context';
import { Flex } from '../../design/components/Flex';
import { GetProfileResponse } from '../../types/auth/users';
import { AddMate, UpdateAvatar, UpdatePronouns } from './_forms';

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
			<Heading level={3}>Profile</Heading>
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

/**
 * Mates Details.
 */
export const MatesDetails: FC = () => {
	const { authToken, profileInfo } = useContext(Profile);
	console.log('authToken', authToken);

	const mateData = profileInfo?.data.mates.Mates.map(({ profilePhoto, pronouns, username }) => ({
		profilePhoto: <Avatar avatar={profilePhoto as Avatar} />,
		pronouns: pronouns || 'No pronouns set',
		username,
	}));

	return (
		<Box margin="small">
			<Flex justify="space-between">
				<Heading level={3}>Mates</Heading>
				<AddMate />
			</Flex>
			<DataTable data={mateData} />
		</Box>
	);
};
