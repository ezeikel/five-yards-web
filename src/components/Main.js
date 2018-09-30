import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Signin';
import RequestReset from './RequestReset';
import Users from './Users';
import User from './User';
import Signup from './pages/Signup';
import styled from 'styled-components';

const Wrapper = styled.main`
  padding: var(--spacing-medium);
`;

const Main = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/request-reset" component={RequestReset} />
        <Route path="/users" component={Users} />
        <Route path="/user" component={User} />
      </Switch>
    </Wrapper>
  );
}

export default Main;
