import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { distanceInWordsToNow } from 'date-fns';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import formatMoney from '../lib/formatMoney';
import OrderItemStyles from './styles/OrderItemStyles';
import Error from './ErrorMessage'
import { USER_ORDERS_QUERY } from '../apollo/queries';

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(auto-fit, minmax(40%, 1fr));
`;

class OrderList extends Component {
  render() {
    return (
      <Query
        query={USER_ORDERS_QUERY}
      >
        {({ data: { orders }, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <Error error={error} />;

          return (
            <div>
              <h2>You have {orders.length} orders</h2>
              <OrderUl>
                {orders.map(order => (
                  <OrderItemStyles key={order.id}>
                    <Link to={{
                      pathname: '/order',
                      search: `?id=${order.id}`
                    }}>
                      <div className="order-meta">
                        <p>{order.items.reduce((a, b) => a + b.quantity, 0)} Items</p>
                        <p>{order.items.length} Products</p>
                        <p>{distanceInWordsToNow(order.createdAt)}</p>
                        <p>{formatMoney(order.total)}</p>
                      </div>
                      <div className="images">
                        {order.items.map(item => (
                          <img key={item.id} src={item.image} alt={item.title} />
                        ))}
                      </div>
                    </Link>
                  </OrderItemStyles>
                ))}
              </OrderUl>
            </div>
          )
        }}
      </Query>
    );
  }
}

export default OrderList;