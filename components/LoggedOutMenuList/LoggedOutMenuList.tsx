import { useState } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMenuContext } from '../../contexts/menu';
import { Wrapper } from './LoggedOutMenuList.styled';

const LoggedOutMenuList = () => {
  const { setActive } = useMenuContext();
  const [partnerLinkOpen, setPartnerLinkOpen] = useState(false);

  return (
    <Wrapper>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <Link href="/">Home</Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li
        onClick={() => setPartnerLinkOpen(!partnerLinkOpen)}
        className="has-children"
      >
        <span>
          Partner with us
          <FontAwesomeIcon
            icon={['fal', 'angle-down']}
            color="var(--color-primary)"
            size="lg"
          />
        </span>
        {partnerLinkOpen && (
          <ul>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
            <li onClick={() => setActive(false)}>
              <Link href="/partner-with-us/tailor">Tailor</Link>
            </li>
            {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
            <li onClick={() => setActive(false)}>
              <Link href="/partner-with-us/fabric-seller">Fabric Seller</Link>
            </li>
          </ul>
        )}
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <Link href="/terms-and-conditions">Terms and conditions</Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <Link href="/privacy">Privacy</Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <Link href="/cookies">Cookies</Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <Link href="/site-map">Site map</Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <FontAwesomeIcon
          icon={['fal', 'user']}
          color="var(--color-white)"
          size="lg"
        />
        <Link href="/sign-in">Sign in</Link>
      </li>
    </Wrapper>
  );
};

export default LoggedOutMenuList;
