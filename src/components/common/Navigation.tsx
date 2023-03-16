import { FC } from "react";
import styled from "styled-components";
import Link from "./Link";
import { Section } from "./Section";

const headerNavLinks = [
  { text: "Home", link: "/" },
  { text: "My Movies", link: "/my-movies" },
  { text: "Friends", link: "/friends" },
  { text: "Discover", link: "/expore" },
];

const NavLink = styled(Link)`
  padding: 16px;
`;

/**
 * Render Navigation Navigation.
 */
export const Navigation: FC = () => {
  return (
    <Section padding={24}>
      {headerNavLinks.map((navItem) => {
        const { text, link } = navItem;
        return (
          <NavLink key={text} to={link}>
            {text}
          </NavLink>
        );
      })}
    </Section>
  );
};
