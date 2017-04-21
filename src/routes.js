import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router'
import Container from './container'
import Welcome from './pages/welcome/welcome'
import login from './pages/login/login'
import createBrowserHistory from 'history/createBrowserHistory'
import follow from './pages/follow/follow'

const customHistory = createBrowserHistory()
// import EditMiss from './pages/editMiss';
// import * as coupon from './pages/coupon'
// import * as riderRank from './pages/riderRank'
// import * as financial from './pages/financial'

const routes = (
  <HashRouter history={customHistory} >
    <div>
      <Route path="/" component={Container} />
      <Route path="/login" component={login} />
      <Route path="/welcome" component={Welcome} />
      <Route path="/follow" component={follow} />
    </div>
  </HashRouter>
)

export default routes