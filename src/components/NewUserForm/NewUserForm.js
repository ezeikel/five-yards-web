import React from 'react';
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const NEW_USER = gql`
  mutation NewUser(
    $email: String!,
    $fullName: String!,
    $username: String!,
    $password: String!,
    $passwordConfirm: String!
    ) {
    newUser(
      email: $email
      fullName: $fullName
      username: $username
      password: $password
      passwordConfirm: $passwordConfirm
    ) {
      id
    }
  }
`;

const NewUserForm = () => {
  let fullName, username, email, password, passwordConfirm;
  return (
    <Mutation mutation={NEW_USER}>
      {(newUser, { data }) => (
        <section>
          <form onSubmit={e => {
            e.preventDefault();

            newUser({ variables: { fullName: fullName.value, username: username.value, email: email.value, password: password.value, passwordConfirm: passwordConfirm.value, } });
            fullName.value = "";
            username.value = "";
            email.value = "";
            password.value = "";
            passwordConfirm.value = "";
          }}>
            <label htmlFor="fullName">
              Full name
              <input type="text" ref={node => fullName = node} name="fullName" />
            </label>
            <label htmlFor="username">
              Username
              <input type="text" ref={node => username = node} name="username" />
            </label>
            <label htmlFor="email">
              Email
              <input type="email" ref={node => email = node} name="email" />
            </label>
            <label htmlFor="password">
              Password
              <input type="password" ref={node => password = node} name="password" />
            </label>
            <label htmlFor="passwordConfirm">
              Password Confirm
              <input type="password" ref={node => passwordConfirm = node} name="passwordConfirm" />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </section>
      )}
    </Mutation>
  );
}

export default NewUserForm;
