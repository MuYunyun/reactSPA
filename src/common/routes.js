import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Redirect } from 'react-router'
import Container from 'container'
import Login from 'pages/login'
import createHistory from 'history/createBrowserHistory'

const history = createHistory()
const location = history.location

const routes = (
  <HashRouter>
    <div>
      <Route path="/" component={Container} />
      <Route path="/login" component={Login} />
      {location.hash === '#/' ? <Redirect to='/login' /> : ''}
    </div>
  </HashRouter>
  // 以上使用 HashRouter 是为了 github 上展示方便，以上路由写法的缺陷在于加载 login 页时候会把其他页面也加载出来，
  // 下面给出项目中可使用的写法
  // <Switch>
  //   <Route exec path="/" component={Container} />
  //   <Route exec path="/login" component={Login} />
  // </Switch>
)

export default routes
