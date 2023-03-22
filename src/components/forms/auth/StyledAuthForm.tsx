import styled from 'styled-components';
import { tertiary100 } from '../../../design/colors/colors';
import { offWhite, white } from '../../../design/colors/shades';
import { Heading4 } from '../../../design/typography/typography';
import Form from '../base/Form';
import { Label, TextInput } from '../base/FormComponents';

export const StyledAuthForm = styled(Form)`
	border-radius: 16px;
	padding: 24px;
	max-width: 400px;
	background: ${offWhite};
	${Label} {
		position: absolute;
		top: -10px;
		left: 12px;
		background: ${white};
		color: ${tertiary100};
		padding: 2px 5px;
	}
	${TextInput} {
		width: -webkit-fill-available;
	}
	${Heading4} {
		text-align: center;
	}
`;
