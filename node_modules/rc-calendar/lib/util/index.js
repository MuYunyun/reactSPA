'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.getTodayTime = getTodayTime;
exports.getTitleString = getTitleString;
exports.getTodayTimeStr = getTodayTimeStr;
exports.getFormatter = getFormatter;
exports.syncTime = syncTime;
exports.getTimeConfig = getTimeConfig;
exports.isTimeValidByConfig = isTimeValidByConfig;
exports.isTimeValid = isTimeValid;
exports.isAllowedDate = isAllowedDate;

var _gregorianCalendarFormat = require('gregorian-calendar-format');

var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultDisabledTime = {
  disabledHours: function disabledHours() {
    return [];
  },
  disabledMinutes: function disabledMinutes() {
    return [];
  },
  disabledSeconds: function disabledSeconds() {
    return [];
  }
};

function getTodayTime(value) {
  var today = value.clone();
  today.setTime(Date.now());
  return today;
}

function getTitleString(value) {
  return value.getYear() + '-' + (value.getMonth() + 1) + '-' + value.getDayOfMonth();
}

function getTodayTimeStr(value) {
  var today = getTodayTime(value);
  return getTitleString(today);
}

function getFormatter(format, locale) {
  if (typeof format === 'string') {
    return new _gregorianCalendarFormat2["default"](format, locale.format);
  }
  return format;
}

function syncTime(from, to) {
  to.setHourOfDay(from.getHourOfDay());
  to.setMinutes(from.getMinutes());
  to.setSeconds(from.getSeconds());
}

function getTimeConfig(value, disabledTime) {
  var disabledTimeConfig = disabledTime ? disabledTime(value) : {};
  disabledTimeConfig = _extends({}, defaultDisabledTime, disabledTimeConfig);
  return disabledTimeConfig;
}

function isTimeValidByConfig(value, disabledTimeConfig) {
  var invalidTime = false;
  if (value) {
    var hour = value.getHourOfDay();
    var minutes = value.getMinutes();
    var seconds = value.getSeconds();
    var disabledHours = disabledTimeConfig.disabledHours();
    if (disabledHours.indexOf(hour) === -1) {
      var disabledMinutes = disabledTimeConfig.disabledMinutes(hour);
      if (disabledMinutes.indexOf(minutes) === -1) {
        var disabledSeconds = disabledTimeConfig.disabledSeconds(hour, minutes);
        invalidTime = disabledSeconds.indexOf(seconds) !== -1;
      } else {
        invalidTime = true;
      }
    } else {
      invalidTime = true;
    }
  }
  return !invalidTime;
}

function isTimeValid(value, disabledTime) {
  var disabledTimeConfig = getTimeConfig(value, disabledTime);
  return isTimeValidByConfig(value, disabledTimeConfig);
}

function isAllowedDate(value, disabledDate, disabledTime) {
  if (disabledDate) {
    if (disabledDate(value)) {
      return false;
    }
  }
  if (disabledTime) {
    if (!isTimeValid(value, disabledTime)) {
      return false;
    }
  }
  return true;
}