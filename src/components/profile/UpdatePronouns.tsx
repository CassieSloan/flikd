import { Button, DropButton, Spinner } from 'grommet';
import { Close, Edit } from 'grommet-icons';
import { FC, SyntheticEvent, useContext, useState } from 'react';
import styled from 'styled-components';
import { updateProfile } from '../../apiHelpers/auth/updateProfile';
import { Profile } from '../../context/context';
import { tertiary500 } from '../../design/colors/colors';
import { Flex } from '../../design/components/Flex';
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
		background: ${tertiary500};
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
			icon={<Edit color={tertiary500} />}
			dropContent={
				<OptionsContainer gap={24}>
					{options.map((pronoun) => (
						<Option key={pronoun} onClick={(e) => onSubmit(e, pronoun)}>
							{pronoun}
						</Option>
					))}
					<CloseButton icon={<Close color={tertiary500} onClick={() => setOpen(false)} />} />
				</OptionsContainer>
			}
		/>
	);
};
