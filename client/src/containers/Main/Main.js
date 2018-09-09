import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Register from '../../components/Register/Register';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
      </Switch>
    </main>
  );
}
 
export default Main;
