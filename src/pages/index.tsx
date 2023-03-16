import { Navigation } from "@/components/common/Navigation";
import { PageLayout } from "@/components/common/PageLayout";
import { Section } from "@/components/common/Section";

const seo = {
  title: "Filkd",
  description: " What're you looking atob, punk?",
};
/**
 * Homepage component.
 */
const Home = () => {
  return (
    <PageLayout seo={seo}>
      <Section>
        <Navigation />
        <h1>hello</h1>
      </Section>
    </PageLayout>
  );
};

export default Home;
