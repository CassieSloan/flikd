import { Collapsible, Image } from 'grommet';
import { Link } from 'grommet-icons';
import moment from 'moment';
import { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { tertiary300, tertiary500 } from '../../design/colors/colors';
import { Flex } from '../../design/components/Flex';
import { StrippedButton } from '../../design/components/StrippedButton';
import { BodyMMedium, BodyMRegular } from '../../design/typography/styles/body';
import { LabelAltMedium } from '../../design/typography/typography';
import Calendar from '../../images/icons/calendar.svg';

// import Info from '../../images/icons/
import { UpcomingFlik as UpcomingFlikResponse } from '../../types/fliks/fliks';

const Poster = styled(Image)`
	border-radius: 8px;
	width: 100%;
`;

const InfoContainer = styled(StrippedButton)`
	border: ${tertiary300} 2px solid;
	border-radius: 8px;
	padding: 0 16px;
`;

const CollapseContainer = styled(Collapsible)`
	transition: all 0.3s ease;
`;

const ButtonText = styled(LabelAltMedium)`
	color: ${tertiary500};
`;

type UpcomingFlikProps = Partial<UpcomingFlikResponse>;

const FlikDetail: FC<{ property: string; value: ReactNode }> = ({ property, value }) => {
	return (
		<Flex justify="space-between">
			<BodyMMedium>{property}</BodyMMedium>
			<BodyMRegular>{value}</BodyMRegular>
		</Flex>
	);
};

const CollapsableContent: FC<UpcomingFlikProps & { open: boolean }> = ({
	genres,
	open,
	releaseDate,
	synopsis,
	title,
	trailer,
}) => {
	return (
		<CollapseContainer open={open}>
			<FlikDetail property="Title" value={title} />
			<FlikDetail property="Release date" value={releaseDate} />
			<FlikDetail property="Genres" value={genres} />
			<FlikDetail property="Synopsis" value={synopsis} />
			{trailer && <FlikDetail property="Trailor" value={<Link to={trailer}>View</Link>} />}
		</CollapseContainer>
	);
};
/**
 * Render Component component.
 */
export const UpcomingFlikCard: FC<UpcomingFlikProps> = ({
	mainImage,
	releaseDate,
	...otherProps
}) => {
	const [open, setOpen] = useState(false);
	console.log('open', open);
	const toggleCollapse = () => {
		setOpen(!open);
	};

	return (
		<Flex direction="column" gap={8}>
			<Poster src={mainImage} />
			<InfoContainer type="button" onClick={toggleCollapse}>
				<Flex gap={8} align="center">
					<Calendar />
					<ButtonText>{moment(releaseDate).format('MMMM DD')}</ButtonText>
				</Flex>
				<CollapsableContent {...otherProps} open={open} />
			</InfoContainer>
		</Flex>
	);
};
