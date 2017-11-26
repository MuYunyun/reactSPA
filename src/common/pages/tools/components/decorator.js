import React, { Component } from 'react'

const MyContainer = (WrappedComponent) =>
  class extends Component {
    render() {
      console.log(this.props)
      return <WrappedComponent {...this.props} />
    }
  }

export default MyContainer