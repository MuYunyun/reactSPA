import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createHashHistory'
import routes from '../common/routes'
import './index.less'
import DevTools from './devTools'
import configureStore from './store/configureStore'

const history = createHistory()

const store = configureStore()

/* eslint-disable */
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        { routes }
        {ENABLE_DEVTOOLS ? <DevTools /> : ''}
      </div>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
