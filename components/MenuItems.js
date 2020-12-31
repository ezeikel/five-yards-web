import { useContext, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { MenuContext } from "../contexts/menu";
import useUser from "../hooks/useUser";
import { useRouter } from "next/router";
import { SIGNOUT_MUTATION, CURRENT_USER_QUERY } from "../apollo/queries";
import { useMutation } from "@apollo/client";

// TODO: instead of trying to this dynamic menu list thing, create seperate components
// for different user state with items and click events hardcoded
const LOGGED_OUT_MENU_LIST = [
  {
    text: "Home",
    link: "/",
  },
  {
    text: "Partner with us",
    link: "/",
    childList: [
      {
        text: "Tailor",
        link: "/",
      },
      {
        text: "Fabric seller",
        link: "/",
      },
    ],
    childListOpen: false,
    horizontalRuleAfter: true,
  },
  {
    text: "Terms and conditions",
    link: "/",
  },
  {
    text: "Privacy",
    link: "/",
  },
  {
    text: "Cookies",
    link: "/",
  },
  {
    text: "Site map",
    link: "/",
  },
  {
    text: "Sign in",
    link: "/sign-in",
    icon: {
      name: "user",
    },
  },
];

const LoggedOut = styled.ul`
  font-size: 2.5rem;

  li {
    &.horizontal-rule-after {
      border-bottom: 1px solid var(--color-dark-grey);
      padding-bottom: var(--spacing-medium);
      + li {
        margin-top: var(--spacing-medium);
      }
    }
    &.has-children {
      flex-direction: column;
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
          font-size: 1.6rem;
          + li {
            margin-top: var(--spacing-medium);
          }
        }
      }
    }
  }
`;

const UserAvatar = styled.div`
  width: var(--spacing-large);
  height: var(--spacing-large);
  border-radius: 50%;
  background-color: tomato;
  margin-right: var(--spacing-medium);
`;

const MenuItems = () => {
  const router = useRouter();
  const [, toggle] = useContext(MenuContext);
  const { user } = useUser();
  const [loggedOutMenu, setLoggedOutMenu] = useState(
    LOGGED_OUT_MENU_LIST.map((item, i) => ({ ...item, index: i })),
  );

  const [signout] = useMutation(SIGNOUT_MUTATION, {
    onCompleted() {
      router.push(`/`);
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const LOGGED_IN_USER_MENU_LIST = [
    {
      text: "My orders",
      link: "/",
      icon: {
        name: "receipt",
      },
    },
    {
      text: "My appointments",
      link: "/",
      icon: {
        name: "calendar-check",
      },
    },
    {
      text: "Message center",
      link: "/",
      icon: {
        name: "comment-alt",
      },
    },
    {
      text: "My details",
      link: "/",
      icon: {
        name: "address-card",
      },
    },
    {
      text: "Change password",
      link: "/",
      icon: {
        name: "key",
      },
    },
    {
      text: "Payment preferences",
      link: "/",
      icon: {
        name: "credit-card",
      },
    },
    {
      text: "Sign out",
      link: null, // TODO: removing link property breaks UI
      click: signout,
      avatar: true,
      icon: {
        name: "user",
      },
    },
  ];

  return user ? (
    <ul>
      {LOGGED_IN_USER_MENU_LIST.map((item, i) => {
        return (
          <li onClick={() => toggle(false)} key={i}>
            {item.avatar ? (
              <UserAvatar />
            ) : item.icon ? (
              <FontAwesomeIcon
                icon={["fal", item.icon.name]}
                color={user ? "var(--color-black)" : "var(--color-white)"}
                size="lg"
              />
            ) : null}
            {item.link ? (
              <Link href={item.link}>
                <a>{item.text}</a>
              </Link>
            ) : (
              <span onClick={item.click}>{item.text}</span>
            )}
          </li>
        );
      })}
    </ul>
  ) : (
    <LoggedOut>
      {loggedOutMenu.map((item, i) => {
        return (
          <li
            onClick={
              item.childList
                ? () => {
                    setLoggedOutMenu(
                      loggedOutMenu.map(item => {
                        if (i === item.index) {
                          item.childListOpen = !item.childListOpen;
                        }
                        return item;
                      }),
                    );
                  }
                : () => toggle(false)
            }
            key={i}
            className={`${item.childList ? "has-children" : ""} ${
              item.childListOpen ? "open" : ""
            } ${item.horizontalRuleAfter ? "horizontal-rule-after" : ""}`}
          >
            {item.childList ? (
              <>
                <span>
                  {item.text}
                  <FontAwesomeIcon
                    icon={["fal", "angle-down"]}
                    color="var(--color-primary)"
                    size="lg"
                  />
                </span>
                {item.childListOpen ? (
                  <ul>
                    {item.childList.map((childItem, i) => (
                      <li onClick={() => toggle(false)} key={i}>
                        <Link href={childItem.link}>
                          <a>{childItem.text}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </>
            ) : (
              <>
                {item.icon ? (
                  <FontAwesomeIcon
                    icon={["fal", "user"]}
                    color="var(--color-white)"
                    size="lg"
                  />
                ) : null}
                <Link href={item.link}>
                  <a>{item.text}</a>
                </Link>
              </>
            )}
          </li>
        );
      })}
    </LoggedOut>
  );
};

export default MenuItems;
