import React from 'react';
import queryString from 'query-string';
import SingleItem from '../components/SingleItem';

const itemPage = props => (
  <div>
    <SingleItem  id={queryString.parse(props.location.search).id} />
  </div>
);

export default itemPage;
