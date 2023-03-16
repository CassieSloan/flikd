import styled from "styled-components";
import { Navigation } from "@/components/common/Navigation";
import { PageLayout } from "@/components/common/PageLayout";
import { Section } from "@/components/common/Section";

const seo = {
  title: "Filkd",
  description: " What're you looking atob, punk?",
};

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
/**
 * Homepage component.
 */
const Home = () => {
  return (
    <PageLayout seo={seo}>
      <Section>
        <Navigation />
        <CenteredContainer>
          <h1>Welp. This was an excellent use of $2.34</h1>
          <h3>😎</h3>
        </CenteredContainer>
      </Section>
    </PageLayout>
  );
};

export default Home;
