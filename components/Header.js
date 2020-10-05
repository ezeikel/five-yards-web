import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import LogoFull from "./LogoFull";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import MenuContext from "../contexts/menu";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-medium) var(--spacing-large);
`;

const LogoWrapper = styled.div`
  svg {
    width: 152px;
  }
`;

const Navigation = styled.nav`
  svg {
    width: 152px;
  }
  ul {
    display: flex;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border: 1px solid var(--color-grey);
      border-radius: 2px;
      + li {
        margin-left: var(--spacing-medium);
      }
    }
  }
`;

const Header = () => {
  const headerEl = useRef(null);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    if (mobileMenuActive) {
      disableBodyScroll(headerEl.current);
    } else {
      enableBodyScroll(headerEl.current);
    }

    return () => {
      clearAllBodyScrollLocks();
    };
  }, [mobileMenuActive]);

  const toggleActive = option => {
    if (option === "close-nav") {
      setMobileMenuActive(false);
      enableBodyScroll(headerEl && headerEl.current);

      return;
    }

    setMobileMenuActive(!mobileMenuActive);
  };

  return (
    <MenuContext.Provider
      value={{ active: mobileMenuActive, toggle: toggleActive }}
    >
      <Wrapper ref={headerEl}>
        <LogoWrapper>
          <Link href="/">
            <a>
              <LogoFull />
            </a>
          </Link>
        </LogoWrapper>
        <Navigation>
          <ul>
            <li>
              <Link href="/shopping-bag">
                <a>
                  <FontAwesomeIcon
                    icon={["far", "shopping-cart"]}
                    color="var(--color-black)"
                    size="2x"
                  />
                </a>
              </Link>
            </li>
            <li onClick={toggleActive}>
              <MenuIcon />
            </li>
          </ul>
        </Navigation>
      </Wrapper>
      <MobileMenu />
    </MenuContext.Provider>
  );
};

export default Header;
