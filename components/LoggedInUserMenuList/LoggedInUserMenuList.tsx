import { useRouter } from 'next/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMutation } from '@apollo/client';
import { LOGOUT_MUTATION, CURRENT_USER_QUERY } from '../../apollo/queries';
import { useMenuContext } from '../../contexts/menu';
import useUser from '../../hooks/useUser';
import UserAvatar from '../UserAvatar/UserAvatar';

const LoggedInUserMenuList = () => {
  const router = useRouter();
  const { setActive } = useMenuContext();
  const [signout] = useMutation(LOGOUT_MUTATION, {
    onCompleted() {
      router.push(`/`);
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const { user } = useUser();

  return (
    <ul>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <FontAwesomeIcon
          icon={['fal', 'receipt']}
          color="var(--color-black)"
          size="lg"
        />
        <Link href="/orders">My orders</Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <FontAwesomeIcon
          icon={['fal', 'calendar-check']}
          color="var(--color-black)"
          size="lg"
        />
        <Link href="/appointments">My appointments</Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <FontAwesomeIcon
          icon={['fal', 'comment-alt']}
          color="var(--color-black)"
          size="lg"
        />
        <Link href="/messages">Message center</Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <FontAwesomeIcon
          icon={['fal', 'address-card']}
          color="var(--color-black)"
          size="lg"
        />
        <Link href="/account/my-details">My details</Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <FontAwesomeIcon
          icon={['fal', 'key']}
          color="var(--color-black)"
          size="lg"
        />
        <Link href="/account/password/change">Change password</Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li onClick={() => setActive(false)}>
        <FontAwesomeIcon
          icon={['fal', 'credit-card']}
          color="var(--color-black)"
          size="lg"
        />
        <Link href="/account/payment/preferences">Payment preferences</Link>
      </li>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */}
      <li
        onClick={() => {
          signout();
          setActive(false);
        }}
      >
        <UserAvatar image={user.gravatar} />
        Sign out
      </li>
    </ul>
  );
};

export default LoggedInUserMenuList;
