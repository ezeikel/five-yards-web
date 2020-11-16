import { useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { useApolloClient } from "@apollo/client";
import PropTypes from "prop-types";
import {
  CURRENT_CACHED_USER_QUERY,
  SIGNIN_MUTATION,
  SIGNOUT_MUTATION,
  SIGNUP_MUTATION,
  RESET_MUTATION,
} from "../apollo/queries";
import { formatFormErrors } from "../utils/formatFormErrors";

// create context
export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const client = useApolloClient();

  const fetchUser = async () => {
    const {
      data: { currentUser },
    } = await client.query({ query: CURRENT_CACHED_USER_QUERY });
    console.log({ currentUser });
  };

  const signup = async (
    { email, fullName, username, password },
    { setSubmitting, setErrors, resetForm },
  ) => {
    try {
      await client.mutate({
        mutation: SIGNUP_MUTATION,
        variables: { email, fullName, username, password },
        onCompleted: async ({ data: { signup: user } }) => {
          console.log({ user });
          resetForm();

          // redirect to homepage
          router.push("/");
        },
      });
    } catch (error) {
      setErrors(formatFormErrors(error));
    }
    setSubmitting(false);
  };

  const signin = async (
    { email, password },
    { setSubmitting, setErrors, resetForm },
  ) => {
    // get full user details using cookie set in browser after SIGNIN_MUTATION
    try {
      // manually firing off mutation and pull id from response
      await client.mutate({
        mutation: SIGNIN_MUTATION,
        variables: { email, password },
        onCompleted: async ({ data: { signin: user } }) => {
          console.log({ user });
          // exposed by Formik
          resetForm();

          // redirect to homepage
          history.push("/");
        },
      });
    } catch (error) {
      // send erros back to Formik form
      setErrors(formatFormErrors(error));
    }
    setSubmitting(false);
  };

  const signout = async () => {
    try {
      // trigger res.clearCookie() on the server
      await client.mutate({
        mutation: SIGNOUT_MUTATION,
        onCompleted: async ({
          data: {
            signout: { message },
          },
        }) => {
          console.log({ message });

          // redirect to homepage
          history.push("/");
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const resetPassword = async (
    { password, confirmPassword, resetToken },
    { setSubmitting, setErrors, resetForm },
  ) => {
    try {
      const { client, router } = this.props;

      await client.mutate({
        mutation: RESET_MUTATION,
        variables: { password, confirmPassword, resetToken },
        onCompleted: async ({ data: { resetPassword: user } }) => {
          console.log({ user });

          resetForm();

          // redirect to homepage
          router.push("/");
        },
      });
    } catch (error) {
      console.log(error);
      setErrors(formatFormErrors(error));
    }
    setSubmitting(false);
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        signout,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
