import { Heading, InfiniteScroll } from 'grommet';
import { FC, useEffect, useState } from 'react';
import { Navigation } from '@/components/common/Navigation';
import { PageLayout } from '@/components/common/PageLayout';
import { Section } from '@/components/common/Section';
import { Grid } from '@/design/components/layout/Grid';
import { getUpcomingFliks } from '../apiHelpers/fliks/upcomingFliks';
import { UpcomingFlikCard } from '../components/cards/UpcomingFlik';
import { UpcomingFlik, UpcomingFliks, UpcomingFliksResponse } from '../types/fliks/fliks';

/**
 * Render Explore page.
 */
const Explore: FC = () => {
	const [page, setPage] = useState(1);
	const [items, setItems] = useState<UpcomingFliks | []>([]);
	// const [hasAdded, setHasAdded] = useState<boolean>();

	const onSuccess = (response: UpcomingFliksResponse) => {
		console.log('response', response);
		const fliks = response.upcomingFliks;
		if (fliks) {
			setPage(page + 1);
			const expandedList = [...fliks, ...items];
			setItems(expandedList);
		}
	};

	// useEffect(() => {
	// 	const idsOnList = profileInfo?.toWatch.Watchs.map((item) => parseInt(item.id)) || [];
	// 	console.log('idsOnList', idsOnList);
	// 	const hasSeenFlik = idsOnList.indexOf(id) !== -1;
	// 	console.log('hasSeenFlik', hasSeenFlik);
	// 	if (!hasSeenFlik) {
	// 		console.log('has not seen ans settinfs');
	// 		setHasAdded(true);
	// 	}
	// }, [profileInfo]);

	useEffect(() => {
		if (!items.length) {
			console.log('got to get fliks');
			getUpcomingFliks({
				handleFail: (res) => console.log(res),
				onSuccess,
				values: { page: 1 },
			});
		}
	}, []);

	const fetchMore = () => {
		console.log('on more firing');
		const nextPage = page + 1;
		getUpcomingFliks({
			handleFail: (res) => console.log(res),
			onSuccess,
			values: { page: nextPage },
		});
	};

	return (
		<PageLayout>
			<Navigation />
			<Section>
				<Heading level={3}>Upcoming Fliks</Heading>
				<Grid columns={4} gap={24}>
					<InfiniteScroll items={items} onMore={fetchMore}>
						{(item: UpcomingFlik) => <UpcomingFlikCard {...item} />}
					</InfiniteScroll>
				</Grid>
				{/* // search
              // filters
             //paginated all movies */}
			</Section>
		</PageLayout>
	);
};
export default Explore;
