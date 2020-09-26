import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import LogoFull from "./LogoFull";
import MenuIcon from "./MenuIcon";

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-medium);
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
      border: 1px solid #cccccc;
      border-radius: 2px;
      + li {
        margin-left: var(--spacing-medium);
      }
    }
  }
`;

const Header = () => (
  <Wrapper>
    <LogoWrapper>
      <LogoFull />
    </LogoWrapper>
    <Navigation>
      <ul>
        <li>
          <FontAwesomeIcon
            icon={["far", "shopping-cart"]}
            color="var(--color-black)"
            size="2x"
          />
        </li>
        <li>
          <MenuIcon />
        </li>
      </ul>
    </Navigation>
  </Wrapper>
);

export default Header;
