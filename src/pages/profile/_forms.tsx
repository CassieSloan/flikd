import { Button, DropButton, Spinner } from 'grommet';
import { Close, Edit } from 'grommet-icons';
import { FC, SyntheticEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { updateProfile } from '../../apiHelpers/auth/updateProfile';
import { Avatar } from '../../components/library/Avatar';
import { Profile } from '../../context/context';
import { tertiary80 } from '../../design/colors/colors';
import { Flex } from '../../design/components/Flex';
import { Grid } from '../../design/components/Grid';
import { UserInfo } from '../../types/auth/users';
import { setSessionItem } from '../../utils/base';

const CloseButton = styled(Button)``;
/**
 * Update pronouns form.
 */
export const UpdatePronouns: FC = () => {
	const { authToken, profileInfo, setProfileInfo } = useContext(Profile);
	const [open, setOpen] = useState<boolean>();
	console.log('open', open);
	const [loading, setLoading] = useState<boolean>();

	const onSuccess = (userInfo: UserInfo) => {
		if (userInfo.pronouns && profileInfo) {
			const clonedProfile = profileInfo;
			clonedProfile.data.pronouns = userInfo.pronouns;
			setProfileInfo(clonedProfile);
			setSessionItem('profileInfo', JSON.stringify(clonedProfile));
			setLoading(false);
		}
	};

	const onSubmit = (e: SyntheticEvent, pronouns: string) => {
		e.preventDefault();
		setOpen(false);
		setLoading(true);
		console.log('pronouns from button', pronouns);
		if (authToken) {
			console.log('update profile req');
			updateProfile({
				handleFail: (err) => console.log('err', err),
				onSuccess,
				token: authToken,
				values: { pronouns },
			});
		}
	};

	const options = ['She/Her', 'He/Him', 'They/Them'];

	const Option = styled(Button)`
		padding: 12px;
		color: white;
		background: ${tertiary80};
		border-radius: 32px;
		display: inline;
		max-width: fit-content;
	`;

	const OptionsContainer = styled(Flex)`
		padding: 12px;
	`;

	const label = loading ? <Spinner /> : profileInfo?.data.pronouns || 'None set';

	return (
		<DropButton
			label={label}
			dropAlign={{ left: 'left', top: 'top' }}
			onClick={() => setOpen(true)}
			open={open}
			icon={<Edit color={tertiary80} />}
			dropContent={
				<OptionsContainer gap={24}>
					{options.map((pronoun) => (
						<Option key={pronoun} onClick={(e) => onSubmit(e, pronoun)}>
							{pronoun}
						</Option>
					))}
					<CloseButton icon={<Close color={tertiary80} onClick={() => setOpen(false)} />} />
				</OptionsContainer>
			}
		/>
	);
};

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
			icon={<Edit color={tertiary80} />}
			dropContent={
				<OptionsContainer gap={24} columns={5}>
					{options.map((profilePhoto) => (
						<Option key={profilePhoto} onClick={(e) => onSubmit(e, profilePhoto)}>
							<Avatar avatar={profilePhoto as Avatar} />
						</Option>
					))}
					<CloseButton icon={<Close color={tertiary80} onClick={() => setOpen(false)} />} />
				</OptionsContainer>
			}
		/>
	);
};
