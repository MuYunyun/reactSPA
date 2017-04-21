import React, { Component } from 'react';
import Sidebar from './sidebar'
import Header from './header'
// import './index.css'

export default class Container extends Component {
  render() {
    return (
      <div>
        <Sidebar />
        <Header />
      </div>
    );
  }
}