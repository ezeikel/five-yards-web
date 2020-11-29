import { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import mixpanel from "mixpanel-browser";
import { CURRENT_USER_QUERY } from "../apollo/queries";

const useUser = () => {
  const router = useRouter();
  const {
    loading,
    error,
    data: { currentUser: user } = {}, // setting default value when destructing as data is undefined when loading - https://github.com/apollographql/react-apollo/issues/3323#issuecomment-523430331
  } = useQuery(CURRENT_USER_QUERY, {
    pollInterval: 3000,
  });

  useEffect(() => {
    if (!error && typeof user === "undefined") return;

    if (!user) {
      router.push("/signin");
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      mixpanel.identify(user.id);

      mixpanel.people.set({
        User_ID: user.id,
        $name: user.fullName, // TODO: Make sure name in DB is capitalized
        $email: user.email,
      });
    }
  }, [user]);

  return {
    user,
    isLoading: loading,
    isError: error,
  };
};

export default useUser;
