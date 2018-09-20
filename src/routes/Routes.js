import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Signin from '../components/Signin/Signin';
import RequestReset from '../components/RequestReset/RequestReset';
import Users from '../containers/Users/Users';
import User from '../components/User/User';
import Signup from '../components/Signup/Signup';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/signin" component={Signin} />
    <Route path="/signup" component={Signup} />
    <Route path="/request-reset" component={RequestReset} />
    <Route path="/registered-users" component={Users} />
    <Route path="/user" component={User} />
  </Switch>
);

export default Routes;