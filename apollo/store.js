import { CURRENT_CACHED_USER_QUERY, CART_OPEN_QUERY } from "./queries";

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
    },
    toggleCart(_, args, { cache }) {
      // read the cartOpen value frome the cache
      const { cartOpen } = cache.readQuery({
        query: CART_OPEN_QUERY
      });
      // toggle the cart state
      const data = {
        data: {
          cartOpen: !cartOpen
        }
      };

      cache.writeData(data);
      return data;
    }
  }
};