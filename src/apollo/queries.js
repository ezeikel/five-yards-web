import gql from "graphql-tag";

export const GET_CURRENT_USER = gql`
{
  currentUser @client {
    email
    isAuthenticated
    __typename
  }
}
`;

export const UPDATE_CURRENT_USER = gql`
  mutation UpdateCurrentUser($email: String!, $isAuthenticated: Boolean!) {
    updateCurrentUser(email: $email, isAuthenticated: $isAuthenticated) @client {
      email
      isAuthenticated
      __typename
    }
  }
`;


export const SIGNIN_MUTATION = gql`
  mutation signin($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      email
      fullName
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
