import { useState } from 'react';
import styled from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { Section } from '../components/common/Section';
import { LoginForm } from '../components/forms/auth/LoginForm';
import { RegistrationForm } from '../components/forms/auth/RegistrationForm';
import { white } from '../design/colors/shades';
import { Flex } from '../design/components/Flex';
import { StrippedButton } from '../design/components/StrippedButton';
import { Heading4 } from '../design/typography/typography';
import FilmHeart from '../images/icons/filmHeart.svg';

const RegisterButton = styled(StrippedButton)`
	font-weight: 400;
`;

const seo = {
	description: 'Your movie hole',
	title: 'Flikd',
};

/**
 * Login Screen.
 */
const Login = () => {
	const [registerTrue, setRegisterTrue] = useState(false);

	// add cusotm page doc

	return (
		<PageLayout seo={seo}>
			<Section>
				<Flex direction="column" gap={16} justify="center" align="center">
					<FilmHeart height={48} fill={white} />
					{registerTrue ? <RegistrationForm /> : <LoginForm />}
					<Heading4>
						Dont have an account?
						<RegisterButton onClick={() => setRegisterTrue(true)}>
							Create one
						</RegisterButton>
					</Heading4>
				</Flex>
			</Section>
		</PageLayout>
	);
};

export default Login;
