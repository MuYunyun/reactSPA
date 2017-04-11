'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _progress = require('./progress');

var _progress2 = _interopRequireDefault(_progress);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AntProgress = _progress2["default"];

// For downward compatibility
AntProgress.Line = function (props) {
  (0, _warning2["default"])(false, '<Progress.Line /> is deprecated, use <Progress type="line" /> instead.');
  return _react2["default"].createElement(_progress2["default"], _extends({}, props, { type: 'line' }));
};
AntProgress.Circle = function (props) {
  (0, _warning2["default"])(false, '<Progress.Circle /> is deprecated, use <Progress type="circle" /> instead.');
  return _react2["default"].createElement(_progress2["default"], _extends({}, props, { type: 'circle' }));
};

exports["default"] = AntProgress;
module.exports = exports['default'];