import { Box, Tab, Tabs } from 'grommet';
import { Favorite, Group, Inspect, User, View } from 'grommet-icons';
import { FC } from 'react';
import styled, { css } from 'styled-components';
import { tertiary500 } from '../../design/colors/colors';
import { white } from '../../design/colors/shades';
import { onSelected } from '../../design/utils';
import { FormattedProfileData } from '../../utils/profileHelpers';
import { MatesDetails } from '../profile/mates/MatesDetails';
import { UserDetails } from '../profile/user/UserDetails';
import { WatchList } from '../profile/watchList/WatchList';

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
					<WatchList />
				</StyledTab>
				<StyledTab icon={<Inspect />}>
					<WatchList />
				</StyledTab>
			</Tabs>
		</Box>
	);
};
