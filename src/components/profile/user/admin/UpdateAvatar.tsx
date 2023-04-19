import { Spinner } from 'grommet';
import { Close } from 'grommet-icons';
import { FC, SyntheticEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { ButtonWithModal } from '@/components/common/buttons/base/ButtonWithModal';
import { Profile } from '@/context/context';
import { UnstyledButton } from '@/design/components/buttons/base';
import { Flex } from '@/design/components/layout/Flex';
import { Grid } from '@/design/components/layout/Grid';
import Pencil from '@/images/icons/pencil.svg';
import { UserInfo } from '@/types/auth/users';
import { updateProfile } from '../../../../apiHelpers/auth/updateProfile';
import { Avatar } from '../../../grommety-things/Avatar';

/**
 * Update Avatar form.
 */
export const UpdateAvatar: FC = () => {
	const { authToken, profileInfo, setProfileInfo } = useContext(Profile);
	const [open, setOpen] = useState<boolean>(false);
	console.log('open', open);
	const [loading, setLoading] = useState<boolean>();

	const onSuccess = (userInfo: UserInfo) => {
		console.log('userInfo on success');
		if (userInfo.profilePhoto && profileInfo) {
			const clonedProfile = profileInfo;
			clonedProfile.profilePhoto = userInfo.profilePhoto;
			setProfileInfo(clonedProfile);
			setLoading(false);
		}
	};

	const onSubmit = (e: SyntheticEvent, profilePhoto: string) => {
		e.preventDefault();
		setOpen(false);
		setLoading(true);
		console.log('profilePhoto', profilePhoto);
		if (authToken) {
			updateProfile({
				handleFail: (err) => console.log('err', err),
				onSuccess,
				token: authToken,
				values: { profilePhoto },
			});
		}
	};

	const options = [
		'bird',
		'cat',
		'dog',
		'fish',
		'flamingo',
		'frog',
		'meercat',
		'rabbit',
		'tiger',
		'turtle',
	] as const;

	const Option = styled(UnstyledButton)`
		display: inline;
	`;

	const OptionsContainer = styled(Grid)`
		padding: 12px;
	`;

	return (
		<Flex gap={16}>
			{loading ? (
				<Spinner />
			) : (
				<Avatar avatar={profileInfo?.profilePhoto as Avatar} /> || <Avatar />
			)}
			<ButtonWithModal
				type="button"
				setOpen={(open: boolean) => setOpen(open)}
				open={open}
				icon={<Pencil />}
				shape="filled"
				theme="primary"
				modalContent={
					<OptionsContainer gap={24} columns={5}>
						{options.map((profilePhoto) => (
							<Option key={profilePhoto} onClick={(e) => onSubmit(e, profilePhoto)}>
								<Avatar avatar={profilePhoto as Avatar} />
							</Option>
						))}
						<UnstyledButton onClick={() => setOpen(false)}>
							<Close />
						</UnstyledButton>
					</OptionsContainer>
				}
			>
				Edit
			</ButtonWithModal>
		</Flex>
	);
};
