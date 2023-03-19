import styled from 'styled-components';
import { Navigation } from '../components/common/Navigation';
import { PageLayout } from '../components/common/PageLayout';
import { Section } from '../components/common/Section';
import { LoginForm } from '../components/forms/login/LoginForm';
import { Flex } from '../design/fonts/components/Flex';

const seo = {
  description: " What're you looking at, punk?",
  title: 'Filkd',
};

const Heading1 = styled.h1`
  font-size: 32px;
  margin: 0;
`
const Heading3 = styled.h3`
  font-size: 24px;
  margin: 0;
`
const Heading4 = styled.h4`
  font-size: 20px;
  margin: 0;
`

/**
 * Login Screen.
 */
const Login = () => {
  return (
    <PageLayout seo={seo}>
      <Section>
        <Navigation />
        <Flex direction='column' gap={16} justify="center" align='center'>
          <Heading1>Welp. This was an excellent use of $2.34</Heading1>
          <Heading3>😎</Heading3>
          <Heading4>Sign in, bitches (this does nothing rn)</Heading4>
          <LoginForm />
        </Flex>
      </Section>
    </PageLayout>
  );
};

export default Login;
