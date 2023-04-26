import { Grommet, InfiniteScroll } from 'grommet';
import { ChapterNext, ChapterPrevious } from 'grommet-icons';
import { FC, useEffect, useState } from 'react';
import { getDiscoverFliks } from '@/apiHelpers/fliks/discoverFliks';
import { searchFliks } from '@/apiHelpers/fliks/searchFliks';
import { FlikCard } from '@/components/cards/Flik';
import { Navigation } from '@/components/common/Navigation';
import { PageLayout } from '@/components/common/PageLayout';
import { Section } from '@/components/common/Section';
import { FlikdCarousel } from '@/components/explore/FlikCarousel/FlikCarousel';
import { FlikFilter } from '@/components/explore/FlikCarousel/FlikFilter';
import { Search } from '@/components/search/FlikSearch';
import { Grid } from '@/design/components/layout/Grid';
import { Heading3 } from '@/design/typography/typography';
import {
	DiscoverItems,
	SearchedFlik,
	SearchedFliks,
	SearchFliksResponse,
} from '../types/fliks/fliks';

/**
 * Render Explore page.
 */
const Explore: FC = () => {
	const [page, setPage] = useState(1);
	const [searchResults, setSearchResults] = useState<SearchedFliks | undefined>();
	const [items, setItems] = useState<DiscoverItems>();
	const [searchTerm, setSearchTerm] = useState<string | undefined>();
	console.log('searchResults', searchResults);

	const onMoreSuccess = ({ searchResults: newResults }: SearchFliksResponse) => {
		const updatedResults = searchResults ? [...searchResults, ...newResults] : newResults;
		setSearchResults(updatedResults);
		setPage(page + 1);
	};

	const handleSearch = (searchTerm?: string) => {
		setSearchTerm(searchTerm);
		searchFliks({
			handleFail: (err) => console.log('err', err),
			onSuccess: (res: SearchFliksResponse) => setSearchResults(res.searchResults),
			values: { page: 1, searchTerm },
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

	const onSuccess = (response: any) => {
		if (!items) {
			setItems({
				nowPlaying: response.playingNow.upcomingFliks,
				trending: response.trending.trendingFliks,
				upcoming: response.upcomingFliks.upcomingFliks,
			});
		}
	};

	const handleFail = (res: any) => console.log(res);

	useEffect(() => {
		getDiscoverFliks({
			handleFail,
			onSuccess,
			values: { mediaType: null },
		});
		console.log('re-render')
	}, []);

	return (
		<PageLayout>
			<Navigation />
			<Search handleSearch={handleSearch} />
			<FlikFilter searchResults={searchResults} />
			<Section>
				<Grid columns={5} gap={16}>
					<InfiniteScroll items={searchResults} onMore={onMore}>
						{(item: SearchedFlik) => <FlikCard imageUrl={item.mainImage} />}
					</InfiniteScroll>
				</Grid>
				{!searchTerm && (
					<Grommet
						theme={{ carousel: { icons: { next: ChapterNext, previous: ChapterPrevious } } }}
					>
						<Heading3>Upcoming Fliks</Heading3>
						<FlikdCarousel items={items?.upcoming || []} />
						<Heading3>Out now</Heading3>
						<FlikdCarousel items={items?.nowPlaying || []} />
						<Heading3>Trending Fliks</Heading3>
						<FlikdCarousel items={items?.trending || []} />
					</Grommet>
				)}
			</Section>
		</PageLayout>
	);
};

export default Explore;
