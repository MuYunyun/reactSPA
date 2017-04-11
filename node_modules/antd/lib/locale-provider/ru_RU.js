'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ru_RU = require('rc-pagination/lib/locale/ru_RU');

var _ru_RU2 = _interopRequireDefault(_ru_RU);

var _ru_RU3 = require('../date-picker/locale/ru_RU');

var _ru_RU4 = _interopRequireDefault(_ru_RU3);

var _ru_RU5 = require('../time-picker/locale/ru_RU');

var _ru_RU6 = _interopRequireDefault(_ru_RU5);

var _ru_RU7 = require('../calendar/locale/ru_RU');

var _ru_RU8 = _interopRequireDefault(_ru_RU7);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/**
 * Created by Andrey Gayvoronsky on 13/04/16.
 */

exports["default"] = {
  Pagination: _ru_RU2["default"],
  DatePicker: _ru_RU4["default"],
  TimePicker: _ru_RU6["default"],
  Calendar: _ru_RU8["default"],
  Table: {
    filterTitle: 'Фильтр',
    filterConfirm: 'OK',
    filterReset: 'Сбросить',
    emptyText: 'Нет данных'
  },
  Modal: {
    okText: 'OK',
    cancelText: 'Отмена',
    justOkText: 'OK'
  },
  Popconfirm: {
    okText: 'OK',
    cancelText: 'Отмена'
  },
  Transfer: {
    notFoundContent: 'Not Found',
    searchPlaceholder: 'Search here',
    itemUnit: 'item',
    itemsUnit: 'items'
  },
  Select: {
    notFoundContent: 'Not Found'
  }
};
module.exports = exports['default'];