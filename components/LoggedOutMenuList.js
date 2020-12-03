import { useContext, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { MenuContext } from "../contexts/menu";

const Wrapper = styled.ul`
  font-size: 25px;
  li {
    &.has-children {
      flex-direction: column;
      border-bottom: 1px solid var(--color-dark-grey);
      padding-bottom: var(--spacing-medium);
      + li {
        margin-top: var(--spacing-medium);
      }
      &.open {
        svg {
          transform: rotate(180deg);
        }
      }
      > span {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      > ul {
        width: 100%;
        margin-top: var(--spacing-medium);
        li {
          font-size: 16px;
          + li {
            margin-top: var(--spacing-medium);
          }
        }
      }
    }
  }
`;

const LoggedOutMenuList = () => {
  const [, toggle] = useContext(MenuContext);
  const [partnerLinkOpen, setPartnerLinkOpen] = useState(false);

  return (
    <Wrapper>
      <li onClick={() => toggle(false)}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li
        onClick={() => setPartnerLinkOpen(!partnerLinkOpen)}
        className="has-children"
      >
        <span>
          Partner with us
          <FontAwesomeIcon
            icon={["fal", "angle-down"]}
            color="var(--color-primary)"
            size="lg"
          />
        </span>
        {partnerLinkOpen && (
          <ul>
            <li onClick={() => toggle(false)}>
              <Link href="/partner-with-us/tailor">
                <a>Tailor</a>
              </Link>
            </li>
            <li onClick={() => toggle(false)}>
              <Link href="/partner-with-us/fabric-seller">
                <a>Fabric Seller</a>
              </Link>
            </li>
          </ul>
        )}
      </li>
      <li onClick={() => toggle(false)}>
        <Link href="/terms-and-conditions">
          <a>Terms and conditions</a>
        </Link>
      </li>
      <li onClick={() => toggle(false)}>
        <Link href="/privacy">
          <a>Privacy</a>
        </Link>
      </li>
      <li onClick={() => toggle(false)}>
        <Link href="/cookies">
          <a>Cookies</a>
        </Link>
      </li>
      <li onClick={() => toggle(false)}>
        <Link href="/site-map">
          <a>Site map</a>
        </Link>
      </li>
      <li onClick={() => toggle(false)}>
        <FontAwesomeIcon
          icon={["fal", "user"]}
          color="var(--color-white)"
          size="lg"
        />
        <Link href="/sign-in">
          <a>Sign in</a>
        </Link>
      </li>
    </Wrapper>
  );
};

export default LoggedOutMenuList;
