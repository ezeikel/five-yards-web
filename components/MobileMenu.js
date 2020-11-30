import { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { MenuContext } from "../contexts/menu";
import CloseButton from "./CloseButton";
import MenuItems from "./MenuItems";
import useUser from "../hooks/useUser";

const Wrapper = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  flex-direction: column;
  background-color: ${({ user }) =>
    user ? "var(--color-white)" : "var(--color-black)"};
  color: ${({ user }) => (user ? "var(--color-black)" : "var(--color-white)")};
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
    color: ${({ user }) =>
      user ? "var(--color-black)" : "var(--color-white)"};
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: flex-end;
  padding: var(--spacing-medium) var(--spacing-large);
`;

const Body = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: var(--spacing-large);

  ul {
    display: flex;
    flex-direction: column;
    height: 100%;
    font-size: 25px;
    li {
      display: flex;
      align-items: center;
      + li {
        margin-top: var(--spacing-large);
      }
      &:last-of-type {
        flex: 0 0 auto;
        border-top: 1px solid var(--color-dark-grey);
        padding-top: var(--spacing-medium);
        margin-top: auto;
      }
      svg {
        margin-right: var(--spacing-medium);
      }
      /* fixes css for nested list */
      ul li:last-of-type {
        border-top: none;
        padding-top: 0;
      }
    }
  }
`;

const MobileMenu = () => {
  const wrapperEl = useRef(null);
  const [active, toggle] = useContext(MenuContext);
  const { user } = useUser();

  useEffect(() => {
    if (active) {
      disableBodyScroll(wrapperEl.current);
    } else {
      enableBodyScroll(wrapperEl.current);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [active]);

  return (
    <Wrapper user={user} active={active} ref={wrapperEl}>
      <Header>
        <CloseButton
          color={user ? "var(--color-black)" : "var(--color-white)"}
          circle
          handleClick={() => toggle(false)}
        />
      </Header>
      <Body>
        <MenuItems />
      </Body>
    </Wrapper>
  );
};

export default MobileMenu;
