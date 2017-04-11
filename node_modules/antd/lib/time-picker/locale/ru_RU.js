'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Created by Andrey Gayvoronsky on 13/04/16.
                                                                                                                                                                                                                                                                   */


var _ru_RU = require('rc-time-picker/lib/locale/ru_RU');

var _ru_RU2 = _interopRequireDefault(_ru_RU);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var locale = _extends({
  placeholder: 'Выберите время'
}, _ru_RU2["default"]);

exports["default"] = locale;
module.exports = exports['default'];