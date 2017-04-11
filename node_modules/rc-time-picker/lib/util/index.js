'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.getFormatter = getFormatter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _gregorianCalendarFormat = require('gregorian-calendar-format');

var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);

function getFormatter(format, locale) {
  if (typeof format === 'string') {
    return new _gregorianCalendarFormat2['default'](format, locale.format);
  }
  return format;
}