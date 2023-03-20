import { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Section } from '../components/common/Section';
import { LoginForm } from '../components/forms/auth/LoginForm';
import { RegistrationForm } from '../components/forms/auth/RegistrationForm';
import { dynamicBlockBackground } from '../design/fonts/animations';
import { Flex } from '../design/fonts/components/Flex';
import { StrippedButton } from '../design/fonts/components/StrippedButton';
import { FontFamily, Heading4 } from '../design/fonts/typography';

const seo = {
  description: " What're you looking at, punk?",
  title: 'Filkd',
}

const GlobalStyle = createGlobalStyle`
  ${FontFamily}
  body {
    ${dynamicBlockBackground()}
  }
`

const RegisterButton = styled(StrippedButton)`
  font-weight: 400;
`

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
        <Flex direction='column' gap={16} justify="center" align='center'>
          {registerTrue ?
            <RegistrationForm />
            :
            <LoginForm />
          }
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
