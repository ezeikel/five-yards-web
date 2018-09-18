import { GET_CURRENT_USER } from "./queries";

export const defaults = {
  isEditMode: false,
  currentUser: {
    __typename: "CurrentUser",
    id: "",
    email: "",
    fullName: "",
    permissions: [],
    isAuthenticated: false
  }
};

export const resolvers = {
  Query: {
    currentUser: (_, args, { cache }) => {
      const { currentUser } = cache.readQuery({ query: GET_CURRENT_USER });
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