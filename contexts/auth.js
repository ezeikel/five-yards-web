import { useEffect, createContext } from "react";
import { useRouter } from "next/router";
import { useApolloClient, useQuery, Query } from "@apollo/client";
import PropTypes from "prop-types";
import {
  CURRENT_CACHED_USER_QUERY,
  SIGNIN_MUTATION,
  SIGNOUT_MUTATION,
  SIGNUP_MUTATION,
  RESET_MUTATION,
} from "../apollo/queries";
import { formatFormErrors } from "../utils/formatFormErrors";

// create React context
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
        update: async (cache, { data: { signup: user } }) => {
          this._updateCurrentUser(cache, { ...user, isAuthenticated: true });

          resetForm();

          // redirect to homepage
          router.push("/");
        },
      });
    } catch (e) {
      setErrors(formatFormErrors(e));
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
        update: async (cache, { data: { signin: user } }) => {
          this._updateCurrentUser(cache, { ...user, isAuthenticated: true });

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
        update: async (
          cache,
          {
            data: {
              signout: { message },
            },
          },
        ) => {
          // redirect to homepage
          history.push("/");

          // reset cache to its defaults
          await client.resetStore();
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
        update: async (cache, { data: { resetPassword: user } }) => {
          this._updateCurrentUser(cache, { ...user, isAuthenticated: true });

          resetForm();

          // redirect to homepage
          router.push("/");
        },
      });
    } catch (e) {
      console.log(e);
      setErrors(formatFormErrors(e));
    }
    setSubmitting(false);
  };

  // const _updateCurrentUser = (cache, user) => {
  //   const data = {
  //     currentUser: {
  //       ...user,
  //       __typename: "CurrentUser",
  //     },
  //   };

  //   console.log({ data });
  //   cache.writeData({ data });
  // };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signup,
        signin,
        signout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  router: PropTypes.object.isRequired,
};

// consumer for AuthContext
export const AuthConsumer = props => <AuthContext.Consumer {...props} />;

// withAuth hoc passes down original props and currentUser and context as props to new wrapped component
export const withAuth = WrappedComponent => props => (
  <Query query={CURRENT_CACHED_USER_QUERY} fetchPolicy="cache-only">
    {({ data: { currentUser } }) => (
      <AuthConsumer>
        {ctx => (
          <WrappedComponent {...props} currentUser={currentUser} {...ctx} />
        )}
      </AuthConsumer>
    )}
  </Query>
);
