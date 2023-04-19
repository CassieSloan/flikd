import React, { FC, useContext } from 'react';
import styled from 'styled-components';
import { Panel } from '@/components/common/Panel';
import { Avatar } from '@/components/grommety-things/Avatar';
import { Profile } from '@/context/context';
import { Flex } from '@/design/components/layout/Flex';
import { Heading4, LabelAltMedium, LabelAltSmall } from '@/design/typography/typography';
import { grid } from '@/design/utils';
import { formatDate } from 'utils/formatDate';

// type ProfileInfoProps = {
// 	propName: propType;
// };

const Container = styled(Panel)`
	max-width: 800px;
	margin: 0 auto;
	${grid({ align: 'center', columns: 2 })}
`;

/**
 * Render ProfileInfo ProfileInfo.
 */
export const ProfileInfo: FC<{}> = () => {
	const { profileInfo, profileRef } = useContext(Profile);
	console.log('profileRef', profileRef);

	return (
		<Container padding="32px" background="whiteSolid">
			<Flex gap={8}>
				<Avatar avatar={profileInfo?.profilePhoto} />
				<div>
					<Flex gap={8} align="center">
						<Heading4>{profileInfo?.username}</Heading4>
						<LabelAltMedium color="grey500">{profileInfo?.pronouns}</LabelAltMedium>
					</Flex>
					<LabelAltSmall color="grey700">
						user since: {formatDate(profileInfo?.userSince)}
					</LabelAltSmall>
				</div>
			</Flex>
			<Flex gap={16}>
				<LabelAltMedium>To watch: {profileRef?.toWatch.count}</LabelAltMedium>
				<LabelAltMedium>Favourites: {profileRef?.favourites.count}</LabelAltMedium>
				<LabelAltMedium>Seen: {profileRef?.seenIt.count}</LabelAltMedium>
				<LabelAltMedium>Mates: {profileRef?.mates.count}</LabelAltMedium>
			</Flex>
		</Container>
	);
};
