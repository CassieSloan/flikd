import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { Section } from '../components/common/Section';
import { LoginForm } from '../components/forms/auth/LoginForm';
import { RegistrationForm } from '../components/forms/auth/RegistrationForm';
import { animatedBlockBackground } from '../design/backgrounds/backgrounds';
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

const BackgroundStyle = createGlobalStyle`
	body {
		${animatedBlockBackground()};
	}
`;

/**
 * Login Screen.
 */
const Login = () => {
	const [requestedRegister, setRequestRegister] = useState(false);

	// add cusotm page doc

	return (
		<PageLayout seo={seo}>
			<>
				<BackgroundStyle />
				<Section>
					<Flex direction="column" gap={16} justify="center" align="center">
						<FilmHeart height={48} fill={white} width={48} />
						{requestedRegister ? <RegistrationForm /> : <LoginForm />}
						<Heading4>
							{requestedRegister
								? 'Already have an account?'
								: 'Dont have an account?'}
							<RegisterButton onClick={() => setRequestRegister(true)}>
								{requestedRegister ? 'Login' : 'Create one'}
							</RegisterButton>
						</Heading4>
					</Flex>
				</Section>
			</>
		</PageLayout>
	);
};

export default Login;
