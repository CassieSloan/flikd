import { default as NextLink } from "next/link";
import { FC, PropsWithChildren } from "react";

type LinkProps = {
  to: string;
  className?: string;
} & PropsWithChildren;

/**
 * Render link component.
 */
const Link: FC<LinkProps> = ({ to, children, className }) => {
  return (
    <NextLink className={className} href={to}>
      {children}
    </NextLink>
  );
};
export default Link;
