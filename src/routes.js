import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';
import CiliosPage from './pages/Cilios';
import SobrancelhasPage from './pages/Sobrancelhas';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/cilios" exact component={CiliosPage} />
    <Route path="/sobrancelhas" component={SobrancelhasPage} />
  </Switch>
);

export default Routes;
