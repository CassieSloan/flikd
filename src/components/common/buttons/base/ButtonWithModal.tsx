import React, { FC, ReactNode } from 'react';
import { Modal, ModalProps } from '@/components/grommety-things/Modal';
import { Button, ButtonProps } from './Button';

type ButtonWithModalProps = { modalContent: ReactNode } & ButtonProps & ModalProps;
/**
 * Render Component component.
 */
export const ButtonWithModal: FC<ButtonWithModalProps> = ({
	children,
	icon,
	modalContent,
	open,
	setOpen,
	shape,
	theme,
	...buttonProps
}) => {
	return (
		<>
			<Button
				type={buttonProps.type}
				onClick={() => setOpen(true)}
				icon={icon}
				shape={shape}
				theme={theme}
			>
				{children}
			</Button>
			<Modal open={open} setOpen={(open) => setOpen(open)}>
				{modalContent}
			</Modal>
		</>
	);
};
