import { FC } from "react";
import Link from "./Link";
import { Section } from "./Section";

const headerNavLinks = [
  { text: "Home", link: "/" },
  { text: "My lists", link: "/my-films" },
];

/**
 * Render Navigation Navigation.
 */
export const Navigation: FC = () => {
  return (
    <Section>
      {headerNavLinks.map((navItem) => {
        const { text, link } = navItem;
        return (
          <Link key={text} to={link}>
            {text}
          </Link>
        );
      })}
    </Section>
  );
};
