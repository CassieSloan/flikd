import { Carousel, Grommet, Heading } from 'grommet';
import { ChapterNext, ChapterPrevious } from 'grommet-icons';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTrendingFliks } from '@/apiHelpers/fliks/trendingFliks';
import { Navigation } from '@/components/common/Navigation';
import { PageLayout } from '@/components/common/PageLayout';
import { Section } from '@/components/common/Section';
import { Flex } from '@/design/components/layout/Flex';
import { getUpcomingFliks } from '../apiHelpers/fliks/upcomingFliks';
import { UpcomingFlikCard } from '../components/cards/UpcomingFlik';
import { UpcomingFliks, UpcomingFliksResponse } from '../types/fliks/fliks';

/**
 * Render Explore page.
 */
const Explore: FC = () => {
	const [page, setPage] = useState(1);
	const [upcomingFliks, setUpcomingFliks] = useState<any>();
	const [trendingFliks, setTrendingFliks] = useState<any>();
	const [outNowFliks, setOutNowFliks] = useState<any>();
	// const [hasAdded, setHasAdded] = useState<boolean>();
	console.log('outNowFliks', outNowFliks);
	console.log('trendingFliks', trendingFliks);
	console.log('upcomingFliks', upcomingFliks);
	const onUpcomingSuccess = (response: UpcomingFliksResponse) => {
		const fliks = response.upcomingFliks;
		if (fliks) {
			setPage(page + 1);
			const expandedList = [...fliks, ...upcomingFliks];
			setUpcomingFliks(expandedList);
		}
	};

	const onTrendingSuccess = (response: any) => {
		const fliks = response.popularFliks;
		if (fliks) {
			setTrendingFliks(fliks);
		}
	};

	const outNowOnSuccess = (response: UpcomingFliksResponse) => {
		const fliks = response.upcomingFliks;
		if (fliks) {
			setOutNowFliks(fliks);
		}
	};

	useEffect(() => {
		if (!upcomingFliks?.length) {
			getUpcomingFliks({
				handleFail: (res) => console.log(res),
				onSuccess: onUpcomingSuccess,
				values: { page: 1 },
			});
		}
		if (!trendingFliks?.length) {
			getTrendingFliks({
				handleFail: (res) => console.log(res),
				onSuccess: onTrendingSuccess,
				values: { mediaType: null },
			});
		}
		if (!outNowFliks?.length) {
			getUpcomingFliks({
				handleFail: (res) => console.log(res),
				onSuccess: outNowOnSuccess,
				values: { onToday: true, page: 1 },
			});
		}
	}, []);

	// const fetchMore = () => {
	// 	console.log('on more firing');
	// 	const nextPage = page + 1;
	// 	getUpcomingFliks({
	// 		handleFail: (res) => console.log(res),
	// 		onSuccess: onUpcomingSuccess,
	// 		values: { page: nextPage },
	// 	});
	// };

	const FullWidthCarousel = styled(Carousel)`
		width: 100%;
	`;

	const UpcomingView: FC<{ items: UpcomingFliks }> = ({ items }) => {
		return (
			<Flex gap={24}>
				{items?.map((item) => (
					<UpcomingFlikCard {...item} key={item.title} />
				))}
			</Flex>
		);
	};

	return (
		<PageLayout>
			<Navigation />
			<Section>
				<Heading level={3}>Upcoming Fliks</Heading>
				<Grommet theme={{ carousel: { icons: { next: ChapterNext, previous: ChapterPrevious } } }}>
					{upcomingFliks && (
						<FullWidthCarousel controls="arrows">
							<UpcomingView items={upcomingFliks} />;
						</FullWidthCarousel>
					)}
					<Heading level={3}>Trending Fliks</Heading>
					{trendingFliks && (
						<FullWidthCarousel controls="arrows">
							<UpcomingView items={trendingFliks} />;
						</FullWidthCarousel>
					)}
					<Heading level={3}>Out this week</Heading>
					{outNowFliks && (
						<FullWidthCarousel controls="arrows">
							<UpcomingView items={outNowFliks} />;
						</FullWidthCarousel>
					)}
				</Grommet>
				{/* <InfiniteScroll items={items} onMore={fetchMore}>
					</InfiniteScroll> */}
				{/* // search
              // filters
             //paginated all movies */}
			</Section>
		</PageLayout>
	);
};
export default Explore;
