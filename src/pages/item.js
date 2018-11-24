import React from 'react';
import queryString from 'query-string';
import SingleItem from '../components/SingleItem';

const itemPage = ({ location }) => (
  <div>
    <SingleItem  id={queryString.parse(location.search).id} />
  </div>
);

export default itemPage;
