import { Avatar as GrommetAvatar } from 'grommet';
import { User } from 'grommet-icons';
import { FC } from 'react';
import styled from 'styled-components';
import { tertiary500 } from '../../design/colors/colors';
import bird from '../../images/avatars/bird.png';
import cat from '../../images/avatars/cat.png';
import dog from '../../images/avatars/dog.png';
import fish from '../../images/avatars/fish.png';
import flamingo from '../../images/avatars/flamingo.png';
import frog from '../../images/avatars/frog.png';
import meercat from '../../images/avatars/meercat.png';
import rabbit from '../../images/avatars/rabbit.png';
import tiger from '../../images/avatars/tiger.png';
import turtle from '../../images/avatars/turtle.png';
import Image from '../common/Image';

export type AvatarType = keyof typeof avatars;
type AvatarProps = { avatar?: AvatarType | null };

const avatars = {
	bird,
	cat,
	dog,
	fish,
	flamingo,
	frog,
	meercat,
	rabbit,
	tiger,
	turtle,
};

const CircleFrame = styled.div`
	aspect-ratio: 1/1;
	height: 48px;
	border-radius: 48px;
	position: relative;
	overflow: hidden;
	flex-shrink: 0;
`;
/**
 * Render Component component.
 */
export const Avatar: FC<AvatarProps> = ({ avatar }) => {
	return (
		<>
			{avatar ? (
				<CircleFrame>
					<Image src={avatars[avatar]} />
				</CircleFrame>
			) : (
				<GrommetAvatar background={tertiary500}>
					<User color="text-strong" />
				</GrommetAvatar>
			)}
		</>
	);
};
