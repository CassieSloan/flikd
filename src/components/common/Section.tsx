import { FC } from "react";
import styled from "styled-components";
import { PropsWithChildren } from "@/types/helpers";

type SectionProps = {
  noWrapper?: boolean;
} & PropsWithChildren;

const Container = styled.section`
  padding: 64px 0;
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

/**
 * Render Section Section.
 */
export const Section: FC<SectionProps> = ({ noWrapper, children }) => {
  return <Container>{!noWrapper && <Wrapper>{children}</Wrapper>}</Container>;
};
