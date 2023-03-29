import { Box, Button, Tab, Tabs, Text } from 'grommet';
import { Favorite, Group, Inspect, User, View } from 'grommet-icons';
import { FC, useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { getProfile } from '../../apiHelpers/auth/getProfile';
import { Profile } from '../../context/context';
import { tertiary80 } from '../../design/colors/colors';
import { white } from '../../design/colors/shades';
import { onSelected } from '../../design/utils';
import { GetProfileResponse } from '../../types/auth/users';
import { Mates } from '../../types/mates/mates';
import { requestMate } from '../../utils/apiHelpers';
import { setSessionItem } from '../../utils/base';
import { FormattedProfileData } from '../../utils/profileHelpers';
import Form from '../forms/base/Form';
import { FormFieldProps } from '../forms/base/FormTypes';

const StyledTab = styled(Tab)`
	padding: 24px;
	svg {
		stroke: ${white};
	}
	${onSelected(css`
		svg {
			stroke: ${tertiary80};
		}
	`)}
	* {
		border: none;
	}
`;

const StyledButton = styled(Button)`
	background: ${tertiary80};
`;
/**
 * Tabs withIcons.
 */
export const TabsWithIcons: FC<FormattedProfileData> = ({
	favourites,
	mates: existingMates,
	seenIts,
	toWatch,
	user,
}) => {
	const { authToken: token, profileInfo, setProfileInfo } = useContext(Profile);
	const [newMates, setNewMates] = useState<Mates | undefined>(existingMates);

	const onSuccess = (profileInfo: GetProfileResponse) => {
		if (profileInfo) {
			const mates = profileInfo.data.mates.Mates;
			setNewMates(mates);
			setSessionItem('profileInfo', JSON.stringify(profileInfo));
		}
	};

	useEffect(() => {
		if (token)
			getProfile({
				handleFail: (err) => err,
				onSuccess,
				token,
			});
	}, []);

	const onSubmit = (formValues: any) => {
		console.log('formValues', formValues);
		const username = formValues.mateUsername;
		if (token)
			requestMate({ token, username }).then((mates) => {
				console.log('mates after request in profile', mates);
				// if (mates && profileInfo) {
				// 	setProfileInfo(setProperty(profileInfo, 'profileInfo.data.mates.Mates', mates));
				// 	setNewMates(mates);
				// 	console.log('updated context and session data');
				// }
			});
	};

	const userMates = newMates ? newMates : existingMates;

	const formattedMates = userMates.map(({ username }) => username);

	const { pronouns, username, userSince } = user;
	return (
		<Box align="center" pad="medium">
			<Tabs>
				<StyledTab icon={<User />}>
					<Box margin="small">
						{username && (
							<Text key={username} size="small">
								username: {username}
							</Text>
						)}
						{pronouns && (
							<Text key={pronouns} size="small">
								pronouns: {pronouns}
							</Text>
						)}
						{userSince && <Text size="small">user since: {userSince}</Text>}
					</Box>
				</StyledTab>
				<StyledTab icon={<Group />}>
					<Box margin="small">
						{formattedMates &&
							formattedMates?.map((item) => {
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
				</StyledTab>
				<StyledTab icon={<Favorite />}>
					<Box margin="small">
						{favourites &&
							favourites.map((item) => {
								return (
									<Text key={item.title} size="small">
										item.title
									</Text>
								);
							})}
					</Box>
				</StyledTab>
				<StyledTab icon={<View />}>
					<Box margin="small"></Box>
				</StyledTab>
				<StyledTab icon={<Inspect />}>
					<Box margin="small">
						{toWatch.map((item) => {
							return (
								<Text key={item.t} size="small">
									{item.title}
								</Text>
							);
						})}
					</Box>
				</StyledTab>
			</Tabs>
		</Box>
	);
};
