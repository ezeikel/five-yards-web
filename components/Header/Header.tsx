import { useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuContext } from "../../contexts/menu";
import LogoWithMainTextHorizontal from "../svgs/LogoWithMainTextHorizontal";
import MobileMenu from "../MobileMenu/MobileMenu";
import { Wrapper, LogoWrapper, Navigation } from "./Header.styled";

const Header = () => {
  const { active, setActive } = useContext(MenuContext);

  return (
    <>
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
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
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
    </>
  );
};

export default Header;
