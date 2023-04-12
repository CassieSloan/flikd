import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { PageLayout } from '../components/common/PageLayout';
import { Section } from '../components/common/Section';
import { AuthForm } from '../components/forms/auth/AuthForm';
import { animatedBlockBackground } from '../design/backgrounds/backgrounds';
import { Flex } from '../design/components/Flex';
import { StrippedButton } from '../design/components/StrippedButton';
import { Heading4 } from '../design/typography/typography';
import Logo from '../images/icons/Logo.svg';

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

const SubHeading = styled(Heading4)`
	margin: 0;
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
					<Flex direction="column" gap={24} justify="center" align="center">
						<Logo height={56} />
						<AuthForm isLoggingIn={isLoggingIn} />
						<SubHeading>
							{isLoggingIn ? 'Dont have an account?' : 'Already have an account?'}
							<RegisterButton onClick={() => setIsLogginIn(!isLoggingIn)}>
								{isLoggingIn ? 'Create one' : 'Login'}
							</RegisterButton>
						</SubHeading>
					</Flex>
				</Section>
			</>
		</PageLayout>
	);
};

export default Login;
