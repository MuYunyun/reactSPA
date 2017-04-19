import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import Container from './container';
import Welcome from './pages/welcome/welcome'
// import EditMiss from './pages/editMiss';
// import * as coupon from './pages/coupon'
// import * as riderRank from './pages/riderRank'
// import * as financial from './pages/financial'

const routes = (
  <Router>
    <Route path="/" component={Container}>
      <IndexRoute component={Welcome} />
      {/*<Route path="topShop/list" component={Vasp} />*/}
    </Route>
  </Router>
)

export default routes