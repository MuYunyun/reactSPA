'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Group;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function Group(props) {
  var className = (0, _classnames2["default"])(_defineProperty({
    'ant-input-group': true,
    'ant-input-group-lg': props.size === 'large',
    'ant-input-group-sm': props.size === 'small'
  }, props.className, !!props.className));
  return _react2["default"].createElement(
    'span',
    { className: className, style: props.style },
    props.children
  );
}

Group.propTypes = {
  children: _react2["default"].PropTypes.any
};
module.exports = exports['default'];