import React from 'react';
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import './content.less'
import follow from 'pages/follow'
import Tools from 'pages/tools'
import Music from 'pages/music'
import Todo from 'pages/todo'

const { Content } = Layout

export default class Contents extends React.Component {
  render() {
    return (
      <Content className="content">
        <Route path="/follow" component={follow} />
        <Route path="/tools" component={Tools} />
        <Route path="/music" component={Music} />
        <Route path="/todo" component={Todo} />
      </Content>
    );
  }
}