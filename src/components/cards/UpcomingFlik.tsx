import { Image } from 'grommet';
import moment from 'moment';
import { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { UnstyledButton } from '@/design/components/buttons/base';
import { Flex } from '@/design/components/layout/Flex';
import { Grid } from '@/design/components/layout/Grid';
import { BodyMMedium, BodyMRegular } from '@/design/typography/styles/body';
import { ButtonLink } from 'components/common/buttons/base/ButtonLink';
import { Modal } from 'components/grommety-things/Modal';
import { UpcomingFlik as UpcomingFlikResponse } from '../../types/fliks/fliks';
import { ToWatchButton } from '../common/buttons/userActions/ToWatchButton';

const Poster = styled(Image)`
	border-radius: 8px;
	width: 100%;
`;

const InfoContainer = styled(Flex)`
	overflow-y: scroll;
`;
type UpcomingFlikProps = Partial<UpcomingFlikResponse>;

const FlikDetail: FC<{ property: string; value: ReactNode }> = ({ property, value }) => {
	return (
		<Flex direction="column">
			<BodyMMedium>{property}</BodyMMedium>
			<BodyMRegular>{value}</BodyMRegular>
		</Flex>
	);
};

const Container = styled(Flex)`
	min-width: 300px;
`;

const FlikInfo: FC<UpcomingFlikProps> = ({ genres, id, releaseDate, synopsis, title, trailer }) => {
	return (
		<InfoContainer direction="column">
			<FlikDetail property="Title" value={title} />
			<FlikDetail property="Release date" value={moment(releaseDate).format('MMMM DD')} />
			{genres?.length !== 0 && <FlikDetail property="Genres" value={genres} />}
			<FlikDetail property="Synopsis" value={synopsis} />
			{trailer && (
				<FlikDetail
					property="Trailor"
					value={
						<ButtonLink to={trailer} shape="outlined">
							Watch
						</ButtonLink>
					}
				/>
			)}
			{id && <FlikDetail property="Add to watch list" value={<ToWatchButton id={id} />} />}
		</InfoContainer>
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
		<Container direction="column" gap={8} flex="1">
			<UnstyledButton type="button" onClick={toggleCollapse}>
				<Poster src={mainImage} />
			</UnstyledButton>
			<Modal open={open} setOpen={(open) => setOpen(open)}>
				<Grid gap={16} columns={2}>
					<FlikInfo {...{ ...otherProps, releaseDate }} />
					<Poster src={mainImage} />
				</Grid>
			</Modal>
		</Container>
	);
};
