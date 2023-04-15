import { Card, CardBody, Heading } from 'grommet';
import { Cards } from 'grommet/components';
import { FC, useContext, useEffect, useState } from 'react';
import { Profile } from '@/context/context';
import { Flex } from '@/design/components/Flex';
import { Fliks } from '@/types/fliks/fliks';
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
			<Flex gap={8}>
				<Button theme="tertiary">filled</Button>
				<Button theme="secondary">filled</Button>
				<Button theme="primary">filled</Button>
				<Button disabled>filled</Button>
			</Flex>
			<Flex gap={8}>
				<Button theme="tertiary" shape="outlined">
					outlined
				</Button>
				<Button theme="secondary" shape="outlined">
					outlined
				</Button>
				<Button theme="primary" shape="outlined">
					outlined
				</Button>
				<Button shape="outlined" disabled>
					disabled
				</Button>
			</Flex>
			<Flex gap={8}>
				<Button theme="tertiary" shape="text">
					text
				</Button>
				<Button theme="secondary" shape="text">
					text
				</Button>
				<Button theme="primary" shape="text">
					text
				</Button>
				<Button shape="text" disabled>
					disabled
				</Button>
			</Flex>
		</Section>
	);
};
