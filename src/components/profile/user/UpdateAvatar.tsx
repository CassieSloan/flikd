import { Button, DropButton, Spinner } from 'grommet';
import { Close, Edit } from 'grommet-icons';
import { FC, SyntheticEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { Grid } from '@/design/components/layout/Grid';
import { updateProfile } from '../../../apiHelpers/auth/updateProfile';
import { Profile } from '../../../context/context';
import { tertiary500 } from '../../../design/colors/colors';
import { UserInfo } from '../../../types/auth/users';
import { setSessionItem } from '../../../utils/base';
import { Avatar } from '../../grommety-things/Avatar';

const CloseButton = styled(Button)``;

/**
 * Update Avatar form.
 */
export const UpdateAvatar: FC = () => {
	const { authToken, profileInfo, setProfileInfo } = useContext(Profile);
	const [open, setOpen] = useState<boolean>();
	const [loading, setLoading] = useState<boolean>();

	const onSuccess = (userInfo: UserInfo) => {
		console.log('userInfo on success');
		if (userInfo.profilePhoto && profileInfo) {
			const clonedProfile = profileInfo;
			clonedProfile.data.profilePhoto = userInfo.profilePhoto;
			setProfileInfo(clonedProfile);
			setSessionItem('profileInfo', JSON.stringify(clonedProfile));
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
	const Option = styled(Button)`
		display: inline;
	`;

	const OptionsContainer = styled(Grid)`
		padding: 12px;
	`;

	const label = loading ? (
		<Spinner />
	) : (
		<Avatar avatar={profileInfo?.data.profilePhoto as Avatar} /> || <Avatar />
	);

	return (
		<DropButton
			label={label}
			dropAlign={{ left: 'left', top: 'top' }}
			onClick={() => setOpen(true)}
			open={open}
			icon={<Edit color={tertiary500} />}
			dropContent={
				<OptionsContainer gap={24} columns={5}>
					{options.map((profilePhoto) => (
						<Option key={profilePhoto} onClick={(e) => onSubmit(e, profilePhoto)}>
							<Avatar avatar={profilePhoto as Avatar} />
						</Option>
					))}
					<CloseButton icon={<Close color={tertiary500} onClick={() => setOpen(false)} />} />
				</OptionsContainer>
			}
		/>
	);
};
