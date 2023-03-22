import styled from 'styled-components';
import { glassBackground } from '../../../design/backgrounds/backgrounds';
import Form from '../base/Form';

export const StyledAuthForm = styled(Form)`
	border-radius: 16px;
	padding: 24px;
	max-width: 400px;
	${glassBackground()};
`;
