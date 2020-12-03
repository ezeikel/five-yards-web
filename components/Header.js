import { useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { MenuContext } from "../contexts/menu";
import LogoWithMainTextHorizontal from "./svgs/LogoWithMainTextHorizontal";
import MobileMenu from "./MobileMenu";
import { UserContextProvider } from "../contexts/user";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-large);
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
  const [active, setActive] = useContext(MenuContext);

  return (
    <UserContextProvider>
      <Wrapper>
        <LogoWrapper>
          <Link href="/">
            <a>
              <LogoWithMainTextHorizontal fill="var(--color-black)" />
            </a>
          </Link>
        </LogoWrapper>
        <Navigation>
          <ul>
            <li>
              <Link href="/bag">
                <a>
                  <FontAwesomeIcon
                    icon={["far", "shopping-bag"]}
                    color="var(--color-black)"
                    size="2x"
                  />
                </a>
              </Link>
            </li>
            <li onClick={() => setActive(!active)}>
              <FontAwesomeIcon
                icon={["far", "bars"]}
                color="var(--color-primary)"
                size="2x"
              />
            </li>
          </ul>
        </Navigation>
      </Wrapper>
      <MobileMenu />
    </UserContextProvider>
  );
};

export default Header;
