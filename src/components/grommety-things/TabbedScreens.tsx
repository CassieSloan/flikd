import { Tab, Tabs } from 'grommet';
import { FC, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { primary300, primary700 } from '../../design/colors/colors';
import { onSelected } from '../../design/utils';

// TODO: tidy
const StyledTab = styled(Tab)`
	padding: 24px;
	span {
		color: ${primary300};
	}
	svg {
		stroke: ${primary300};
	}
	${onSelected(css`
		stroke: ${primary700};
		svg {
			stroke: ${primary700};
		}
		span {
			color: ${primary700};
			font-weight: 500;
		}
	`)}

	* {
		margin: 0;
		border: none;
	}
`;

type TabScreen = { icon?: JSX.Element; label?: string; children: ReactNode };
type TabbedScreensProps = { tabs: TabScreen[] };
/**
 * Tabs withIcons.
 */
export const TabbedScreens: FC<TabbedScreensProps> = ({ tabs }) => {
	return (
		<Tabs>
			{tabs.map((tab) => {
				const { children, icon, label } = tab;
				if (!children) return null;
				return (
					<StyledTab icon={icon} title={label} key={label}>
						{children}
					</StyledTab>
				);
			})}
		</Tabs>
	);
};
