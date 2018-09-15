import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Signup from '../../components/Signup/Signup';
import Landing from '../../components/Landing/Landing';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </main>
  );
}

export default Main;
