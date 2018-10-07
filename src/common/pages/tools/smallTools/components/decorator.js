import React, { Component } from 'react'

const MyContainer = (WrappedComponent) =>
  class extends Component {
    render() {
      return <WrappedComponent {...this.props} />
    }
  }

export default MyContainer
