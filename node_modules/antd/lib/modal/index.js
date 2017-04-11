'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _confirm = require('./confirm');

var _confirm2 = _interopRequireDefault(_confirm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_Modal2["default"].info = function (props) {
  var config = _extends({
    type: 'info',
    iconType: 'info-circle',
    okCancel: false
  }, props);
  return (0, _confirm2["default"])(config);
};

_Modal2["default"].success = function (props) {
  var config = _extends({
    type: 'success',
    iconType: 'check-circle',
    okCancel: false
  }, props);
  return (0, _confirm2["default"])(config);
};

_Modal2["default"].error = function (props) {
  var config = _extends({
    type: 'error',
    iconType: 'cross-circle',
    okCancel: false
  }, props);
  return (0, _confirm2["default"])(config);
};

_Modal2["default"].warning = _Modal2["default"].warn = function (props) {
  var config = _extends({
    type: 'warning',
    iconType: 'exclamation-circle',
    okCancel: false
  }, props);
  return (0, _confirm2["default"])(config);
};

_Modal2["default"].confirm = function (props) {
  var config = _extends({
    type: 'confirm',
    okCancel: true
  }, props);
  return (0, _confirm2["default"])(config);
};

exports["default"] = _Modal2["default"];
module.exports = exports['default'];