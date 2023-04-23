import { Cards } from 'grommet/components';
import { FC, useContext } from 'react';
import { FlikCard } from '@/components/cards/Flik';
import { Profile } from '@/context/context';
import { Heading4 } from '@/design/typography/typography';
import { FlikList } from '@/types/fliks/fliks';

type FlikdListProps = { listType: FlikList };
/**
 * Render Component component.
 */
export const FlikdList: FC<FlikdListProps> = ({ listType }) => {
	const { profileInfo } = useContext(Profile);
	// const [toWatch, setToWatch] = useState<Fliks | undefined>();
	// const [favourites, setFavourites] = useState<Fliks | undefined>();
	// const [seenIts, setSeenIts] = useState<Fliks | undefined>();
	// console.log('seenIts', seenIts);
	// const noLocalState = !!(!toWatch && !favourites && !seenIts);

	// useEffect(() => {
	// 	if (profileInfo && noLocalState) {
	// 		setToWatch(profileInfo?.toWatch.Watchs);
	// 		setFavourites(profileInfo?.favourites.favourites);
	// 		setSeenIts(profileInfo?.seenIts.SeenItFlik);
	// 	}
	// }, []);

	const listToRender = {
		favourites: profileInfo?.favourites.favourites,
		seenIts: profileInfo?.seenIts.SeenItFlik,
		watchList: profileInfo?.toWatch.Watchs,
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
