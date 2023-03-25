import { default as NextLink } from 'next/link';
import { FC, PropsWithChildren } from 'react';

export type LinkProps = {
	to: string;
	className?: string;
} & PropsWithChildren;

/**
 * Render link component.
 */
const Link: FC<LinkProps> = ({ children, className, to }) => {
	return (
		<NextLink className={className} href={to}>
			{children}
		</NextLink>
	);
};
export default Link;
