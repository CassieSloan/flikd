import { Box, Button, Card, Heading, Image, InfiniteScroll, Paragraph, Text } from 'grommet';
import { Favorite, Inspect, View } from 'grommet-icons';
import moment from 'moment';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUpcomingFliks } from '../apiHelpers/fliks/upcomingFliks';
import { Navigation } from '../components/common/Navigation';
import { PageLayout } from '../components/common/PageLayout';
import { Section } from '../components/common/Section';
import { primary100, secondary100, tertiary100 } from '../design/colors/colors';
import { Flex } from '../design/components/Flex';
import { Grid } from '../design/components/Grid';
import { UpcomingFlik, UpcomingFliks, UpcomingFliksResponse } from '../types/fliks/fliks';

const FlikInfo = styled(Box)`
	padding: 16px;
`;

const FavouriteButton = () => <Button icon={<Favorite color={primary100} />} />;
const ToWatchButton = () => <Button icon={<View color={tertiary100} />} />;
const SeenItButton = () => <Button icon={<Inspect color={secondary100} />} />;
/**
 * Render Explore page.
 */
const Explore: FC = () => {
	const [page, setPage] = useState(1);
	const [items, setItems] = useState<UpcomingFliks | []>([]);
	console.log('page', page);
	console.log('items', items);

	const onSuccess = (response: UpcomingFliksResponse) => {
		console.log('response', response);
		const fliks = response.upcomingFliks;
		if (fliks) {
			setPage(page + 1);
			const expandedList = [...fliks, ...items];
			setItems(expandedList);
		}
	};

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
						{(item: UpcomingFlik) => (
							<Card>
								<Image fit="cover" src={item.mainImage} alt="feature image" />
								<FlikInfo>
									<Heading margin={{ top: '0' }} level={5}>
										{item.title}
									</Heading>
									<Text>Coming: {moment(item.releaseDate).format('DD MMMM YYYY')}</Text>
									<Paragraph maxLines={3}>{item.synopsis}</Paragraph>
									<Flex>
										<FavouriteButton />
										<ToWatchButton />
										<SeenItButton />
									</Flex>
								</FlikInfo>
							</Card>
						)}
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
