import { default as NextLink } from "next/link";
import { FC, PropsWithChildren } from "react";

type LinkProps = {
  to: string;
} & PropsWithChildren;

/**
 * Render link component.
 */
const Link: FC<LinkProps> = ({ to, children }) => {
  return <NextLink href={to}>{children}</NextLink>;
};
export default Link;
