import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

type SectionProps = {
	noWrapper?: boolean;
	padding?: number;
} & PropsWithChildren;

const Container = styled.section<{ padding?: number }>`
	${({ padding }) => (padding === 0 || padding ? `padding: ${padding}px 0` : 'padding: 64px 0')}
`;

const Wrapper = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 24px;
`;

/**
 * Render Section Section.
 */
export const Section: FC<SectionProps> = ({ children, noWrapper, padding }) => {
	return <Container padding={padding}>{!noWrapper && <Wrapper>{children}</Wrapper>}</Container>;
};
