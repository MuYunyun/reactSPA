'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var LazyRenderBox = _react2["default"].createClass({
  displayName: 'LazyRenderBox',

  propTypes: {
    className: _react.PropTypes.string,
    visible: _react.PropTypes.bool,
    hiddenClassName: _react.PropTypes.string
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return nextProps.hiddenClassName || nextProps.visible;
  },
  render: function render() {
    var className = this.props.className;
    if (this.props.hiddenClassName && !this.props.visible) {
      className += ' ' + this.props.hiddenClassName;
    }
    var props = _extends({}, this.props);
    delete props.hiddenClassName;
    delete props.visible;
    props.className = className;
    return _react2["default"].createElement('div', props);
  }
});

exports["default"] = LazyRenderBox;
module.exports = exports['default'];