import { useContext, useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { MenuContext } from "../contexts/menu";
import CloseButton from "./CloseButton";
import MenuItems from "./MenuItems";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";

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

  > ul,
  > div > ul {
    font-size: 25px;
    text-align: left;
    li {
      display: flex;
      align-items: center;
      + li {
        margin-top: var(--spacing-large);
      }
      > span {
        display: flex;
        justify-content: space-between;
      }
      svg {
        margin-right: var(--spacing-medium);
      }
    }
  }
`;

const MobileMenu = ({ openSignInModal }) => {
  const wrapperEl = useRef(null);
  const [active, toggle] = useContext(MenuContext);

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
    <Wrapper active={active} ref={wrapperEl}>
      <Header>
        <CloseButton
          color="var(--color-white)"
          circle
          handleClick={() => toggle(false)}
        />
      </Header>
      <Body>
        <MenuItems openSignInModal={openSignInModal} />
      </Body>
    </Wrapper>
  );
};

export default MobileMenu;
