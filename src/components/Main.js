import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';
import home from '../pages/home';
import Signin from '../pages/signin';
import requestResetPage from '../pages/requestReset';
import Users from './Users';
import User from './User';
import Signup from '../pages/signup';
import resetPage from '../pages/reset';

const Wrapper = styled.main`
  padding: var(--spacing-medium);
`;

const Main = () => {
  return (
    <Wrapper>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/request-reset" component={requestResetPage} />
        <Route path="/reset" component={resetPage} />
        <Route path="/users" component={Users} />
        <Route path="/user" component={User} />
      </Switch>
    </Wrapper>
  );
}

export default Main;
