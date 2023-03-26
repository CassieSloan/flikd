import { Box, Tab, Tabs, Text } from 'grommet';
import { Favorite, Group, Inspect, User, View } from 'grommet-icons';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { tertiary80 } from '../../design/colors/colors';
import { white } from '../../design/colors/shades';
import { onSelected } from '../../design/utils';
import { FormattedProfileData } from '../../pages/profile/helpers';

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
/**
 * Tabs withIcons.
 */
export const TabsWithIcons: FC<FormattedProfileData> = ({
	favourites,
	mates,
	seenIts,
	toWatch,
	user,
}) => {
	const { pronouns, username, userSince } = user;
	return (
		<>
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
							{userSince && (
								<Text key={userSince} size="small">
									user since: {userSince}
								</Text>
							)}
						</Box>
					</StyledTab>
					<StyledTab icon={<Group />}>
						<Box margin="small">
							{mates.map((item) => {
								return (
									<Text key={item.username} size="small">
										{item.username}
									</Text>
								);
							})}
						</Box>
					</StyledTab>
					<StyledTab icon={<Favorite />}>
						<Box margin="small">
							{favourites.map((item) => {
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
		</>
	);
};
