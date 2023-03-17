import { Navigation } from '@/components/common/Navigation';
import { PageLayout } from '@/components/common/PageLayout';
import { Section } from '@/components/common/Section';
import { Form } from '@/components/forms/Form';
import { Flex } from '@/design/fonts/components/Flex';

const seo = {
  title: 'Filkd',
  description: " What're you looking at, punk?",
};

/**
 * Homepage component.
 */
const Home = () => {
  return (
    <PageLayout seo={seo}>
      <Section>
        <Navigation />
        <Flex direction='column' gap={40} justify="center" align='center'>
          <h1>Welp. This was an excellent use of $2.34</h1>
          <h3>😎</h3>
          <h5>Sign in, bitches (this does nothing rn)</h5>
          <Form/>

        </Flex>
      </Section>
    </PageLayout>
  );
};

export default Home;
