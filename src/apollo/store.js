import { GET_CURRENT_USER } from "./queries";

export const defaults = {
  isEditMode: false,
  currentUser: {
    __typename: "CurrentUser",
    email: "",
    isAuthenticated: false
  }
};

export const resolvers = {
  Query: {
    currentUser: (parent, args, { cache }) => {
      const { currentUser } = cache.readQuery({ query: GET_CURRENT_USER });
      return currentUser;
    }
  },
  Mutation: {
    updateCurrentUser: (parent, { email, isAuthenticated }, { cache }) => {
      cache.writeData({
        data: {
          currentUser: { email, isAuthenticated, __typename: "CurrentUser" }
        }
      });
      return { email, isAuthenticated, __typename: "CurrentUser" };
    }
  }
};