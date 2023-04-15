import { Image } from 'grommet';
import { FC } from 'react';
import styled from 'styled-components';
import { Flik } from '../../types/fliks/fliks';

const Poster = styled(Image)`
	border-radius: 8px;
	width: 100%;
`;

type UpcomingFlikProps = Partial<Flik>;
/**
 * Render Component component.
 */
export const FlikCard: FC<UpcomingFlikProps> = ({ imageUrl }) => {
	return <Poster src={imageUrl} />;
};
