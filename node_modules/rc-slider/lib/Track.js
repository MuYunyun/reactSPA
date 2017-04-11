'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Track = function Track(_ref) {
  var className = _ref.className;
  var included = _ref.included;
  var vertical = _ref.vertical;
  var offset = _ref.offset;
  var length = _ref.length;

  var style = {
    visibility: included ? 'visible' : 'hidden'
  };
  if (vertical) {
    style.bottom = offset + '%';
    style.height = length + '%';
  } else {
    style.left = offset + '%';
    style.width = length + '%';
  }
  return _react2["default"].createElement('div', { className: className, style: style });
};

exports["default"] = Track;
module.exports = exports['default'];