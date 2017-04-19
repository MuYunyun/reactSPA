import React from 'react';
import ReactDOM from 'react-dom';
import App from './container/index';
import routes from './routes';

// import { render } from 'react-dom'
// import { Router, Route, Link, hashHistory, IndexRoute, Redirect, IndexLink} from 'react-router'
// import Container from './container';
// import Welcome from './pages/welcome/welcome'


// render() {
//   return (
//     <App />
//   )
// }

ReactDOM.render(
  <App />
  , document.getElementById('root')
);