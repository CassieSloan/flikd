import { Button, DropButton, Spinner } from 'grommet';
import { Close, Edit } from 'grommet-icons';
import { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { updateProfile } from '../../apiHelpers/auth/updateProfile';
import { Profile } from '../../context/context';
import { tertiary80 } from '../../design/colors/colors';
import { Flex } from '../../design/components/Flex';
import { UserInfo } from '../../types/auth/users';
import { setSessionItem } from '../../utils/base';

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

	const onSubmit = (e) => {
		e.preventDefault();
		setOpen(false);
		setLoading(true);
		const pronouns = e.target.value;
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
	const keyDownHandler = (event) => {
		console.log('User pressed: ', event.key);

		if (event.key === 'Esc') {
			event.preventDefault();
			setOpen(false);
		}
	};

	return (
		<DropButton
			label={label}
			dropAlign={{ right: 'right' }}
			onClick={() => setOpen(true)}
			open={open}
			icon={<Edit color={tertiary80} />}
			dropContent={
				<>
					<OptionsContainer gap={24}>
						{options.map((text, index) => (
							<Option key={text} value={text} onClick={(e) => onSubmit(e)}>
								{text}
							</Option>
						))}
						<Option icon={<Close color="#ffffff" onClick={() => setOpen(false)} />} />
					</OptionsContainer>
				</>
			}
		/>
	);
};
