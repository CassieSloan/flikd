import { Button, Spinner, Text } from 'grommet';
import { Close } from 'grommet-icons';
import Router from 'next/router';
import { FC, SyntheticEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { ButtonWithModal } from '@/components/common/buttons/base/ButtonWithModal';
import Trash from '@/images/icons/trashcan.svg';
import { deleteProfile } from '../../../apiHelpers/auth/deleteProfile';
import { Profile } from '../../../context/context';
import { tertiary500 } from '../../../design/colors/colors';
import { Flex } from '../../../design/components/layout/Flex';

const CloseButton = styled(Button)``;

/**
 * Update pronouns form.
 */
export const DeleteAccount: FC = () => {
	const { authToken, setAuthToken, setProfileInfo } = useContext(Profile);
	const [open, setOpen] = useState<boolean>(false);
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
		<ButtonWithModal
			type="button"
			setOpen={(open: boolean) => setOpen(open)}
			open={open}
			icon={<Trash />}
			shape="filled"
			theme="primary"
			modalContent={
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
		>
			{label}
		</ButtonWithModal>
	);
};
