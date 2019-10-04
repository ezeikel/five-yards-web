import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CURRENT_CACHED_USER_QUERY, REMOVE_FROM_CART_MUTATION } from '../apollo/queries';

const BigButton = styled.button`
  font-size: 3rem;
  background: NONAME;
  border: 0;
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`;

class RemoveFromCart extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  // this gets called as soon as we get a response back from the server after a mutation has been performed
  update = (cache, payload) => {
    // 1. first read the cache
    const data = cache.readQuery({
      query: CURRENT_CACHED_USER_QUERY
    });

    // 2. remove that item from the cart
    const cartItemId = payload.data.removeFromCart.id;

    data.currentUser.cart = data.currentUser.cart.filter(cartItem => cartItem.id !== cartItemId);
    // 3. write it back to the cache
    cache.writeQuery({ query: CURRENT_CACHED_USER_QUERY, data });
    // cache.writeData({
    //   data: {
    //     currentUser: { id, email, username, fullName, cart, permissions, isAuthenticated: true, __typename: "CurrentUser" }
    //   }
    // });
  };

  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_CART_MUTATION}
        variables={{ id: this.props.id }}
        update={this.update}
        optimisticResponse={{
          __typename: 'Mutation',
          removeFromCart: {
            __typename: 'CartItem',
            id: this.props.id
          }
        }}
        refetchQueries={[{ query: CURRENT_CACHED_USER_QUERY }]}
      >
        {(removeFromCart, { loading, error }) => (
          <BigButton
            disabled={loading}
            onClick={() => {
              removeFromCart().catch(err => alert(err.message));
            }}
            title="Delete Item">&times;</BigButton>
        )}
      </Mutation>
    );
  }
}

export default RemoveFromCart;
