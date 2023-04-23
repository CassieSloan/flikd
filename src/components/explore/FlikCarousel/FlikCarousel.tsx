import { Carousel } from 'grommet';
import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getTrendingFliks } from '@/apiHelpers/fliks/trendingFliks';
import { getUpcomingFliks } from '@/apiHelpers/fliks/upcomingFliks';
import { UpcomingFlikCard } from '@/components/cards/UpcomingFlik';
import { Flex } from '@/design/components/layout/Flex';
import { UpcomingFliks } from '@/types/fliks/fliks';

type FlikdCarouselProps = {
	type: 'upcoming' | 'trending' | 'out-now';
};

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

/**
 * Render FlikdCarousel FlikdCarousel.
 */
export const FlikdCarousel: FC<FlikdCarouselProps> = ({ type }) => {
	const [items, setItems] = useState<UpcomingFliks>();
	const [page, setPage] = useState(1);
	console.log('items', items);

	const updateList = (results: UpcomingFliks) => {
		console.log('results after success', results);
		const expandedList = items ? [...items, ...results] : results;
		console.log('expandedList', expandedList);
		setItems(expandedList);
		setPage(page + 1);
	};

	const onSuccess = (response: any) => {
		console.log('on success');
		if (type === 'upcoming' || type === 'out-now') updateList(response.upcomingFliks);
		if (type === 'trending') updateList(response.trendingFliks);
	};

	const handleFail = (res: any) => console.log(res);

	useEffect(() => {
		if (!items?.length) {
			if (type === 'upcoming') {
				getUpcomingFliks({
					handleFail,
					onSuccess,
					values: { page: 1 },
				});
			}
			if (type === 'trending') {
				console.log('gets to trending if');
				getTrendingFliks({
					handleFail,
					onSuccess,
					values: { mediaType: null },
				});
			}
			if (type === 'out-now') {
				getUpcomingFliks({
					handleFail,
					onSuccess,
					values: { onToday: true, page: 1 },
				});
			}
		}
	}, []);

	if (!items) return null;
	return (
		<FullWidthCarousel controls="arrows">
			<UpcomingView items={items} />;
		</FullWidthCarousel>
	);
};
