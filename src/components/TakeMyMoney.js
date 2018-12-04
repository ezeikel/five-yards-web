import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import StripeCheckout from 'react-stripe-checkout';
import { Mutation } from 'react-apollo';
import NProgress from 'nprogress';
import calcTotalPrice from '../lib/calcTotalPrice';
import User from './User';
import { CURRENT_USER_QUERY, CREATE_ORDER_MUTATION } from '../apollo/queries';

function totalItems(cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

class TakeMyMoney extends Component {
  onToken = async (res, createOrder, history) => {
    NProgress.start();
    console.log('onToken()');
    console.log(res.id);
    // manually call the mutation once we have the stripe token
    const order = await createOrder({
      variables: {
        token: res.id
      }
    }).catch(err => {
      alert(err.message);
    });

    debugger;

    history.push({
      pathname: '/order',
      search: `?id=${order.data.createOrder.id}`
    });
  };

  render() {
    const { history } = this.props;

    return (
      <User>
        {({ data: { currentUser }}) => (
          <Mutation
            mutation={CREATE_ORDER_MUTATION}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
          >
            {createOrder => (
              <StripeCheckout
                amount={calcTotalPrice(currentUser.cart)}
                name="Catch the Drop"
                description={`Order of ${totalItems(currentUser.cart)} items`}
                image={currentUser.cart.length && currentUser.cart[0].item && currentUser.cart[0].item.image}
                stripeKey="pk_test_n51YxU9flEb8OuWR5RiGqDvi"
                currency="USD"
                email={currentUser.email}
                token={res => this.onToken(res, createOrder, history)}
              >
                {this.props.children}
              </StripeCheckout>
            )}
          </Mutation>
        )}
      </User>
    );
  }
}

export default withRouter(TakeMyMoney);
