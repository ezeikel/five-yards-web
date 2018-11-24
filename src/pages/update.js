import React from 'react';
import queryString from 'query-string';
import UpdateItem from '../components/UpdateItem';

const updatePage = ({ location }) => (
  <div>
    <UpdateItem id={queryString.parse(location.search).id} />
  </div>
);

export default updatePage;
