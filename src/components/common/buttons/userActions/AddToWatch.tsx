import { View } from 'grommet-icons';
import { FC, PropsWithChildren, useContext } from 'react';
import { Profile } from '@/context/context';
import * as colors from '@/design/colors/colors';
import { StrippedButton } from '@/design/components/buttons/base';
import { addFlikToList } from 'apiHelpers/fliks/addFlikToList';

type FlikActionButton = { id: number } & PropsWithChildren;
/**
 * Render Component component.
 */
export const ToWatchButton: FC<FlikActionButton> = ({ id }) => {
	console.log('id', id);
	const { authToken: token, profileInfo, setProfileInfo } = useContext(Profile);

	const formattedId = id.toString();
	const onSuccess = (res) => {
		console.log('res', res);
		const fliksToWatch = res.data;
		if (fliksToWatch && profileInfo) {
			const clonedProfile = profileInfo;
			clonedProfile.data.toWatch.Watchs = fliksToWatch;
			console.log('clonedProfile', clonedProfile);
			setProfileInfo(clonedProfile);
		}
	};

	const onClick = (e) => {
		e.preventDefault();
		if (token) {
			addFlikToList({
				handleFail: (err) => console.log('err', err),
				onSuccess,
				token,
				values: { id, listType: 'watchList', mediaType: 'movie' },
			});
		}
	};

	return (
		<StrippedButton id={formattedId} onClick={onClick}>
			<View color={colors.primary500} fill="transparent" />
		</StrippedButton>
	);
};