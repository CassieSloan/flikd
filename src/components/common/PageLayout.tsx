import styled from 'styled-components';
import SEO, { SEOProps } from './SEO';
import { FontFamily } from '@/design/fonts/font';
import { PropsWithChildren } from '@/types/helpers';

type PageLayoutProps = {
  seo: SEOProps;
} & PropsWithChildren;

const Main = styled.main`
  ${FontFamily}
`;
/**
 * Homepage component.
 */
export const PageLayout = ({ seo, children }: PageLayoutProps) => {
  return (
    <>
      <SEO {...seo} />
      <Main>{children}</Main>
    </>
  );
};
