import { useContext, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuContext } from "../../contexts/menu";
import { Wrapper } from "./LoggedOutMenuList.styled";

const LoggedOutMenuList = () => {
  const { setActive } = useContext(MenuContext);
  const [partnerLinkOpen, setPartnerLinkOpen] = useState(false);

  return (
    <Wrapper>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
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
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
            <li onClick={() => setActive(false)}>
              <Link href="/partner-with-us/tailor">
                <a>Tailor</a>
              </Link>
            </li>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
            <li onClick={() => setActive(false)}>
              <Link href="/partner-with-us/fabric-seller">
                <a>Fabric Seller</a>
              </Link>
            </li>
          </ul>
        )}
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <Link href="/terms-and-conditions">
          <a>Terms and conditions</a>
        </Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <Link href="/privacy">
          <a>Privacy</a>
        </Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <Link href="/cookies">
          <a>Cookies</a>
        </Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <Link href="/site-map">
          <a>Site map</a>
        </Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
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
