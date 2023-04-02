import { Avatar as GrommetAvatar } from 'grommet';
import { User } from 'grommet-icons';
import { FC } from 'react';
import { tertiary80 } from '../../design/colors/colors';
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

export type Avatar = keyof typeof avatars;
type AvatarProps = { avatar?: Avatar };

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
/**
 * Render Component component.
 */
export const Avatar: FC<AvatarProps> = ({ avatar }) => {
	return (
		<>
			{avatar ? (
				<GrommetAvatar src={require(`${avatars[avatar]}`)} />
			) : (
				<GrommetAvatar background={tertiary80}>
					<User color="text-strong" />
				</GrommetAvatar>
			)}
		</>
	);
};
