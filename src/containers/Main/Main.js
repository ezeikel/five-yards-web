import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Signup from '../../components/Signup/Signup';
import Landing from '../../components/Landing/Landing';
import Signin from '../../components/Signin/Signin';
import RequestReset from '../../components/RequestReset/RequestReset';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signin" component={Signin} />
        <Route path="/request-reset" component={RequestReset} />
      </Switch>
    </main>
  );
}

export default Main;
