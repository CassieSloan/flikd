import { Button, DropButton, Spinner } from 'grommet';
import { Close, Edit } from 'grommet-icons';
import { FC, useContext, useState } from 'react';
import styled from 'styled-components';
import { AvatarType } from '@/components/grommety-things/Avatar';
import { Grid } from '@/design/components/layout/Grid';
import { addMate } from '../../../apiHelpers/mates/addMate';
import { Profile } from '../../../context/context';
import { tertiary500 } from '../../../design/colors/colors';
import Form from '../../forms/base/Form';

const CloseButton = styled(Button)``;

/**
 * Update Mates form.
 */
export const AddMate: FC = () => {
	const { authToken, profileInfo, setProfileInfo } = useContext(Profile);
	const [open, setOpen] = useState<boolean>();
	const [loading, setLoading] = useState<boolean>();

	const onSuccess = (userInfo: { profilePhoto: AvatarType }) => {
		if (userInfo.profilePhoto && profileInfo) {
			const clonedProfile = profileInfo;
			clonedProfile.profilePhoto = userInfo.profilePhoto;
			setProfileInfo(clonedProfile);
			setLoading(false);
		}
	};

	const onSubmit = (mateReq: { mateUsername: string }) => {
		setOpen(false);
		setLoading(true);
		const username = mateReq.mateUsername;
		console.log('username', username);
		if (authToken) {
			addMate({
				handleFail: (err) => console.log('err', err),
				onSuccess,
				token: authToken,
				username,
			});
		}
	};

	const OptionsContainer = styled(Grid)`
		padding: 12px;
	`;

	const label = loading ? <Spinner /> : 'Add mate';

	return (
		<DropButton
			label={label}
			dropAlign={{ left: 'left', top: 'top' }}
			onClick={() => setOpen(true)}
			open={open}
			icon={<Edit color={tertiary500} />}
			dropContent={
				<OptionsContainer gap={24} columns={5}>
					<Form
						onSubmit={(values: { mateUsername: string }) => onSubmit(values)}
						fields={[
							{
								label: 'Mate username',
								name: 'mateUsername',
								placeholder: 'Bilbo',
								type: 'text',
								validation: { required: true },
							},
						]}
						submitButton="Add mate"
					/>
					<CloseButton icon={<Close color={tertiary500} onClick={() => setOpen(false)} />} />
				</OptionsContainer>
			}
		/>
	);
};
