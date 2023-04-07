import { Box, Tab, Tabs } from 'grommet';
import { Favorite, Group, Inspect, User, View } from 'grommet-icons';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { tertiary500 } from '../../design/colors/colors';
import { white } from '../../design/colors/shades';
import { onSelected } from '../../design/utils';
import { FormattedProfileData } from '../../utils/profileHelpers';
import { MatesDetails } from '../profile/MatesDetails';
import { UserDetails } from '../profile/UserDetails';

const StyledTab = styled(Tab)`
	padding: 24px;
	svg {
		stroke: ${white};
	}
	${onSelected(css`
		svg {
			stroke: ${tertiary500};
		}
	`)}
	* {
		border: none;
	}
`;
/**
 * Tabs withIcons.
 */
export const TabsWithIcons: FC<FormattedProfileData> = ({ user }) => {
	return (
		<Box align="center" pad="medium">
			<Tabs>
				<StyledTab icon={<User />}>
					<UserDetails {...user} />
				</StyledTab>
				<StyledTab icon={<Group />}>
					<MatesDetails />
				</StyledTab>
				<StyledTab icon={<Favorite />}>
					<Box margin="small">
						{/* {favourites &&
							favourites.map((item) => {
								return (
									<Text key={item.title} size="small">
										item.title
									</Text>
								);
							})} */}
					</Box>
				</StyledTab>
				<StyledTab icon={<View />}>
					<Box margin="small"></Box>
				</StyledTab>
				<StyledTab icon={<Inspect />}>
					<Box margin="small">
						{/* {toWatch.map((item) => {
							return (
								<Text key={item.t} size="small">
									{item.title}
								</Text>
							);
						})} */}
					</Box>
				</StyledTab>
			</Tabs>
		</Box>
	);
};
