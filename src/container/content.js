import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.less'
import login from '../pages/login/login'
import follow from '../pages/follow/follow'
import Tools from '../pages/tools/tool'
import Advertising from '../pages/advertising/advertising'

const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
        <Route path="/login" component={login} />
        <Route path="/follow" component={follow} />
        <Route path="/tools" component={Tools} />
        <Route path="/advertising" component={Advertising} />
      </Content>
    );
  }
}