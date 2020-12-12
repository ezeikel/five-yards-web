import { useRouter } from "next/router";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { useMutation } from "@apollo/client";
import { SIGNOUT_MUTATION, CURRENT_USER_QUERY } from "../apollo/queries";
import { useContext } from "react";
import { MenuContext } from "../contexts/menu";

const UserAvatar = styled.div`
  width: var(--spacing-large);
  height: var(--spacing-large);
  border-radius: 50%;
  background-color: tomato;
  margin-right: var(--spacing-medium);
`;

const LoggedOutMenuList = () => {
  const router = useRouter();
  const [, toggle] = useContext(MenuContext);
  const [signout] = useMutation(SIGNOUT_MUTATION, {
    onCompleted() {
      router.push(`/`);
    },
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  return (
    <ul>
      <li onClick={() => toggle(false)}>
        <FontAwesomeIcon
          icon={["fal", "receipt"]}
          color="var(--color-black)"
          size="lg"
        />
        <Link href="/orders">
          <a>My orders</a>
        </Link>
      </li>
      <li onClick={() => toggle(false)}>
        <FontAwesomeIcon
          icon={["fal", "calendar-check"]}
          color="var(--color-black)"
          size="lg"
        />
        <Link href="/appointments">
          <a>My appointments</a>
        </Link>
      </li>
      <li onClick={() => toggle(false)}>
        <FontAwesomeIcon
          icon={["fal", "comment-alt"]}
          color="var(--color-black)"
          size="lg"
        />
        <Link href="/messages">
          <a>Message center</a>
        </Link>
      </li>
      <li onClick={() => toggle(false)}>
        <FontAwesomeIcon
          icon={["fal", "address-card"]}
          color="var(--color-black)"
          size="lg"
        />
        <Link href="/account/my-details">
          <a>My details</a>
        </Link>
      </li>
      <li onClick={() => toggle(false)}>
        <FontAwesomeIcon
          icon={["fal", "key"]}
          color="var(--color-black)"
          size="lg"
        />
        <Link href="/account/password/change">
          <a>Change password</a>
        </Link>
      </li>
      <li onClick={() => toggle(false)}>
        <FontAwesomeIcon
          icon={["fal", "credit-card"]}
          color="var(--color-black)"
          size="lg"
        />
        <Link href="/account/payment/preferences">
          <a>Payment preferences</a>
        </Link>
      </li>
      <li
        onClick={() => {
          signout();
          toggle(false);
        }}
      >
        <UserAvatar />
        Sign out
      </li>
    </ul>
  );
};

export default LoggedOutMenuList;
