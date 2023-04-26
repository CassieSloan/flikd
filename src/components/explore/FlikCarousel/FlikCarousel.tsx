import { Carousel } from 'grommet';
import React, { FC } from 'react';
import styled from 'styled-components';
import { UpcomingFlikCard } from '@/components/cards/UpcomingFlik';
import { Flex } from '@/design/components/layout/Flex';
import { UpcomingFlik, UpcomingFliks } from '@/types/fliks/fliks';

type FlikdCarouselProps = {
	items: UpcomingFlik[];
};

const FullWidthCarousel = styled(Carousel)`
	width: 100%;
`;

const UpcomingView: FC<{ items: UpcomingFliks }> = ({ items }) => {
	return (
		<Flex gap={24}>
			{items.length && items.map((item) => <UpcomingFlikCard {...item} key={item.title} />)}
		</Flex>
	);
};

/**
 * Render FlikdCarousel FlikdCarousel.
 */
export const FlikdCarousel: FC<FlikdCarouselProps> = ({ items }) => {
	if (!items) return null;
	return (
		<FullWidthCarousel controls="arrows">
			<UpcomingView items={items} />;
		</FullWidthCarousel>
	);
};
