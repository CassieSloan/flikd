import { Spinner } from 'grommet';
import { Close } from 'grommet-icons';
import { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@/components/common/buttons/base/Button';
import { ButtonWithModal } from '@/components/common/buttons/base/ButtonWithModal';
import { UnstyledButton } from '@/design/components/buttons/base';
import { ButtonTheme } from '@/design/components/buttons/styles';
import Pencil from '@/images/icons/pencil.svg';
import { updateProfile } from '../../../apiHelpers/auth/updateProfile';
import { Profile } from '../../../context/context';
import { Flex } from '../../../design/components/layout/Flex';
import { UserInfo } from '../../../types/auth/users';
import { setSessionItem } from '../../../utils/base';

/**
 * Update pronouns form.
 */
export const UpdatePronouns: FC = () => {
	const { authToken, profileInfo, setProfileInfo } = useContext(Profile);
	const [open, setOpen] = useState<boolean>(false);
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

	const onSubmit = (pronouns: string) => {
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

	const OptionsContainer = styled(Flex)`
		padding: 12px;
	`;

	const label = loading ? <Spinner /> : profileInfo?.data.pronouns || 'None set';
	const themeMap: ButtonTheme[] = ['primary', 'secondary', 'tertiary'];

	return (
		<ButtonWithModal
			type="button"
			setOpen={(open: boolean) => setOpen(open)}
			open={open}
			icon={<Pencil />}
			shape="filled"
			theme="primary"
			modalContent={
				<OptionsContainer gap={24}>
					{options.map((pronoun, index) => (
						<Button key={pronoun} onClick={() => onSubmit(pronoun)} theme={themeMap[index]}>
							{pronoun}
						</Button>
					))}
					<UnstyledButton onClick={() => setOpen(false)}>
						<Close />
					</UnstyledButton>
				</OptionsContainer>
			}
		>
			{label}
		</ButtonWithModal>
	);
};
