import { Button, DropButton, Spinner, Text } from 'grommet';
import { Close, Trash } from 'grommet-icons';
import Router from 'next/router';
import { FC, SyntheticEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { deleteProfile } from '../../../apiHelpers/auth/deleteProfile';
import { Profile } from '../../../context/context';
import { tertiary500 } from '../../../design/colors/colors';
import { Flex } from '../../../design/components/Flex';

const CloseButton = styled(Button)``;

/**
 * Update pronouns form.
 */
export const DeleteAccount: FC = () => {
	const { authToken, setAuthToken, setProfileInfo } = useContext(Profile);
	const [open, setOpen] = useState<boolean>();
	const [loading, setLoading] = useState<boolean>();

	const onSuccess = () => {
		setAuthToken(undefined);
		setProfileInfo(undefined);
		Router.push('/');
	};

	const onSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		setOpen(false);
		setLoading(true);
		if (authToken) {
			deleteProfile({
				handleFail: (err) => console.log('err', err),
				onSuccess,
				token: authToken,
			});
		}
	};

	const Option = styled(Button)`
		padding: 12px;
		color: white;
		background: ${tertiary500};
		border-radius: 32px;
		display: inline;
		max-width: fit-content;
	`;

	const OptionsContainer = styled(Flex)`
		padding: 12px;
		max-width: 300px;
	`;

	const label = loading ? <Spinner /> : 'Delete account';

	return (
		<DropButton
			label={label}
			dropAlign={{ left: 'left', top: 'top' }}
			onClick={() => setOpen(true)}
			open={open}
			icon={<Trash color={tertiary500} />}
			dropContent={
				<OptionsContainer gap={24} direction="column">
					<Flex>
						<Text>Are you sure you want to delete your account? This action is irreversable</Text>
						<CloseButton icon={<Close color={tertiary500} onClick={() => setOpen(false)} />} />
					</Flex>
					<Option primary onClick={(e) => onSubmit(e)}>
						Yes
					</Option>
				</OptionsContainer>
			}
		/>
	);
};
