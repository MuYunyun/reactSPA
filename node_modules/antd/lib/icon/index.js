'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports["default"] = function (props) {
  var type = props.type,
      _props$className = props.className,
      className = _props$className === undefined ? '' : _props$className,
      other = _objectWithoutProperties(props, ['type', 'className']);

  className += ' anticon anticon-' + type;
  return _react2["default"].createElement('i', _extends({ className: className.trim() }, other));
};

module.exports = exports['default'];