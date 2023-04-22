import { Image } from 'grommet';
import moment from 'moment';
import { FC, ReactNode, useState } from 'react';
import styled from 'styled-components';
import { UnstyledButton } from '@/design/components/buttons/base';
import { Flex } from '@/design/components/layout/Flex';
import { Grid } from '@/design/components/layout/Grid';
import { BodyMMedium, BodyMRegular } from '@/design/typography/styles/body';
import { flex } from '@/design/utils';
import { ButtonLink } from 'components/common/buttons/base/ButtonLink';
import { Modal } from 'components/grommety-things/Modal';
import { UpcomingFlik as UpcomingFlikResponse } from '../../types/fliks/fliks';
import { AddToListButton } from '../common/buttons/userActions/AddToListButton';
import { Panel } from '../common/Panel';

const Poster = styled(Image)`
	border-radius: 8px;
	width: 100%;
`;

const FlikDetail: FC<{ property: string; value: ReactNode }> = ({ property, value }) => {
	return (
		<Flex direction="column">
			<BodyMMedium>{property}</BodyMMedium>
			<BodyMRegular>{value}</BodyMRegular>
		</Flex>
	);
};

const InfoContainer = styled(Flex)`
	overflow-y: scroll;
`;

type UpcomingFlikProps = Partial<UpcomingFlikResponse>;
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
			{id && (
				<FlikDetail
					property="Add to watch list"
					value={<AddToListButton id={id} type="watchList" />}
				/>
			)}
		</InfoContainer>
	);
};

const ActionBarContainer = styled(Panel)`
	${flex({ gap: 16 })};
	max-width: 150px;
`;

const ActionBar: FC<{ id: number; className?: string }> = ({ className, id }) => (
	<ActionBarContainer
		padding="16px"
		borderRadius="32px"
		background="whiteSolid"
		className={className}
	>
		<AddToListButton type="watchList" id={id} />
		<AddToListButton type="seenIts" id={id} />
		<AddToListButton type="favourites" id={id} />
	</ActionBarContainer>
);

const StyledActionBar = styled(ActionBar);
const Container = styled(Flex)`
	min-width: 200px;
	position: relative;
	${flex({ align: 'center', justify: 'center' })}
	${StyledActionBar} {
		position: absolute;
		opacity: 1;
		transform: translateY(-52%);
	}
	&:hover {
		${StyledActionBar} {
			opacity: 1;
			transform: translateY(-50%);
		}
	}
`;
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
			<ActionBar id={otherProps?.id} />
		</Container>
	);
};
