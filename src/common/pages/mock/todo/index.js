import React, { Component } from 'react'
import './index.less'

const MyContainer = (WrappedComponent) =>
  class extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

// 装饰器的前世今生
@MyContainer
class todo extends Component {
  render() {
    return (
      <div className="animated swing todo">
        <div>该项目会把日常开发中遇到的案例抽离成 demo 展现出来，同时会对一些知识点进行实践，最终的目的是产出一套针对中后台开发相对完善的使用方案。</div>
      </div>
    )
  }
}

export default todo