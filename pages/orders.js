import React from "react";
import PleaseSignIn from "../components/PleaseSignIn";
import OrderList from "../components/OrderList";

const ordersPage = () => (
  <div>
    <PleaseSignIn>
      <OrderList />
    </PleaseSignIn>
  </div>
);

export default ordersPage;
