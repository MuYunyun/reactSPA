'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var React = require('react');
var Checkbox = require('rc-checkbox');

var Radio = React.createClass({
  displayName: 'Radio',

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-radio',
      type: 'radio'
    };
  },

  render: function render() {
    return React.createElement(Checkbox, _extends({}, this.props, { ref: 'checkbox' }));
  }
});

module.exports = Radio;