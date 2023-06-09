import { Favorite, Inspect, View } from 'grommet-icons';
import { FC, PropsWithChildren, useContext } from 'react';
import { Profile } from '@/context/context';
import * as colors from '@/design/colors/colors';
import { UnstyledButton } from '@/design/components/buttons/base';
import { FlikList } from '@/types/fliks/fliks';
import { addFlikToList } from 'apiHelpers/fliks/addFlikToList';

type AddToListButton = { id: number; type: FlikList } & PropsWithChildren;
/**
 * Render Component component.
 */
export const AddToListButton: FC<AddToListButton> = ({ id, type }) => {
	const { authToken: token, profileInfo, setProfileInfo } = useContext(Profile);

	const formattedId = id.toString();
	const onSuccess = (res: { fliks: any }) => {
		console.log('res', res);
		const fliksInList = res.fliks;
		if (fliksInList && profileInfo) {
			const clonedProfile = profileInfo;
			type === 'favourites' && (clonedProfile.favourites.favourites = fliksInList);
			type === 'watchList' && (clonedProfile.toWatch.Watchs = fliksInList);
			type === 'seenIts' && (clonedProfile.seenIts.SeenItFlik = fliksInList);
			console.log('clonedProfile', clonedProfile);
			console.log('profileInfo', profileInfo);
			setProfileInfo(clonedProfile);
		}
	};

	const onClick = (e: { preventDefault: () => void }) => {
		console.log('cliked');
		e.preventDefault();
		if (token) {
			addFlikToList({
				handleFail: (err) => console.log('err', err),
				onSuccess,
				token,
				values: { id, listType: type, mediaType: 'movie' },
			});
		}
	};

	return (
		<UnstyledButton id={formattedId} onClick={onClick}>
			{type === 'favourites' && <Favorite color={colors.tertiary500} />}
			{type === 'seenIts' && <Inspect color={colors.secondary500} />}
			{type === 'watchList' && <View color={colors.primary500} />}
		</UnstyledButton>
	);
};
