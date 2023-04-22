import { Cards } from 'grommet/components';
import { FC, useContext, useEffect, useState } from 'react';
import { FlikCard } from '@/components/cards/Flik.tsx';
import { Profile } from '@/context/context';
import { Heading4 } from '@/design/typography/typography';
import { FlikList, Fliks } from '@/types/fliks/fliks';

type FlikdListProps = { listType: FlikList };
/**
 * Render Component component.
 */
export const FlikdList: FC<FlikdListProps> = ({ listType }) => {
	const { profileInfo } = useContext(Profile);
	const [toWatch, setToWatch] = useState<Fliks | undefined>();
	const [favourites, setFavourites] = useState<Fliks | undefined>();
	const [seenIts, setSeenIts] = useState<Fliks | undefined>();
	const noLocalState = !!(!toWatch && !favourites && !seenIts);

	useEffect(() => {
		if (profileInfo && noLocalState) {
			setToWatch(profileInfo?.toWatch.Watchs);
			setFavourites(profileInfo?.favourites.favourites);
			setSeenIts(profileInfo?.seenIts.seenIts);
		}
	}, []);

	const listToRender = {
		favourites,
		seenIt: seenIts,
		watchList: toWatch,
	};

	const activeList = listToRender[listType];

	return (
		<>
			<Cards data={activeList} pad="medium">
				{(movie) => <FlikCard {...movie} />}
			</Cards>
			{!activeList && <Heading4>No Fliks</Heading4>}
		</>
	);
};
