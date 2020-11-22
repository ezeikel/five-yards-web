import { useState, useContext } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { MenuContext } from "../contexts/menu";
import LogoWithMainTextHorizontal from "./svgs/LogoWithMainTextHorizontal";
import MenuIcon from "./svgs/MenuIcon";
import MobileMenu from "./MobileMenu";
import GenericModal from "./GenericModal";
import ShoppingBag from "./ShoppingBag";
import { UserContextProvider } from "../contexts/user";

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
  const [active, setActive] = useContext(MenuContext);

  // const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const [signInModalIsOpen, setSignInModalIsOpen] = useState(false);
  const [shoppingBagModalIsOpen, setShoppingBagModalIsOpen] = useState(false);

  const openSignInModal = async () => {
    setSignInModalIsOpen(true);
  };

  const closeSignInModal = () => {
    setSignInModalIsOpen(false);
  };

  const openShoppingBagModal = async () => {
    setShoppingBagModalIsOpen(true);
  };

  const closeShoppingBagModal = () => {
    setShoppingBagModalIsOpen(false);
  };

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
              <span onClick={openShoppingBagModal}>
                <FontAwesomeIcon
                  icon={["fal", "shopping-bag"]}
                  color="var(--color-black)"
                  size="2x"
                />
              </span>
            </li>
            <li onClick={() => setActive(!active)}>
              <MenuIcon />
            </li>
          </ul>
        </Navigation>
      </Wrapper>
      <MobileMenu />
      <GenericModal
        isOpen={shoppingBagModalIsOpen}
        heading="Shopping bag"
        contentLabel=""
        close={closeShoppingBagModal}
      >
        <ShoppingBag />
      </GenericModal>
    </UserContextProvider>
  );
};

export default Header;
