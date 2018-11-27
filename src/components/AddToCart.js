import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import { CURRENT_USER_QUERY, ADD_TO_CART_MUTATION } from '../apollo/queries';

class AddToCart extends Component {
  render() {
    const { id } =  this.props;
    return (
      <Mutation
        mutation={ADD_TO_CART_MUTATION}
        variables={{
          id
        }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        update={(cache, { data: { addToCart: { id, email, username, fullName, cart, permissions } } }) => {
          debugger;
          cache.writeData({
            data: {
              currentUser: { id, email, username, fullName, cart, permissions, isAuthenticated: true, __typename: "CurrentUser" }
            }
          });
        }}
        >
          {(addToCart,  { loading }) => (
            <button onClick={addToCart} disabled={loading}>Add{loading && 'ing'} To Cart 🛒</button>
          )}
      </Mutation>
    );
  }
}

export default AddToCart;
