import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from './pages/index';
import Dashboard from './pages/dashboard';
import Statistics from './pages/dashboard/statistics';
import Accounts from './pages/dashboard/accounts';
import Products from './pages/dashboard/products';
import Revenue from './pages/dashboard/revenue';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={LoginPage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/dashboard/statistics" component={Statistics} />
      <Route exact path="/dashboard/account-approval" component={Accounts} />
      <Route exact path="/dashboard/product-approval" component={Products} />
      <Route exact path="/dashboard/revenue-remittance" component={Revenue} />
    </Switch>
  );
};

export default Routes;
