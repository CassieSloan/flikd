import { FC } from 'react';
import styled from 'styled-components';
import { PropsWithChildren } from '@/types/helpers';

type SectionProps = {
  noWrapper?: boolean;
  padding?: number;
} & PropsWithChildren;

const Container = styled.section<{ padding?: number }>`
  ${({ padding }) => (padding ? `padding: ${padding}px 0` : 'padding: 64px 0')}
`;

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 24px;
`;

/**
 * Render Section Section.
 */
export const Section: FC<SectionProps> = ({ noWrapper, children, padding }) => {
  console.log('padding', padding);
  return (
    <Container padding={padding}>
      {!noWrapper && <Wrapper>{children}</Wrapper>}
    </Container>
  );
};
