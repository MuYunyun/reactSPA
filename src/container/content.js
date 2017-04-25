import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.css'
import login from '../pages/login/login'
import follow from '../pages/follow/follow'
import Tools from '../pages/tools/tool'
import Test from '../pages/test/test'

const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
        <Route path="/login" component={login} />
        <Route path="/follow" component={follow} />
        <Route path="/tools" component={Tools} />
        <Route path="/test" component={Test} />
      </Content>
    );
  }
}