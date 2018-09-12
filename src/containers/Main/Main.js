import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Signup from '../../components/Signup/Signup';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </main>
  );
}

export default Main;
