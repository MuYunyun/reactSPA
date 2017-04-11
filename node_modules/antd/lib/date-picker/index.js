'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rcCalendar = require('rc-calendar');

var _rcCalendar2 = _interopRequireDefault(_rcCalendar);

var _MonthCalendar = require('rc-calendar/lib/MonthCalendar');

var _MonthCalendar2 = _interopRequireDefault(_MonthCalendar);

var _createPicker = require('./createPicker');

var _createPicker2 = _interopRequireDefault(_createPicker);

var _wrapPicker = require('./wrapPicker');

var _wrapPicker2 = _interopRequireDefault(_wrapPicker);

var _RangePicker = require('./RangePicker');

var _RangePicker2 = _interopRequireDefault(_RangePicker);

var _Calendar = require('./Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DatePicker = (0, _wrapPicker2["default"])((0, _createPicker2["default"])(_rcCalendar2["default"]));
var MonthPicker = (0, _wrapPicker2["default"])((0, _createPicker2["default"])(_MonthCalendar2["default"]), 'yyyy-MM');

DatePicker.Calendar = _Calendar2["default"];
DatePicker.RangePicker = (0, _wrapPicker2["default"])(_RangePicker2["default"], 'yyyy-MM-dd');
DatePicker.MonthPicker = MonthPicker;

exports["default"] = DatePicker;
module.exports = exports['default'];