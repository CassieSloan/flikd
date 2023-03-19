import { useState } from 'react';
import { PageLayout } from '../components/common/PageLayout';
import { Section } from '../components/common/Section';
import { LoginForm } from '../components/forms/auth/LoginForm';
import { RegistrationForm } from '../components/forms/auth/RegistrationForm';
import { Flex } from '../design/fonts/components/Flex';
import { Heading4 } from '../design/fonts/typography';

const seo = {
  description: " What're you looking at, punk?",
  title: 'Filkd',
}

/**
 * Login Screen.
 */
const Login = () => {
  const [registerTrue, setRegisterTrue] = useState(false);

  return (
    <PageLayout seo={seo}>
      <Section>
        <Flex direction='column' gap={16} justify="center" align='center'>
          {registerTrue ?
            <RegistrationForm />
            :
            <LoginForm />
          }
        </Flex>
        <Heading4>
          Dont have an account?
          <button onClick={() => setRegisterTrue(true)}>
          Create one
          </button>
        </Heading4>
      </Section>
    </PageLayout>
  );
};

export default Login;
