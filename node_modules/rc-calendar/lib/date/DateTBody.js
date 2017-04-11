'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DateConstants = require('./DateConstants');

var _DateConstants2 = _interopRequireDefault(_DateConstants);

var _util = require('../util/');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isSameDay(one, two) {
  return one && two && one.compareToDay(two) === 0;
}

function beforeCurrentMonthYear(current, today) {
  if (current.getYear() < today.getYear()) {
    return 1;
  }
  return current.getYear() === today.getYear() && current.getMonth() < today.getMonth();
}

function afterCurrentMonthYear(current, today) {
  if (current.getYear() > today.getYear()) {
    return 1;
  }
  return current.getYear() === today.getYear() && current.getMonth() > today.getMonth();
}

function getIdFromDate(date) {
  return 'rc-calendar-' + date.getYear() + '-' + date.getMonth() + '-' + date.getDayOfMonth();
}

function noop() {}

function handleDayClick(current) {
  this.props.onSelect(current);
}

function handleCellMouseEnter(current) {
  this.props.onDayHover(current);
}

var DateTBody = _react2["default"].createClass({
  displayName: 'DateTBody',

  propTypes: {
    contentRender: _react.PropTypes.func,
    dateRender: _react.PropTypes.func,
    disabledDate: _react.PropTypes.func,
    prefixCls: _react.PropTypes.string,
    selectedValue: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.arrayOf(_react.PropTypes.object)]),
    value: _react.PropTypes.object,
    showWeekNumber: _react.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onDayHover: noop
    };
  },
  render: function render() {
    var props = this.props;
    var contentRender = props.contentRender;
    var prefixCls = props.prefixCls;
    var selectedValue = props.selectedValue;
    var value = props.value;
    var showWeekNumber = props.showWeekNumber;
    var dateRender = props.dateRender;
    var disabledDate = props.disabledDate;

    var iIndex = void 0;
    var jIndex = void 0;
    var current = void 0;
    var dateTable = [];
    var today = value.clone();
    var cellClass = prefixCls + '-cell';
    var weekNumberCellClass = prefixCls + '-week-number-cell';
    var dateClass = prefixCls + '-date';
    var todayClass = prefixCls + '-today';
    var selectedClass = prefixCls + '-selected-day';
    var inRangeClass = prefixCls + '-in-range-cell';
    var lastMonthDayClass = prefixCls + '-last-month-cell';
    var nextMonthDayClass = prefixCls + '-next-month-btn-day';
    var disabledClass = prefixCls + '-disabled-cell';
    var firstDisableClass = prefixCls + '-disabled-cell-first-of-row';
    var lastDisableClass = prefixCls + '-disabled-cell-last-of-row';
    today.setTime(Date.now());
    var month1 = value.clone();
    month1.set(value.getYear(), value.getMonth(), 1);
    var day = month1.getDayOfWeek();
    var lastMonthDiffDay = (day + 7 - value.getFirstDayOfWeek()) % 7;
    // calculate last month
    var lastMonth1 = month1.clone();
    lastMonth1.addDayOfMonth(0 - lastMonthDiffDay);
    var passed = 0;
    for (iIndex = 0; iIndex < _DateConstants2["default"].DATE_ROW_COUNT; iIndex++) {
      for (jIndex = 0; jIndex < _DateConstants2["default"].DATE_COL_COUNT; jIndex++) {
        current = lastMonth1;
        if (passed) {
          current = current.clone();
          current.addDayOfMonth(passed);
        }
        dateTable.push(current);
        passed++;
      }
    }
    var tableHtml = [];
    passed = 0;
    for (iIndex = 0; iIndex < _DateConstants2["default"].DATE_ROW_COUNT; iIndex++) {
      var weekNumberCell = void 0;
      var dateCells = [];
      if (showWeekNumber) {
        weekNumberCell = _react2["default"].createElement(
          'td',
          {
            key: dateTable[passed].getWeekOfYear(),
            role: 'gridcell',
            className: weekNumberCellClass
          },
          dateTable[passed].getWeekOfYear()
        );
      }
      for (jIndex = 0; jIndex < _DateConstants2["default"].DATE_COL_COUNT; jIndex++) {
        var next = null;
        var last = null;
        current = dateTable[passed];
        if (jIndex < _DateConstants2["default"].DATE_COL_COUNT - 1) {
          next = dateTable[passed + 1];
        }
        if (jIndex > 0) {
          last = dateTable[passed - 1];
        }
        var cls = cellClass;
        var disabled = false;
        var selected = false;

        if (isSameDay(current, today)) {
          cls += ' ' + todayClass;
        }

        var isBeforeCurrentMonthYear = beforeCurrentMonthYear(current, value);
        var isAfterCurrentMonthYear = afterCurrentMonthYear(current, value);

        if (selectedValue && Array.isArray(selectedValue)) {
          if (!isBeforeCurrentMonthYear && !isAfterCurrentMonthYear) {
            var startValue = selectedValue[0];
            var endValue = selectedValue[1];
            if (startValue) {
              if (isSameDay(current, startValue)) {
                selected = true;
              }
            }
            if (startValue && endValue) {
              if (isSameDay(current, endValue) && !selectedValue.hovering) {
                selected = true;
              } else if (current.compareToDay(startValue) > 0 && current.compareToDay(endValue) < 0) {
                cls += ' ' + inRangeClass;
              }
            }
          }
        } else if (isSameDay(current, value)) {
          // keyboard change value, highlight works
          selected = true;
        }
        if (isBeforeCurrentMonthYear) {
          cls += ' ' + lastMonthDayClass;
        }
        if (isAfterCurrentMonthYear) {
          cls += ' ' + nextMonthDayClass;
        }

        if (disabledDate) {
          if (disabledDate(current, value)) {
            disabled = true;

            if (!last || !disabledDate(last, value)) {
              cls += ' ' + firstDisableClass;
            }

            if (!next || !disabledDate(next, value)) {
              cls += ' ' + lastDisableClass;
            }
          }
        }

        if (selected) {
          cls += ' ' + selectedClass;
        }

        if (disabled) {
          cls += ' ' + disabledClass;
        }

        var dateHtml = void 0;
        if (dateRender) {
          dateHtml = dateRender(current, value);
        } else {
          var content = contentRender ? contentRender(current, value) : current.getDayOfMonth();
          dateHtml = _react2["default"].createElement(
            'div',
            {
              key: getIdFromDate(current),
              className: dateClass,
              'aria-selected': selected,
              'aria-disabled': disabled
            },
            content
          );
        }

        dateCells.push(_react2["default"].createElement(
          'td',
          {
            key: passed,
            onClick: disabled ? noop : handleDayClick.bind(this, current),
            onMouseEnter: disabled ? noop : handleCellMouseEnter.bind(this, current),
            role: 'gridcell',
            title: (0, _util.getTitleString)(current), className: cls
          },
          dateHtml
        ));

        passed++;
      }
      tableHtml.push(_react2["default"].createElement(
        'tr',
        {
          key: iIndex,
          role: 'row'
        },
        weekNumberCell,
        dateCells
      ));
    }
    return _react2["default"].createElement(
      'tbody',
      { className: prefixCls + 'tbody' },
      tableHtml
    );
  }
});

exports["default"] = DateTBody;
module.exports = exports['default'];