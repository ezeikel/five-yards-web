import { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuContext from "../contexts/menu";

const Wrapper = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  background-color: var(--color-black);
  color: var(--color-white);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  width: 100%;
  text-align: center;
  ul {
    font-size: 25px;
    text-align: left;
    + ul {
      padding-top: var(--spacing-medium);
    }
    li + li {
      margin-top: var(--spacing-large);
    }
    &:not(:last-of-type) {
      border-bottom: 1px solid #585858;
      padding-bottom: var(--spacing-medium);
    }
    svg {
      margin-right: var(--spacing-medium);
    }
  }
  a,
  a:link,
  a:visited,
  a:active {
    color: var(--color-white);
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid #585858;
  padding: var(--spacing-medium);
`;

const Body = styled.div`
  padding: var(--spacing-large);
`;

const MobileMenu = () => {
  const { active, toggle } = useContext(MenuContext);

  return (
    <Wrapper active={active}>
      <Header>
        <FontAwesomeIcon
          icon={["fal", "times-circle"]}
          color="var(--color-white)"
          size="3x"
          onClick={toggle}
        />
      </Header>
      <Body>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Partner with us</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/">
              <a>Terms and conditions</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Privacy</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Cookies</a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>Site map</a>
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={["fal", "user"]}
              color="var(--color-white)"
              size="lg"
              onClick={toggle}
            />
            <Link href="/">
              <a>Customer login</a>
            </Link>
          </li>
          <li>
            <FontAwesomeIcon
              icon={["fal", "briefcase"]}
              color="var(--color-white)"
              size="lg"
              onClick={toggle}
            />
            <Link href="/">
              <a>Vendor login</a>
            </Link>
          </li>
        </ul>
      </Body>
    </Wrapper>
  );
};

export default MobileMenu;
