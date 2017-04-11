'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Divider = _react2["default"].createClass({
  displayName: 'Divider',
  getDefaultProps: function getDefaultProps() {
    return {
      disabled: true
    };
  },
  render: function render() {
    var props = this.props;
    var className = props.className || '';
    var rootPrefixCls = props.rootPrefixCls;
    className += ' ' + (rootPrefixCls + '-item-divider');
    return _react2["default"].createElement('li', { className: className });
  }
});

exports["default"] = Divider;
module.exports = exports['default'];