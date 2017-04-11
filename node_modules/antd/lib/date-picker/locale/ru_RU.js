'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by Andrey Gayvoronsky on 13/04/16.
                                                                                                                                                                                                                                                                   */

var _ru_RU = require('gregorian-calendar/lib/locale/ru_RU');

var _ru_RU2 = _interopRequireDefault(_ru_RU);

var _ru_RU3 = require('rc-calendar/lib/locale/ru_RU');

var _ru_RU4 = _interopRequireDefault(_ru_RU3);

var _ru_RU5 = require('../../time-picker/locale/ru_RU');

var _ru_RU6 = _interopRequireDefault(_ru_RU5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var locale = _extends({}, _ru_RU2["default"]);
locale.lang = _extends({
  placeholder: 'Выберите дату',
  rangePlaceholder: ['Начальная дата', 'Конечная дата']
}, _ru_RU4["default"]);

locale.timePickerLocale = _extends({}, _ru_RU6["default"]);

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

exports["default"] = locale;
module.exports = exports['default'];