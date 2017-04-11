'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CalendarHeader = require('../calendar/CalendarHeader');

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _DateTable = require('../date/DateTable');

var _DateTable2 = _interopRequireDefault(_DateTable);

var _DateInput = require('../date/DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CalendarPart = _react2["default"].createClass({
  displayName: 'CalendarPart',

  propTypes: {
    value: _react.PropTypes.any,
    direction: _react.PropTypes.any,
    prefixCls: _react.PropTypes.any,
    locale: _react.PropTypes.any,
    selectedValue: _react.PropTypes.any,
    formatter: _react.PropTypes.any,
    placeholder: _react.PropTypes.any,
    disabledDate: _react.PropTypes.any,
    timePicker: _react.PropTypes.any,
    disabledTime: _react.PropTypes.any
  },
  render: function render() {
    var props = this.props;
    var value = props.value;
    var direction = props.direction;
    var prefixCls = props.prefixCls;
    var locale = props.locale;
    var selectedValue = props.selectedValue;
    var formatter = props.formatter;
    var placeholder = props.placeholder;
    var disabledDate = props.disabledDate;
    var timePicker = props.timePicker;
    var disabledTime = props.disabledTime;

    var rangeClassName = prefixCls + '-range';
    var newProps = {
      locale: locale,
      value: value,
      prefixCls: prefixCls
    };
    var index = direction === 'left' ? 0 : 1;
    return _react2["default"].createElement(
      'div',
      { className: rangeClassName + '-part ' + rangeClassName + '-' + direction },
      _react2["default"].createElement(_DateInput2["default"], {
        formatter: formatter,
        locale: locale,
        prefixCls: prefixCls,
        timePicker: timePicker,
        disabledDate: disabledDate,
        placeholder: placeholder,
        disabledTime: disabledTime,
        gregorianCalendarLocale: value.locale,
        showClear: false,
        selectedValue: selectedValue[index],
        onChange: props.onInputSelect
      }),
      _react2["default"].createElement(
        'div',
        { style: { outline: 'none' } },
        _react2["default"].createElement(_CalendarHeader2["default"], _extends({}, newProps, {
          enableNext: direction === 'right',
          enablePrev: direction === 'left',
          onValueChange: props.onValueChange
        })),
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-calendar-body' },
          _react2["default"].createElement(_DateTable2["default"], _extends({}, newProps, {
            selectedValue: selectedValue,
            dateRender: props.dateRender,
            onSelect: props.onSelect,
            onDayHover: props.onDayHover,
            disabledDate: disabledDate,
            showWeekNumber: props.showWeekNumber
          }))
        )
      )
    );
  }
});

exports["default"] = CalendarPart;
module.exports = exports['default'];