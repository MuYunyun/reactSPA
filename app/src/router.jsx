import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Redirect } from 'react-router';
import createHistory from 'history/lib/createHashHistory';
const history = createHistory();

// 引入单个页面（包括嵌套的子页面）
import Init from './main.jsx';
import Welcome from './welcome/welcome.jsx';
import Profile from './profile/profile.jsx';
import Campaign from './campaign/campaign.jsx';
import Edit from './edit/edit.jsx';
import Counter from './counter/counter.jsx';
import Charts from './charts/charts.jsx';
import Last from './last/last.jsx';
import NotFoundPage from './nofind/nofind.jsx';
import Login from './login/login.jsx';

// 配置路由，并将路由注入到id为init的DOM元素中
ReactDOM.render(
    <Router history={history} >        
        <Route path="/login" component={Login} />
        <Route path="/" component={Init} >
            <IndexRoute component={Welcome}/>
            <Route path="profile" component={Profile} />
            <Route path="campaign" component={Campaign} />
            <Route path="counter" component={Counter} />
            <Route path="charts" component={Charts} />
            <Route path="last" component={Last} />
            <Route path="edit/:rowId" component={Edit} />
            {/* 404 */}
            <Route path='/404' component={NotFoundPage} />                    
            {/* 其他重定向到 404 */}
            <Redirect from='*' to='/404' />
        </Route>
    </Router>
    , document.querySelector('#init')
)