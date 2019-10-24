import styled from "styled-components";
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Wrapper = styled.footer`
  display: grid;
  grid-template-rows: repeat(3, auto);
  place-items: center;
  grid-row-gap: var(--spacing-large);
  padding: var(--spacing-large);
  background-color: #000;
  @media (min-width: 768px) {
    grid-row-gap: var(--spacing-huge);
    grid-column-gap: var(--spacing-huge);
    justify-items: start;
    padding: var(--spacing-huge);
    grid-template-rows: repeat(3, 1fr);
    grid-template-columns: repeat(6, 1fr);
    grid-row-gap: var(--spacing-medium);
  }
`;

const Copyright = styled.section`
  display: grid;
  grid-row-gap: var(--spacing-medium);
  text-align: center;
  font-weight: 300;
  font-size: 1.4rem;
  line-height: 21px;
  color: var(--color-dark-grey);
  a,
  a:link,
  a:active,
  a:visited,
  a:focus {
    color: var(--color-white);
    text-decoration: underline;
  }
  @media (min-width: 768px) {
    width: 100%;
    grid-row: 3 / -1;
    grid-column: 1 / -1;
    align-self: end;
    display: grid;
    grid-template-columns: repeat(2, auto);
  }
`;

const MadeWith = styled.span`
  > span:first-of-type {
    color: var(--color-red);
  }
  > span:nth-of-type(2) {
    color: var(--color-white);
  }
  @media (min-width: 768px) {
    align-self: end;
    justify-self: end;
  }
`;

const RightsReservered = styled.span`
  @media (min-width: 768px) {
    justify-self: start;
    align-self: end;
    > span:first-of-type {
      color: var(--color-red);
    }
    > span:nth-of-type(2) {
      color: var(--color-white);
    }
  }
`;

const Logo = styled.div`
  display: grid;
  place-items: center;
  z-index: 1;
  margin: 0;
  width: 100px;
  @media (min-width: 768px) {
    grid-row: 1 / -1;
    grid-column: 1 / span 1;
  }
`;

const SocialLinks = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: start;
  grid-column-gap: var(--spacing-large);
  justify-items: center;
  width: 100%;
  margin: 0;
  a {
    color: var(--color-white);
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(5, auto);
  }
`;

const Visit = styled.section`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: var(--spacing-medium);
  place-items: center;
  font-size: 1.4rem;
  h4 {
    margin: 0;
    color: var(--color-white);
  }
  address {
    color: var(--color-dark-grey);
    font-style: normal;
  }
  @media (min-width: 768px) {
    grid-row: 1 / span 1;
    grid-column: 3 / span 2;
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: var(--spacing-medium);
    justify-items: start;
  }
`;

const Slogan = styled.section`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: var(--spacing-medium);
  place-items: center;
  color: var(--color-dark-grey);
  font-size: 1.4rem;
  span {
    color: var(--color-white);
  }
  @media (min-width: 768px) {
    grid-row: 1 / span 1;
    grid-column: 1 / span 2;
    display: grid;
    justify-items: start;
  }
`;

const NewBusiness = styled.section`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: var(--spacing-medium);
  place-items: center;
  font-size: 1.4rem;
  h4 {
    margin: 0;
    color: var(--color-white);
  }
  a {
    color: var(--color-dark-grey);
  }
  color: var(--color-dark-grey);
  display: grid;
  grid-template-rows: repeat(2, auto);
  @media (min-width: 768px) {
    grid-row: 1 / span 1;
    grid-column: 5 / span 2;
    display: grid;
    justify-items: start;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: var(--spacing-medium);
  }
`;

const Social = styled.section`
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-row-gap: var(--spacing-medium);
  place-items: center;
  h4 {
    font-size: 1.4rem;
    margin: 0;
    color: var(--color-white);
  }
  a {
    svg {
      color: var(--color-dark-grey);
    }
    &:hover {
        svg {
          @media (min-width: 768px) {
            transition: color 0.3s ease-in-out;
            &:hover {
              color: var(--color-white);
            }
          }
        }
      }
  }
  color: var(--color-dark-grey);
  @media (min-width: 768px) {
    grid-row: 2 / span 1;
    grid-column: 1 / span 2;
    align-self: end;
    display: grid;
    grid-template-rows: repeat(2, auto);
    grid-row-gap: var(--spacing-medium);
    justify-items: start;
    width: 100%;
  }
`;

const Footer = () => (
  <Wrapper>
    <Slogan>
      <Logo>
        <Link href="/">
          <a>
            <img src="/static/images/logo-5-white.png" />
          </a>
        </Link>
      </Logo>
      <p>Sew it for the culture.</p>
    </Slogan>
    <Visit>
      <h4>Visit</h4>
      <address>Pop Brixton, 49 Brixton Station Rd, London SW9 8PQ</address>
    </Visit>
    <NewBusiness>
      <h4>New business</h4>
      <a href="mailto:hello@fiveyards.app">Email us</a>
      <a href="tel:447932442879">+44 7932442879</a>
    </NewBusiness>
    <Social>
      <h4>Follow</h4>
      <SocialLinks>
        <li>
          <a href="https://twitter.com/fiveyardsapp">
            <FontAwesomeIcon
              icon={["fab", "twitter"]}
              color="var(--color-dark-grey)"
              size="3x"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/fiveyardsapp">
            <FontAwesomeIcon
              icon={["fab", "instagram"]}
              color="var(--color-dark-grey)"
              size="3x"
            />
          </a>
        </li>
        <li>
          <a href="https://fb.me/fiveyardsapp">
            <FontAwesomeIcon
              icon={["fab", "facebook-f"]}
              color="var(--color-dark-grey)"
              size="3x"
            />
          </a>
        </li>
      </SocialLinks>
    </Social>
    <Copyright>
      <RightsReservered>&copy; {new Date().getFullYear()} Five Yards. All rights reserved.</RightsReservered>
      <MadeWith>
        Made with <span>♡</span> in <span>South London</span>.
      </MadeWith>
    </Copyright>
  </Wrapper>
);

export default Footer;
