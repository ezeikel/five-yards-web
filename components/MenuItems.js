import { useContext, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuContext } from "../contexts/menu";
import { UserContext } from "../contexts/user";
import styled from "styled-components";

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
    link: "/", // TODO: removing link property breaks UI
    click: "/",
    icon: {
      name: "user",
    },
  },
];

const LOGGED_IN_MENU_LIST = [
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
    link: "/", // TODO: removing link property breaks UI
    click: "/",
    icon: {
      name: "user",
    },
  },
];

const LoggedIn = styled.ul``;

const LoggedOut = styled.ul`
  font-size: 25px;

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
          font-size: 16px;
          + li {
            margin-top: var(--spacing-medium);
          }
        }
      }
    }
  }
`;

const GuestMenuItems = ({ openSignInModal }) => {
  const [, toggle] = useContext(MenuContext);
  const [user] = useContext(UserContext);
  const [loggedOutMenu, setLoggedOutMenu] = useState(
    LOGGED_OUT_MENU_LIST.map((item, i) => ({ ...item, index: i })),
  );

  return user ? (
    <LoggedIn>
      {LOGGED_IN_MENU_LIST.map((item, i) => {
        return (
          <li onClick={() => toggle(false)} key={i}>
            {item.icon ? (
              <FontAwesomeIcon
                icon={["fal", item.icon.name]}
                color="var(--color-white)"
                size="lg"
              />
            ) : null}
            <Link href={item.link}>
              <a>{item.text}</a>
            </Link>
          </li>
        );
      })}
    </LoggedIn>
  ) : (
    <LoggedOut>
      {loggedOutMenu.map((item, i) => {
        // openSignInModal();
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

export default GuestMenuItems;
