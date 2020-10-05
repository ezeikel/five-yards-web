import { useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MenuContext from "../contexts/menu";
import { useState } from "react";

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
  border-bottom: 1px solid var(--color-dark-grey);
  padding: var(--spacing-medium);
`;

const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-large);

  > ul {
    font-size: 25px;
    text-align: left;
    &:last-of-type {
      flex: 1 0 auto;
      display: flex;
      flex-direction: column;
      > li {
        &:first-of-type {
          flex: 1 0 auto;
        }
        /* &:last-of-type {
          padding-top: var(--spacing-medium);
          border-top: 1px solid var(--color-dark-grey);
        } */
      }
    }
    + ul {
      padding-top: var(--spacing-medium);
    }
    li {
      > span {
        display: flex;
        justify-content: space-between;
        &.active {
          svg {
            transform: rotate(180deg);
          }
        }
      }
      + li {
        margin-top: var(--spacing-large);
      }
    }
    &:not(:last-of-type) {
      border-bottom: 1px solid var(--color-dark-grey);
      padding-bottom: var(--spacing-medium);
    }
    ul {
      margin-top: var(--spacing-medium);
      li {
        font-size: 16px;
        + li {
          margin-top: var(--spacing-medium);
        }
      }
    }
    svg {
      margin-right: var(--spacing-medium);
    }
  }
`;

const MobileMenu = () => {
  const { active, toggle } = useContext(MenuContext);
  const [childListIsOpen, setChildListIsOpen] = useState(false);

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
            <span
              className={childListIsOpen ? "active" : null}
              onClick={() => setChildListIsOpen(!childListIsOpen)}
            >
              Partner with us
              <FontAwesomeIcon
                icon={["fal", "angle-down"]}
                color="var(--color-primary)"
                size="lg"
              />
            </span>
            {childListIsOpen && (
              <ul>
                <li>
                  <Link href="/">
                    <a>Tailor</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Fabric seller</a>
                  </Link>
                </li>
              </ul>
            )}
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
            />
            <Link href="/sign-in">
              <a>Sign in</a>
            </Link>
          </li>
          {/* <li>
            <FontAwesomeIcon
              icon={["fal", "briefcase"]}
              color="var(--color-white)"
              size="lg"
            />
            <Link href="/">
              <a>Vendor login</a>
            </Link>
          </li> */}
        </ul>
      </Body>
    </Wrapper>
  );
};

export default MobileMenu;
