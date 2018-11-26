import React from 'react';
import { Query, Mutation } from 'react-apollo';
import { adopt } from 'react-adopt';
import User from './User';
import CartStyles from './styles/CartStyles';
import Supreme from './styles/Supreme';
import CloseButton from './styles/CloseButton';
import SickButton from './styles/SickButton';
import CartItem from './CartItem';
import calcTotalPrice from '../lib/calcTotalPrice';
import formatMoney from '../lib/formatMoney';
import TakeMyMoney from './TakeMyMoney';
import { CART_OPEN_QUERY, TOGGLE_CART_MUTATION } from '../apollo/queries';

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  toggleCart: ({ render }) => <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>,
  localState: ({ render }) =><Query query={CART_OPEN_QUERY}>{render}</Query>
});

const formatName = name => {
  const firstName = name.split(' ')[0];
  return firstName.charAt(0).toUpperCase() + firstName.slice(1);
};

const Cart = () => (
  <Composed>
    {({user, toggleCart, localState}) => {
      // TODO: Maybe should use currentUser.isAuthenticated here
      const { currentUser } = user.data;

      if (!currentUser.isAuthenticated) return null;
      return (
        <CartStyles open={localState.data.cartOpen}>
          <header>
            <CloseButton onClick={toggleCart} title="close">&times;</CloseButton>
            <Supreme>{formatName(currentUser.fullName)}'s Cart</Supreme>
            <p>You have {currentUser.cart.length} Item{currentUser.cart.length === 1 ? '' : 's'} in your cart.</p>
          </header>
          <ul>
            {currentUser.cart.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} />)}
          </ul>
          <footer>
            <p>{formatMoney(calcTotalPrice(currentUser.cart))}</p>
            {currentUser.cart.length && (
              <TakeMyMoney>
                <SickButton>Checkout</SickButton>
              </TakeMyMoney>
            )}
          </footer>
        </CartStyles>
      )
    }}
  </Composed>
);

export default Cart;