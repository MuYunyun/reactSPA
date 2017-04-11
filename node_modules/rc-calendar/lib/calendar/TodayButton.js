'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = TodayButton;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('../util/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function TodayButton(_ref) {
  var prefixCls = _ref.prefixCls;
  var locale = _ref.locale;
  var value = _ref.value;
  var timePicker = _ref.timePicker;
  var disabledDate = _ref.disabledDate;
  var disabledTime = _ref.disabledTime;
  var onToday = _ref.onToday;
  var text = _ref.text;

  var disabledToday = false;
  var localeNow = text;
  if (!localeNow && timePicker) {
    localeNow = locale.now;
  }
  localeNow = localeNow || locale.today;
  var disabledTodayClass = '';
  if (disabledDate) {
    disabledToday = !(0, _util.isAllowedDate)((0, _util.getTodayTime)(value), disabledDate, disabledTime);
    if (disabledToday) {
      disabledTodayClass = prefixCls + '-today-btn-disabled';
    }
  }
  return _react2["default"].createElement(
    'a',
    {
      className: prefixCls + '-today-btn ' + disabledTodayClass,
      role: 'button',
      onClick: disabledToday ? null : onToday,
      title: (0, _util.getTodayTimeStr)(value)
    },
    localeNow
  );
}
module.exports = exports['default'];