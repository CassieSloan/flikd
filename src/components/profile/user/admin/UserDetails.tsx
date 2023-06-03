import moment from 'moment';
import { FC } from 'react';
import styled from 'styled-components';
import { Panel } from '@/components/common/Panel';
import { white } from '@/design/colors/shades';
import { Flex } from '@/design/components/layout/Flex';
import { BodyMRegular } from '@/design/typography/styles/body';
import { Heading4 } from '@/design/typography/typography';
import { GetProfileResponse } from '../../../../types/auth/users';
import { DeleteAccount } from './DeleteAccount';
import { UpdateAvatar } from './UpdateAvatar';
import { UpdatePronouns } from './UpdatePronouns';

type UserDetailOptions = Pick<
	GetProfileResponse['data'],
	'userSince' | 'username' | 'pronouns' | 'profilePhoto'
>;
type UserDetailsProps = Partial<UserDetailOptions>;

const Container = styled(Panel)`
	padding: 24px;
	* {
		color: ${white};
	}
`;

const Row = styled(Flex).attrs({ justify: 'space-between' })``;

/**
 * UserDetails.
 */
export const UserDetails: FC<UserDetailsProps> = ({ username, userSince }) => {
	const formattedUserSince = moment(userSince).format('D MMMM YYYY');
	return (
		<Container>
			<Flex gap={16} direction="column">
				<Row>
					<Heading4>Profile</Heading4>
					<DeleteAccount />
				</Row>
				<Row>
					<Heading4>Avatar</Heading4>
					<UpdateAvatar />
				</Row>
				<Row>
					<Heading4>Username</Heading4>
					<BodyMRegular>{username}</BodyMRegular>
				</Row>
				<Row>
					<Heading4>Pronouns</Heading4>
					<UpdatePronouns />
				</Row>
				<Row>
					<Heading4>User since</Heading4>
					<BodyMRegular>{formattedUserSince}</BodyMRegular>
				</Row>
				<Row>
					<Heading4>Verified</Heading4>
					<BodyMRegular>add verify screen</BodyMRegular>
				</Row>
			</Flex>
		</Container>
	);
};
