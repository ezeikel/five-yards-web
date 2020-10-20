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
    horizontalRuleAfter: true,
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

const LoggedIn = styled.ul`
  li {
    display: flex;
  }
`;

const LoggedOut = styled.div`
  > ul {
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
        display: flex;
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
  }
`;

const GuestMenuItems = ({ openSignInModal }) => {
  const [, toggle] = useContext(MenuContext);
  const [user] = useContext(UserContext);
  const [childListIsOpen, setChildListIsOpen] = useState(false);
  const [loggedOutMenu, setLoggedOutMenu] = useState(
    LOGGED_OUT_MENU_LIST.map((item, i) => ({ ...item, index: i })),
  );

  console.log({ loggedOutMenu });

  console.log({ user });

  return user ? (
    <LoggedIn>
      <li
        onClick={() => {
          toggle();
        }}
      >
        <FontAwesomeIcon
          icon={["fal", "receipt"]}
          color="var(--color-white)"
          size="lg"
        />
        <span>My Orders</span>
      </li>
      <li
        onClick={() => {
          toggle();
        }}
      >
        <FontAwesomeIcon
          icon={["fal", "calendar-check"]}
          color="var(--color-white)"
          size="lg"
        />
        <span>My Appointments</span>
      </li>
      <li
        onClick={() => {
          toggle();
        }}
      >
        <FontAwesomeIcon
          icon={["fal", "comment-alt"]}
          color="var(--color-white)"
          size="lg"
        />
        <span>Message Center</span>
      </li>
      <li
        onClick={() => {
          toggle();
        }}
      >
        <FontAwesomeIcon
          icon={["fal", "address-card"]}
          color="var(--color-white)"
          size="lg"
        />
        <span>My Details</span>
      </li>
      <li
        onClick={() => {
          toggle();
        }}
      >
        <FontAwesomeIcon
          icon={["fal", "key"]}
          color="var(--color-white)"
          size="lg"
        />
        <span>Change Password</span>
      </li>
      <li
        onClick={() => {
          toggle();
        }}
      >
        <FontAwesomeIcon
          icon={["fal", "credit-card"]}
          color="var(--color-white)"
          size="lg"
        />
        <span>Payment Preferences</span>
      </li>
    </LoggedIn>
  ) : (
    <LoggedOut>
      <ul>
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
        {/* <li onClick={() => toggle(false)}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li
          className={childListIsOpen ? "active" : null}
          onClick={() => setChildListIsOpen(!childListIsOpen)}
        >
          Partner with us
          <FontAwesomeIcon
            icon={["fal", "angle-down"]}
            color="var(--color-primary)"
            size="lg"
            className="pull-right"
          />
          {childListIsOpen && (
            <ul>
              <li onClick={() => toggle(false)}>
                <Link href="/">
                  <a>Tailor</a>
                </Link>
              </li>
              <li onClick={() => toggle(false)}>
                <Link href="/">
                  <a>Fabric seller</a>
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
      <ul>
        <li onClick={() => toggle(false)}>
          <Link href="/">
            <a>Terms and conditions</a>
          </Link>
        </li>
        <li onClick={() => toggle(false)}>
          <Link href="/">
            <a>Privacy</a>
          </Link>
        </li>
        <li onClick={() => toggle(false)}>
          <Link href="/">
            <a>Cookies</a>
          </Link>
        </li>
        <li onClick={() => toggle(false)}>
          <Link href="/">
            <a>Site map</a>
          </Link>
        </li>
      </ul>
      <ul>
        <li
          onClick={() => {
            toggle();
            openSignInModal();
          }}
        >
          <FontAwesomeIcon
            icon={["fal", "user"]}
            color="var(--color-white)"
            size="lg"
          />
          <span>Sign in</span>
        </li> */}
      </ul>
    </LoggedOut>
  );
};

export default GuestMenuItems;
