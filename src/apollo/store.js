import { CURRENT_CACHED_USER_QUERY } from "./queries";

export const defaults = {
  currentUser: {
    __typename: "CurrentUser",
    id: "",
    email: "",
    username: "",
    fullName: "",
    permissions: [],
    cart: [],
    isAuthenticated: false
  },
  cartOpen: false
};

export const resolvers = {
  Query: {
    currentUser: (_, args, { cache }) => {
      const { currentUser } = cache.readQuery({ query: CURRENT_CACHED_USER_QUERY });
      return currentUser;
    }
  },
  Mutation: {
    updateCurrentUser: (_, { id, email, fullName, permissions, isAuthenticated }, { cache }) => {
      cache.writeData({
        data: {
          currentUser: { id, email, fullName, permissions, isAuthenticated, __typename: "CurrentUser" }
        }
      });
      return { id, email, fullName, permissions, isAuthenticated, __typename: "CurrentUser" };
    }
  }
};