import { Cards } from 'grommet/components';
import { FC, useContext, useEffect, useState } from 'react';
import { FlikCard } from '@/components/cards/Flik.tsx';
import { Profile } from '@/context/context';
import { Fliks } from '@/types/fliks/fliks';

/**
 * Render Component component.
 */
export const WatchList: FC = () => {
	const { profileInfo, setProfileInfo } = useContext(Profile);
	console.log('profileInfo in watchlist', profileInfo);
	const [moviesToWatch, setMoviesToWatch] = useState<Fliks | undefined>();
	console.log('moviesToWatch', moviesToWatch);
	// remove from list func

	useEffect(() => {
		if (profileInfo) {
			setMoviesToWatch(profileInfo?.data.toWatch.Watchs);
		}
	}, []);

	const movies = profileInfo?.data.toWatch.Watchs || moviesToWatch;

	return (
		<Cards data={movies} pad="medium">
			{(movie) => <FlikCard {...movie} />}
		</Cards>
	);
};
