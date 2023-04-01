import { Box, Heading, Text } from 'grommet';
import { FC, useContext, useState } from 'react';
import { updateProfile } from '../../apiHelpers/auth/updateProfile';
import Form from '../../components/forms/base/Form';
import { FormFieldProps } from '../../components/forms/base/FormTypes';
import { Profile } from '../../context/context';
import { GetProfileResponse } from '../../types/auth/users';
import { requestMate } from '../../utils/apiHelpers';
import { setSessionItem } from '../../utils/base';
import { UpdateProfileOptions } from '../../utils/profileHelpers';

type UserDetailOptions = Pick<GetProfileResponse['data'], 'userSince' | 'username' | 'pronouns'>;
type UserDetailsProps = Partial<UserDetailOptions>;
/**
 * UserDetails.
 */
export const UserDetails: FC<UserDetailsProps> = ({ pronouns, username, userSince }) => {
	const { authToken: token, profileInfo, setProfileInfo } = useContext(Profile);
	const [newPronouns, setNewPronouns] = useState<string | null>();
	type PronounsProps = Pick<UpdateProfileOptions, 'pronouns'>;
	console.log('profileInfo in user section', profileInfo);
	console.log('newPronouns', newPronouns);

	const onSuccess = (userInfo) => {
		console.log('hello??');
		console.log('userInfo.pronouns', userInfo.data.pronouns);
		console.log('userInfo', userInfo);
		if (userInfo.data.pronouns && profileInfo) {
			console.log('got to success');
			const clonedProfile = profileInfo;
			clonedProfile.data.pronouns = userInfo.data.pronouns;
			console.log('clonedProfile', clonedProfile);
			setProfileInfo(clonedProfile);
			setSessionItem('profileInfo', JSON.stringify(clonedProfile));
			setNewPronouns(clonedProfile.data.pronouns);
		}
	};

	const onSubmit = (pronouns: PronounsProps) => {
		console.log('values', pronouns);
		if (token) {
			console.log('update profile req');
			updateProfile({
				handleFail: (err) => console.log('err', err),
				onSuccess,
				token,
				values: pronouns,
			});
			console.log('finished');
		}
	};

	return (
		<Box margin="small">
			<Heading level={3}>Profile</Heading>
			{username && (
				<Text key={username} size="small">
					username: {username}
				</Text>
			)}
			{newPronouns && (
				<Text key={newPronouns} size="small">
					newPronouns: {newPronouns}
				</Text>
			)}
			{userSince && <Text size="small">user since: {userSince}</Text>}
			<Form
				onSubmit={(values: FormFieldProps) => onSubmit(values)}
				fields={[
					{
						label: 'Pronouns',
						name: 'pronouns',
						options: ['She/Her', 'He/Him', 'They/Them'],
						placeholder: 'Select pronouns',
						type: 'select',
						validation: { required: false },
					},
				]}
				submitButton="update pronouns"
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
