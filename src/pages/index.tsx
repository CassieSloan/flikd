import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Section } from '../components/common/Section';
import { LoginForm } from '../components/forms/auth/LoginForm';
import { RegistrationForm } from '../components/forms/auth/RegistrationForm';
import { animatedBlockBackground } from '../design/backgrounds/backgrounds';
import { white } from '../design/colors/shades';
import { Flex } from '../design/components/Flex';
import { StrippedButton } from '../design/components/StrippedButton';
import { FontFamily, Heading4 } from '../design/typography/typography';
import FilmHeart from '../images/icons/filmHeart.svg';

const seo = {
	description: " What're you looking at, punk?",
	title: 'Filkd',
};

const GlobalStyle = createGlobalStyle`
  ${FontFamily}
  body {
    ${animatedBlockBackground()}
  }
`;

const RegisterButton = styled(StrippedButton)`
	font-weight: 400;
`;

/**
 * Login Screen.
 */
const Login = () => {
	const [registerTrue, setRegisterTrue] = useState(false);

	return (
		// <PageLayout seo={seo}>
		<>
			<GlobalStyle />
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
		</>
		// </PageLayout>
	);
};

export default Login;
