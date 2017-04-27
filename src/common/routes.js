import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router'
import Container from 'container'
import Login from 'pages/login'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()
// import * as coupon from './pages/coupon'

const routes = (
  <HashRouter history={customHistory} >
    <div>
      <Route path="/" component={Container} />
      <Route path="/login" component={Login} />
    </div>
  </HashRouter>
)

export default routes;
