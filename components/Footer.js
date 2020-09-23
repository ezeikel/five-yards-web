import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "./Logo";
import GDPRLogo from "./GDPRLogo";

const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: var(--color-black);
  color: var(--color-white);
  padding: var(--spacing-large);
  font-size: 14px;
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-medium);
  svg {
    width: 86px;
    height: 73px;
  }
`;

const Links = styled.div`
  display: flex;
  margin-bottom: var(--spacing-large);
  > div {
    flex: 0 1 50%;
    + div {
      margin-left: var(--spacing-large);
    }
    > ul {
      li + li {
        margin-top: var(--spacing-small);
      }
    }
    > span {
      display: flex;
      font-size: 20px;
      font-weight: 700;
      margin-bottom: var(--spacing-medium);
    }
  }
`;

const Social = styled.div`
  display: flex;
  margin-bottom: var(--spacing-large);
  > div {
    flex: 0 1 50%;
    + div {
      margin-left: var(--spacing-large);
    }
    &:first-of-type {
      > span {
        display: flex;
        font-size: 20px;
        font-weight: 700;
        margin-bottom: var(--spacing-medium);
      }
      > ul {
        display: flex;
        li + li {
          margin-left: var(--spacing-medium);
        }
      }
    }
  }
`;

const Copyright = styled.div`
  color: #bebebe;
  align-self: flex-end;
`;

const Footer = () => (
  <Wrapper>
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <Links>
      <div>
        <span>Lorem ipsum</span>
        <ul>
          <li>Tailor sign up</li>
          <li>Fabric seller sign up</li>
        </ul>
      </div>
      <div>
        <span>Legal</span>
        <ul>
          <li>Terms and conditions</li>
          <li>Privacy</li>
          <li>Cookies</li>
          <li>Site map</li>
        </ul>
      </div>
    </Links>
    <Social>
      <div>
        <span>Follow us</span>
        <ul>
          <li>
            <FontAwesomeIcon
              icon={["fab", "facebook-f"]}
              color="var(--color-white)"
              size="2x"
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              color="var(--color-white)"
              size="2x"
            />
          </li>
          <li>
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              color="var(--color-white)"
              size="2x"
            />
          </li>
        </ul>
      </div>
      <div>
        <GDPRLogo />
      </div>
    </Social>
    <Copyright>&copy; {new Date().getFullYear()} Five Yards</Copyright>
  </Wrapper>
);

export default Footer;
