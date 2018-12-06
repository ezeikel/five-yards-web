import React from 'react';
import queryString from "query-string";
import PleaseSignIn from "../components/PleaseSignIn";
import Order from "../components/Order";

const orderPage = ({ location }) => (
  <div>
    <PleaseSignIn>
      <Order id={queryString.parse(location.search).id} />
    </PleaseSignIn>
  </div>
);

export default orderPage;
