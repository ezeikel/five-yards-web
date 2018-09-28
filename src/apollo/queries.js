import gql from "graphql-tag";

export const GET_CURRENT_USER = gql`
{
  currentUser @client {
    id
    email
    fullName
    permissions
    isAuthenticated
    __typename
  }
}
`;

export const UPDATE_CURRENT_USER = gql`
  mutation UpdateCurrentUser($id: String!, $email: String!, $fullName: String!, $permissions: [String!]!, $isAuthenticated: Boolean!) {
    updateCurrentUser(id: $id, email: $email, fullName: $fullName, permissions: $permissions, isAuthenticated: $isAuthenticated) @client {
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
    $email: String!,
    $fullName: String!,
    $username: String!,
    $password: String!,
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

export const SIGNIN_MUTATION = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      fullName
      username
      permissions
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

export const CURRENT_USER_QUERY = gql`
  query {
    me {
      id
      email
      fullName
      permissions
    }
  }
`;