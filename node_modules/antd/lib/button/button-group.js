'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = ButtonGroup;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var prefix = 'ant-btn-group-';

function ButtonGroup(props) {
  var _classNames;

  var size = props.size,
      className = props.className,
      others = _objectWithoutProperties(props, ['size', 'className']);

  // large => lg
  // small => sm


  var sizeCls = {
    large: 'lg',
    small: 'sm'
  }[size] || '';

  var classes = (0, _classnames2["default"])((_classNames = {
    'ant-btn-group': true
  }, _defineProperty(_classNames, prefix + sizeCls, sizeCls), _defineProperty(_classNames, className, className), _classNames));

  return _react2["default"].createElement('div', _extends({}, others, { className: classes }));
}

ButtonGroup.propTypes = {
  size: _react2["default"].PropTypes.oneOf(['large', 'default', 'small'])
};
module.exports = exports['default'];