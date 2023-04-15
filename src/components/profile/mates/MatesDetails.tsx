import { Box, DataTable, Heading } from 'grommet';
import { FC, useContext } from 'react';
import { Profile } from '../../../context/context';
import { Flex } from '../../../design/components/layout/Flex';
import { Avatar } from '../../grommety-things/Avatar';
import { AddMate } from './UpdateMates';

/**
 * Mates Details.
 */
export const MatesDetails: FC = () => {
	const { profileInfo } = useContext(Profile);

	const mateData = profileInfo?.data.mates.Mates.map(({ profilePhoto, pronouns, username }) => ({
		profilePhoto: <Avatar avatar={profilePhoto as Avatar} />,
		pronouns: pronouns || 'No pronouns set',
		username,
	}));

	return (
		<Box margin="small">
			<Flex justify="space-between">
				<Heading level={3}>Mates</Heading>
				<AddMate />
			</Flex>
			<DataTable data={mateData} />
		</Box>
	);
};
