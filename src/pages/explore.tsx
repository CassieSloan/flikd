import { Carousel, InfiniteScroll } from 'grommet';
import { FC, useState } from 'react';
import styled from 'styled-components';
import { searchFliks } from '@/apiHelpers/fliks/searchFliks';
import { FlikCard } from '@/components/cards/Flik';
import { Navigation } from '@/components/common/Navigation';
import { PageLayout } from '@/components/common/PageLayout';
import { Section } from '@/components/common/Section';
import { Search } from '@/components/search/FlikSearch';
import { Flex } from '@/design/components/layout/Flex';
import { Grid } from '@/design/components/layout/Grid';
import { UpcomingFlikCard } from '../components/cards/UpcomingFlik';
import {
	SearchedFlik,
	SearchedFliks,
	SearchFliksResponse,
	UpcomingFliks,
} from '../types/fliks/fliks';

/**
 * Render Explore page.
 */
const Explore: FC = () => {
	const [page, setPage] = useState(1);
	const [upcomingFliks, setUpcomingFliks] = useState<any>();
	const [trendingFliks, setTrendingFliks] = useState<any>();
	const [outNowFliks, setOutNowFliks] = useState<any>();
	const [searchResults, setSearchResults] = useState<SearchedFliks | undefined>();
	const [searchTerm, setSearchTerm] = useState<string | undefined>();
	// const [hasAdded, setHasAdded] = useState<boolean>();
	console.log('searchResults', searchResults);

	// const onUpcomingSuccess = (response: UpcomingFliksResponse) => {
	// 	console.log('upcoming response on explore', response);
	// 	const fliks = response.upcomingFliks;
	// 	console.log('fliks', fliks);
	// 	if (fliks) {
	// 		setPage(page + 1);
	// 		const expandedList = [...fliks, ...upcomingFliks];
	// 		setUpcomingFliks(expandedList);
	// 	}
	// };

	// const onTrendingSuccess = (response: any) => {
	// 	const fliks = response.popularFliks;
	// 	if (fliks) {
	// 		setTrendingFliks(fliks);
	// 	}
	// };

	// const outNowOnSuccess = (response: UpcomingFliksResponse) => {
	// 	const fliks = response.upcomingFliks;
	// 	if (fliks) {
	// 		setOutNowFliks(fliks);
	// 	}
	// };

	// useEffect(() => {
	// 	if (!upcomingFliks?.length) {
	// 		getUpcomingFliks({
	// 			handleFail: (res) => console.log(res),
	// 			onSuccess: onUpcomingSuccess,
	// 			values: { page: 1 },
	// 		});
	// 	}
	// 	if (!trendingFliks?.length) {
	// 		getTrendingFliks({
	// 			handleFail: (res) => console.log(res),
	// 			onSuccess: onTrendingSuccess,
	// 			values: { mediaType: null },
	// 		});
	// 	}
	// 	if (!outNowFliks?.length) {
	// 		getUpcomingFliks({
	// 			handleFail: (res) => console.log(res),
	// 			onSuccess: outNowOnSuccess,
	// 			values: { onToday: true, page: 1 },
	// 		});
	// 	}
	// }, []);
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

	const onMoreSuccess = ({ searchResults: newResults }: SearchFliksResponse) => {
		const updatedResults = searchResults ? [...searchResults, ...newResults] : newResults;
		console.log('newResults', newResults);
		console.log('old searchResults', searchResults);
		console.log('updatedResults', updatedResults);
		setSearchResults(updatedResults);
		setPage(page + 1);
	};

	const handleSearch = (searchTerm?: string) => {
		setSearchTerm(searchTerm);
		searchFliks({
			handleFail: (err) => console.log('err', err),
			onSuccess: (res: SearchFliksResponse) => setSearchResults(res.searchResults),
			values: { searchTerm },
		});
	};

	const onMore = () => {
		console.log('on more firing');
		searchFliks({
			handleFail: (res) => console.log(res),
			onSuccess: onMoreSuccess,
			values: { page: page + 1, searchTerm },
		});
	};

	return (
		<PageLayout>
			<Navigation />
			<Search handleSearch={handleSearch} />
			<Section>
				<Grid columns={5} gap={16}>
					<InfiniteScroll items={searchResults} onMore={onMore}>
						{(item: SearchedFlik) => <FlikCard imageUrl={item.mainImage} />}
					</InfiniteScroll>
				</Grid>
				{/* <Heading level={3}>Upcoming Fliks</Heading>
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
				</Grommet> */}
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
