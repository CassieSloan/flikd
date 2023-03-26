import { Box, Tab, Tabs } from 'grommet';
import { Favorite, Inspect, User, View } from 'grommet-icons';
import styled, { css } from 'styled-components';
import { tertiary80 } from '../../design/colors/colors';
import { white } from '../../design/colors/shades';
import { onSelected } from '../../design/utils';

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
export const TabsWithIcons = () => (
	<Box align="center" pad="medium">
		<Tabs>
			<StyledTab icon={<User />}>
				<Box margin="small"></Box>
			</StyledTab>
			<StyledTab icon={<Favorite />}>
				<Box margin="small"></Box>
			</StyledTab>
			<StyledTab icon={<View />}>
				<Box margin="small"></Box>
			</StyledTab>
			<StyledTab icon={<Inspect />}>
				<Box margin="small"></Box>
			</StyledTab>
		</Tabs>
	</Box>
);

TabsWithIcons.storyName = 'Tabs with icons';
