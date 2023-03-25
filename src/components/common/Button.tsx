import { FC, MouseEventHandler, PropsWithChildren } from 'react';
import styled from 'styled-components';
import { primary40 } from '../../design/colors/colors';
import { StrippedButton } from '../../design/components/StrippedButton';

const StyledButton = styled(StrippedButton)`
	padding: 8px 12px;
	background: ${primary40};
	color: white;
`;

type ButtonProps = {
	onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
} & PropsWithChildren;
/**
 * Render Component component.
 */
export const Button: FC<ButtonProps> = ({ children, onClick }: ButtonProps) => {
	console.log('onClick', onClick);
	return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
