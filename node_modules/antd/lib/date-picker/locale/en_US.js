'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _en_US = require('gregorian-calendar/lib/locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _en_US3 = require('rc-calendar/lib/locale/en_US');

var _en_US4 = _interopRequireDefault(_en_US3);

var _en_US5 = require('../../time-picker/locale/en_US');

var _en_US6 = _interopRequireDefault(_en_US5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// 统一合并为完整的 Locale
var locale = _extends({}, _en_US2["default"]);
locale.lang = _extends({
  placeholder: 'Select date',
  rangePlaceholder: ['Start date', 'End date']
}, _en_US4["default"]);

locale.timePickerLocale = _extends({}, _en_US6["default"]);

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

exports["default"] = locale;
module.exports = exports['default'];