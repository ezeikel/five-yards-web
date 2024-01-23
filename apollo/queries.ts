import gql from 'graphql-tag';

// TODO: use fragments where it makes sense

export const CURRENT_USER_QUERY = gql`
  query {
    currentUser {
      id
      firstName
      lastName
      gender
      role
      gravatar
    }
  }
`;

export const CREATE_USER_MUTATION = gql`
  mutation createUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    createUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      id
      firstName
      lastName
      email
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation logIn($email: String!, $password: String!) {
    logIn(email: $email, password: $password) {
      user {
        id
        firstName
        lastName
        email
        role
      }
      token
    }
  }
`;

export const LOGOUT_MUTATION = gql`
  mutation logOut {
    logOut {
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
      firstName
      lastName
      permissions
    }
  }
`;

export const CHANGE_PASSWORD_MUTATION = gql`
  mutation CHANGE_PASSWORD_MUTATION(
    $oldPassword: String!
    $newPassword: String!
  ) {
    changePassword(oldPassword: $oldPassword, newPassword: $newPassword) {
      message
    }
  }
`;

export const UPDATE_USER_MUTATION = gql`
  mutation UPDATE_USER_MUTATION(
    $firstName: String
    $lastName: String
    $gender: Gender
    $email: String
    $phoneNumber: String
    $measurements: MeasurementsInput
  ) {
    updateUser(
      firstName: $firstName
      lastName: $lastName
      gender: $gender
      email: $email
      phoneNumber: $phoneNumber
      measurements: $measurements
    ) {
      id
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
      firstName
      lastName
      email
      permissions
      bag {
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

export const ONBOARD_STRIPE_USER_MUTATION = gql`
  mutation onboardStripeUser {
    onboardStripeUser {
      url
    }
  }
`;

export const ONBOARD_STRIPE_REFRESH_MUTATION = gql`
  mutation onboardStripeRefresh {
    onboardStripeRefresh {
      url
    }
  }
`;
