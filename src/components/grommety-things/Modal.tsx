import { Layer } from 'grommet';
import React, { FC, PropsWithChildren, useState } from 'react';
import styled from 'styled-components';
import { white } from '@/design/colors/shades';
import { Panel } from 'components/common/Panel';

type ModalProps = { open: boolean; setOpen: (open: boolean) => void } & PropsWithChildren;

const ModalContainer = styled(Panel)`
	background-color: ${white};
`;
/**
 * Render Modal Modal.
 */
export const Modal: FC<ModalProps> = ({ children, open, setOpen }) => {
	return (
		<>
			{open && (
				<Layer onEsc={() => setOpen(false)} onClickOutside={() => setOpen(false)}>
					<ModalContainer borderRadius="24px" padding="24px">
						{children}
					</ModalContainer>
				</Layer>
			)}
		</>
	);
};
