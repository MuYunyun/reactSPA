import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route } from 'react-router'
import Container from './container'
import createBrowserHistory from 'history/createBrowserHistory'

const customHistory = createBrowserHistory()
// import * as coupon from './pages/coupon'

const routes = (
  <HashRouter history={customHistory} >
    <div>
      <Route path="/" component={Container} />
    </div>
  </HashRouter>
)

export default routes;
