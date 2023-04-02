import { Box, Heading, List, Text } from 'grommet';
import moment from 'moment';
import { FC, useContext, useEffect, useState } from 'react';
import Form from '../../components/forms/base/Form';
import { FormFieldProps } from '../../components/forms/base/FormTypes';
import { Avatar } from '../../components/library/Avatar';
import { Profile } from '../../context/context';
import { GetProfileResponse } from '../../types/auth/users';
import { requestMate } from '../../utils/apiHelpers';
import { UpdateAvatar, UpdatePronouns } from './_forms';

type UserDetailOptions = Pick<
	GetProfileResponse['data'],
	'userSince' | 'username' | 'pronouns' | 'profilePhoto'
>;
type UserDetailsProps = Partial<UserDetailOptions>;
/**
 * UserDetails.
 */
export const UserDetails: FC<UserDetailsProps> = ({ profilePhoto, username, userSince }) => {
	const { profileInfo } = useContext(Profile);
	const [avatar, setAvatar] = useState<Avatar | undefined>(profilePhoto as Avatar);

	useEffect(() => {
		if (profileInfo?.data.profilePhoto) setAvatar(profileInfo?.data.profilePhoto as Avatar);
	}, [profileInfo]);

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

type MateDetailsProps = { mates: string[] };
/**
 * Mates Details.
 */
export const MatesDetails = ({ mates }: MateDetailsProps) => {
	const { authToken: token } = useContext(Profile);

	const onSubmit = (formValues: any) => {
		console.log('formValues', formValues);
		const username = formValues.mateUsername;
		if (token) requestMate({ token, username });
	};

	return (
		<Box margin="small">
			<Heading level={3}>Mates</Heading>
			{mates &&
				mates?.map((item) => {
					return (
						<>
							<Text key={item} size="small">
								{item}
							</Text>
						</>
					);
				})}
			<Form
				onSubmit={(values: FormFieldProps) => onSubmit(values)}
				fields={[
					{
						label: 'Mate username',
						name: 'mateUsername',
						placeholder: 'Bilbo',
						type: 'text',
						validation: { required: true },
					},
				]}
				submitButton="Add mate"
			/>
		</Box>
	);
};
