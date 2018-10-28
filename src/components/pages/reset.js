import React from 'react';
import queryString from 'query-string';
import Reset from '../Reset';

const ResetPage = props => (
  <div>
    <p>Reset Your Password {queryString.parse(props.location.search).resetToken}</p>
    <Reset resetToken={queryString.parse(props.location.search).resetToken}/>
  </div>
);

export default ResetPage;
