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

export const SIGNIN_MUTATION = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password)
  }
`;

export const SIGNOUT_MUTATION = gql`
  mutation signout {
    signout {
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