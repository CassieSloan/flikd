import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { Section } from '../components/common/Section';
import { AuthForm } from '../components/forms/auth/AuthForm';
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
	const [isLoggingIn, setIsLogginIn] = useState(true);
	console.log('isLoggingIn', isLoggingIn);
	return (
		<PageLayout seo={seo}>
			<>
				<BackgroundStyle />
				<Section>
					<Flex direction="column" gap={16} justify="center" align="center">
						<FilmHeart height={48} fill={white} width={48} />
						<AuthForm isLoggingIn={isLoggingIn} />
						<Heading4>
							{isLoggingIn ? 'Dont have an account?' : 'Already have an account?'}
							<RegisterButton onClick={() => setIsLogginIn(!isLoggingIn)}>
								{isLoggingIn ? 'Login' : 'Create one'}
							</RegisterButton>
						</Heading4>
					</Flex>
				</Section>
			</>
		</PageLayout>
	);
};

export default Login;
