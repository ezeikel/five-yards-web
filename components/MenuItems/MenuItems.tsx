import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useMutation } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMenuContext } from '../../contexts/menu';
import useUser from '../../hooks/useUser';
import { LOGOUT_MUTATION, CURRENT_USER_QUERY } from '../../apollo/queries';
import { LoggedOut, UserAvatar } from './MenuItems.styled';
import Button from '../Button/Button';

// TODO: instead of trying to this dynamic menu list thing, create seperate components
// for different user state with items and click events hardcoded
const LOGGED_OUT_MENU_LIST = [
  {
    id: 1,
    text: 'Home',
    link: '/',
  },
  {
    id: 2,
    text: 'Partner with us',
    link: '/',
    childList: [
      {
        id: 1,
        text: 'Tailor',
        link: '/',
      },
      {
        id: 2,
        text: 'Fabric seller',
        link: '/',
      },
    ],
    childListOpen: false,
    horizontalRuleAfter: true,
  },
  {
    id: 3,
    text: 'Terms and conditions',
    link: '/',
  },
  {
    id: 4,
    text: 'Privacy',
    link: '/',
  },
  {
    id: 5,
    text: 'Cookies',
    link: '/',
  },
  {
    id: 6,
    text: 'Site map',
    link: '/',
  },
  {
    id: 7,
    text: 'Sign in',
    link: '/sign-in',
    icon: {
      name: 'user',
    },
  },
];

const MenuItems = () => {
  const router = useRouter();
  const { setActive } = useMenuContext();
  const { user } = useUser();
  const [loggedOutMenu, setLoggedOutMenu] = useState(
    LOGGED_OUT_MENU_LIST.map((item, i) => ({ ...item, index: i })),
  );

  const [signout] = useMutation(LOGOUT_MUTATION, {
    onCompleted() {
      router.push(`/`);
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const LOGGED_IN_USER_MENU_LIST = [
    {
      id: 1,
      text: 'My orders',
      link: '/',
      icon: {
        name: 'receipt',
      },
    },
    {
      id: 2,
      text: 'My appointments',
      link: '/',
      icon: {
        name: 'calendar-check',
      },
    },
    {
      id: 3,
      text: 'Message center',
      link: '/',
      icon: {
        name: 'comment-alt',
      },
    },
    {
      id: 4,
      text: 'My details',
      link: '/',
      icon: {
        name: 'address-card',
      },
    },
    {
      id: 5,
      text: 'Change password',
      link: '/',
      icon: {
        name: 'key',
      },
    },
    {
      id: 6,
      text: 'Payment preferences',
      link: '/',
      icon: {
        name: 'credit-card',
      },
    },
    {
      id: 7,
      text: 'Sign out',
      link: null, // TODO: removing link property breaks UI
      click: signout,
      avatar: true,
      icon: {
        name: 'user',
      },
    },
  ];

  const renderListItems = (list) => {
    const renderListItemContent = (item) => {
      if (item.avatar) {
        return <UserAvatar />;
      }

      if (item.icon) {
        return (
          <FontAwesomeIcon
            icon={['fal', item.icon.name]}
            color={user ? 'var(--color-black)' : 'var(--color-white)'}
            size="lg"
          />
        );
      }

      return null;
    };

    const renderListItemLinkOrText = (item) => {
      if (item.link) {
        return <Link href={item.link}>{item.text}</Link>;
      }

      return <Button type="button" onClick={item.click} text={item.text} />;
    };

    return list.map((item) => {
      return (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
        <li onClick={() => setActive(false)} key={item.id}>
          {renderListItemContent(item)}
          {renderListItemLinkOrText(item)}
        </li>
      );
    });
  };

  return user ? (
    <ul>{renderListItems(LOGGED_IN_USER_MENU_LIST)}</ul>
  ) : (
    <LoggedOut>
      {loggedOutMenu.map((item, i) => {
        return (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
          <li
            onClick={
              item.childList
                ? () => {
                    setLoggedOutMenu(
                      loggedOutMenu.map((loggedOutMenuItem) => {
                        if (i === loggedOutMenuItem.index) {
                          // eslint-disable-next-line no-param-reassign
                          loggedOutMenuItem.childListOpen =
                            !loggedOutMenuItem.childListOpen;
                        }
                        return loggedOutMenuItem;
                      }),
                    );
                  }
                : () => setActive(false)
            }
            key={item.id}
            className={`${item.childList ? 'has-children' : ''} ${
              item.childListOpen ? 'open' : ''
            } ${item.horizontalRuleAfter ? 'horizontal-rule-after' : ''}`}
          >
            {item.childList ? (
              <>
                <span>
                  {item.text}
                  <FontAwesomeIcon
                    icon={['fal', 'angle-down']}
                    color="var(--color-primary)"
                    size="lg"
                  />
                </span>
                {item.childListOpen ? (
                  <ul>
                    {item.childList.map((childItem) => (
                      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                      <li onClick={() => setActive(false)} key={childItem.id}>
                        <Link href={childItem.link}>{childItem.text}</Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </>
            ) : (
              <>
                {item.icon ? (
                  <FontAwesomeIcon
                    icon={['fal', 'user']}
                    color="var(--color-white)"
                    size="lg"
                  />
                ) : null}
                <Link href={item.link}>{item.text}</Link>
              </>
            )}
          </li>
        );
      })}
    </LoggedOut>
  );
};

export default MenuItems;
