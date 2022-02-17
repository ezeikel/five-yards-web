import { useContext, useEffect, useRef } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import { MenuContext } from "../../contexts/menu";
import useUser from "../../hooks/useUser";
import LoggedOutMenuList from "../LoggedOutMenuList/LoggedOutMenuList";
import LoggedInUserMenuList from "../LoggedInUserMenuList/LoggedInUserMenuList";
import CloseButton from "../CloseButton/CloseButton";
import { Wrapper, Header, Body } from "./MobileMenu.styled";

const MobileMenu = () => {
  const wrapperEl = useRef(null);
  const { active, setActive } = useContext(MenuContext);
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

  const menuContent = user ? <LoggedInUserMenuList /> : <LoggedOutMenuList />;

  return (
    <Wrapper user={user} active={active} ref={wrapperEl}>
      <Header>
        <CloseButton
          color={user ? "var(--color-black)" : "var(--color-white)"}
          circle
          handleClick={() => setActive(false)}
        />
      </Header>
      <Body>{menuContent}</Body>
    </Wrapper>
  );
};

export default MobileMenu;
