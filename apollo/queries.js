import gql from "graphql-tag";

// TODO: Being used in Refetch on addToCart
// TODO: me and currentUser do very similar things. Merge?
export const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      fullName
      permissions
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
        }
      }
    }
  }
`;

// export const CURRENT_CACHED_USER_QUERY = gql`
// {
//   currentUser @client {
//     id
//     email
//     username
//     fullName
//     permissions
//     cart {
//       id
//       quantity
//       item {
//         id
//         price
//         image
//         title
//         description
//       }
//     }
//     isAuthenticated
//     __typename
//   }
// }
// `;

export const CURRENT_CACHED_USER_QUERY = gql`
  {
    currentUser @client {
      id
      email
      username
      fullName
      permissions
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
        }
      }
      isAuthenticated
      __typename
    }
  }
`;

export const UPDATE_CURRENT_USER = gql`
  mutation updateCurrentUser(
    $id: String!
    $email: String!
    $fullName: String!
    $permissions: [String!]!
    $isAuthenticated: Boolean!
  ) {
    updateCurrentUser(
      id: $id
      email: $email
      fullName: $fullName
      permissions: $permissions
      isAuthenticated: $isAuthenticated
    ) @client {
      id
      email
      fullName
      permissions
      isAuthenticated
      __typename
    }
  }
`;

export const SIGNUP_MUTATION = gql`
  mutation signup(
    $email: String!
    $fullName: String!
    $username: String!
    $password: String!
  ) {
    signup(
      email: $email
      fullName: $fullName
      username: $username
      password: $password
    ) {
      id
      email
      fullName
      username
      permissions
    }
  }
`;

// export const SIGNIN_MUTATION = gql`
//   mutation signin($email: String!, $password: String!) {
//     signin(email: $email, password: $password) {
//       id
//       email
//       fullName
//       username
//       permissions
//       cart {
//       id
//       quantity
//       item {
//         id
//         price
//         image
//         title
//         description
//       }
//     }
//     }
//   }
// `;

export const SIGNIN_MUTATION = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      fullName
      username
      permissions
      cart {
        id
        quantity
        item {
          id
          price
          image
          title
          description
        }
      }
    }
  }
`;

export const SIGNOUT_MUTATION = gql`
  mutation signout {
    signout {
      message
    }
  }
`;

export const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

export const RESET_MUTATION = gql`
  mutation RESET_MUTATION(
    $resetToken: String!
    $password: String!
    $confirmPassword: String!
  ) {
    resetPassword(
      resetToken: $resetToken
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id
      email
      username
      fullName
      permissions
    }
  }
`;

export const CREATE_ITEM_MUTATION = gql`
  mutation CREATE_ITEM_MUTATION(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

export const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(id: $id) {
      id
      title
      description
      price
      largeImage
    }
  }
`;

// export const ALL_ITEMS_QUERY = gql`
//   query ALL_ITEMS_QUERY($skip: Int = 0, $first: Int = ${perPage}) {
//     items (first: $first, skip: $skip, orderBy: createdAt_DESC) {
//       id
//       title
//       price
//       description
//       image
//       largeImage
//     }
//   }
// `;

// TODO: Add pagination like above
export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

export const DELETE_ITEM_MUTATION = gql`
  mutation DELETE_ITEM_MUTATION($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

export const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $title: String
    $description: String
    $price: Int
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
      title
      description
      price
    }
  }
`;

export const CART_OPEN_QUERY = gql`
  query {
    cartOpen @client
  }
`;

export const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

export const REMOVE_FROM_CART_MUTATION = gql`
  mutation removeFromCart($id: ID!) {
    removeFromCart(id: $id) {
      id
      quantity
      item {
        id
        title
        description
        image
        price
      }
    }
  }
`;

export const CREATE_ORDER_MUTATION = gql`
  mutation createOrder($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

export const ADD_TO_CART_MUTATION = gql`
  mutation addToCart($id: ID!) {
    addToCart(id: $id) {
      id
      fullName
      username
      email
      permissions
      cart {
        id
        quantity
        item {
          id
          title
          description
          image
          price
        }
      }
    }
  }
`;

export const SINGLE_ORDER_QUERY = gql`
  query SINGLE_ORDER_QUERY($id: ID!) {
    order(id: $id) {
      id
      charge
      total
      createdAt
      user {
        id
      }
      items {
        id
        title
        description
        price
        image
        quantity
      }
    }
  }
`;

export const USER_ORDERS_QUERY = gql`
  query USER_ORDERS_QUERY {
    orders {
      id
      total
      createdAt
      items {
        id
        title
        price
        description
        quantity
        image
      }
    }
  }
`;

export const REQUEST_LAUNCH_NOTIFICATION_MUTATION = gql`
  mutation requestLaunchNotification($firstName: String!, $email: String!) {
    requestLaunchNotification(firstName: $firstName, email: $email) {
      message
    }
  }
`;
