import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Signin from '../../components/Signin/Signin';
import RequestReset from '../../components/RequestReset/RequestReset';
import Users from '../Users/Users';
import User from '../../components/User/User';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/request-reset" component={RequestReset} />
        <Route path="/registered-users" component={Users} />
        <Route path="/user" component={User} />
      </Switch>
    </main>
  );
}

export default Main;
