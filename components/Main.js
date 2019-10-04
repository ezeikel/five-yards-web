import { Switch, Route } from 'next/router';
import styled from 'styled-components';
import home from '../pages/index';
import signin from '../pages/signin';
import requestResetPage from '../pages/requestReset';
import Users from './Users';
import User from './User';
import signup from '../pages/signup';
import resetPage from '../pages/reset';
import sellPage from '../pages/sell';
import itemPage from '../pages/item';
import updatePage from '../pages/update';
import orderPage from '../pages/order';
import ordersPage from '../pages/orders';

const Wrapper = styled.main`
  padding: var(--spacing-medium);
`;

const Main = ({ className, active }) => {
  return (
    <Wrapper className={className} active={active}>
      <Switch>
        <Route exact path="/" component={home} />
        <Route path="/signin" component={signin} />
        <Route path="/signup" component={signup} />
        <Route path="/request-reset" component={requestResetPage} />
        <Route path="/reset" component={resetPage} />
        <Route path="/sell" component={sellPage} />
        <Route path="/item" component={itemPage} />
        <Route path="/users" component={Users} />
        <Route path="/user" component={User} />
        <Route path="/update" component={updatePage} />
        <Route path="/orders" component={ordersPage} />
        <Route path="/order" component={orderPage} />
      </Switch>
    </Wrapper>
  );
}

export default Main;
