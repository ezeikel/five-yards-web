import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from '../svgs/Logo';
import GDPRLogo from '../svgs/GDPRLogo';
import {
  Wrapper,
  LogoWrapper,
  Links,
  Social,
  Copyright,
} from './Footer.styled';

const Footer = () => (
  <Wrapper>
    <div>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Links>
        <div>
          <span>Join us</span>
          <ul>
            <li>
              <Link href="/">Tailor sign up</Link>
            </li>
            <li>
              <Link href="/">Fabric seller sign up</Link>
            </li>
          </ul>
        </div>
        <div>
          <span>Legal</span>
          <ul>
            <li>
              <Link href="/">Terms and conditions</Link>
            </li>
            <li>
              <Link href="/">Privacy</Link>
            </li>
            <li>
              <Link href="/">Cookies</Link>
            </li>
            <li>
              <Link href="/">Site map</Link>
            </li>
          </ul>
        </div>
      </Links>
      <Social>
        <div>
          <span>Follow us</span>
          <ul>
            <li>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <a href="https://www.facebook.com/fiveyardsapp">
                <FontAwesomeIcon
                  icon={['fab', 'facebook-f']}
                  color="var(--color-white)"
                  size="2x"
                />
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <a href="https://twitter.com/fiveyardsapp">
                <FontAwesomeIcon
                  icon={['fab', 'twitter']}
                  color="var(--color-white)"
                  size="2x"
                />
              </a>
            </li>
            <li>
              {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
              <a href="https://www.instagram.com/fiveyardsapp">
                <FontAwesomeIcon
                  icon={['fab', 'instagram']}
                  color="var(--color-white)"
                  size="2x"
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <GDPRLogo />
        </div>
      </Social>
    </div>
    <Copyright>
      &copy; {new Date().getFullYear()} Five Yards, all rights reserved.
    </Copyright>
  </Wrapper>
);

export default Footer;
