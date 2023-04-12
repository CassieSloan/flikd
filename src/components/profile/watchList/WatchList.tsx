import { Card, CardBody, Heading } from 'grommet';
import { Cards } from 'grommet/components';
import { FC, useContext, useEffect, useState } from 'react';
import { Profile } from '../../../context/context';
import { Fliks } from '../../../types/fliks/fliks';
import { Button } from '../../common/buttons/base';
import { Section } from '../../common/Section';

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
		// <Cards data={movies} pad="medium">
		// 	{(movie) => (
		// 		<Card key={movie.title} as="li">
		// 			<CardBody>
		// 				<Heading level={2} size="small" margin="none">
		// 					{movie.title}
		// 				</Heading>
		// 			</CardBody>
		// 		</Card>
		// 	)}
		// </Cards>
		<Section>
			<Button theme="tertiary">Hello</Button>
			<Button theme="secondary">Hello</Button>
			<Button theme="primary">Hello</Button>
			<Button theme="primary" disabled>
				Hello
			</Button>
			<Button theme="tertiary" shape="outline">
				Hello
			</Button>
			<Button theme="secondary" shape="filled">
				Hello
			</Button>
			<Button theme="primary" shape="text">
				Hello
			</Button>
		</Section>
	);
};
