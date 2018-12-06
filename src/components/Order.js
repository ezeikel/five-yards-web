import React, { Component } from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import { format } from "date-fns";
import { Helmet } from "react-helmet";
import formatMoney from "../lib/formatMoney";
import Error from "./ErrorMessage";
import OrderStyles from "./styles/OrderStyles";
import { SINGLE_ORDER_QUERY } from '../apollo/queries';

class Order extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };

  render() {
    debugger;
    return (
      <Query query={SINGLE_ORDER_QUERY} variables={{ id: this.props.id }}>
        {({ data, error, loading }) => {
          if (error) return <Error error={error} />;
          if (loading) return <p>Loading...</p>;
          console.log(data);
          const { order } = data;
          return <OrderStyles>
              <Helmet>
                <title>Five Yards | {order.id}</title>
              </Helmet>
              <p>
                <span>Order ID:</span>
                <span>{this.props.id}</span>
              </p>
              <p>
                <span>Charge</span>
                <span>{order.charge}</span>
              </p>
              <p>
                <span>Date</span>
                <span>
                  {format(order.createdAt, "MMMM d, YYYY h:mm a")}
                </span>
              </p>
              <p>
                <span>Order Total</span>
                <span>{formatMoney(order.total)}</span>
              </p>
              <p>
                <span>Item Count</span>
                <span>{order.items.length}</span>
              </p>
              <div className="items">
                {order.items.map(item => (
                  <div className="order-item" key={item.id}>
                    <img src={item.image} alt={item.title} />
                    <div className="item-details">
                      <h2>{item.title}</h2>
                      <p>Qty: {item.quantity}</p>
                      <p>
                        Each:{" "}
                        {formatMoney(item.price * item.quantity)}
                      </p>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </OrderStyles>;
        }}
      </Query>
    );
  }
}

export default Order;
