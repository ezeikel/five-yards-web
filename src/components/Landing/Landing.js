import React from 'react';
import styled from 'styled-components';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';
import RequestReset from '../RequestReset/RequestReset';
import Signout from '../Signout/Signout';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

const Landing = props => (
  <Wrapper>
    <Signup />
    <Signin />
    <Signout />
    <RequestReset />
  </Wrapper>
);

export default Landing;