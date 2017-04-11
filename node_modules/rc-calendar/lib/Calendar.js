'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

var _KeyCode = require('rc-util/lib/KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _DateTable = require('./date/DateTable');

var _DateTable2 = _interopRequireDefault(_DateTable);

var _CalendarHeader = require('./calendar/CalendarHeader');

var _CalendarHeader2 = _interopRequireDefault(_CalendarHeader);

var _CalendarFooter = require('./calendar/CalendarFooter');

var _CalendarFooter2 = _interopRequireDefault(_CalendarFooter);

var _CalendarMixin = require('./mixin/CalendarMixin');

var _CalendarMixin2 = _interopRequireDefault(_CalendarMixin);

var _CommonMixin = require('./mixin/CommonMixin');

var _CommonMixin2 = _interopRequireDefault(_CommonMixin);

var _DateInput = require('./date/DateInput');

var _DateInput2 = _interopRequireDefault(_DateInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

function goStartMonth() {
  var next = this.state.value.clone();
  next.setDayOfMonth(1);
  this.setValue(next);
}

function goEndMonth() {
  var next = this.state.value.clone();
  next.setDayOfMonth(next.getActualMaximum(_gregorianCalendar2["default"].MONTH));
  this.setValue(next);
}

function goMonth(direction) {
  var next = this.state.value.clone();
  next.addMonth(direction);
  this.setValue(next);
}

function goYear(direction) {
  var next = this.state.value.clone();
  next.addYear(direction);
  this.setValue(next);
}

function goWeek(direction) {
  var next = this.state.value.clone();
  next.addWeekOfYear(direction);
  this.setValue(next);
}

function goDay(direction) {
  var next = this.state.value.clone();
  next.addDayOfMonth(direction);
  this.setValue(next);
}

var Calendar = _react2["default"].createClass({
  displayName: 'Calendar',

  propTypes: {
    disabledDate: _react.PropTypes.func,
    disabledTime: _react.PropTypes.any,
    value: _react.PropTypes.object,
    selectedValue: _react.PropTypes.object,
    defaultValue: _react.PropTypes.object,
    className: _react.PropTypes.string,
    locale: _react.PropTypes.object,
    showWeekNumber: _react.PropTypes.bool,
    style: _react.PropTypes.object,
    showToday: _react.PropTypes.bool,
    showDateInput: _react.PropTypes.bool,
    visible: _react.PropTypes.bool,
    onSelect: _react.PropTypes.func,
    onOk: _react.PropTypes.func,
    showOk: _react.PropTypes.bool,
    prefixCls: _react.PropTypes.string,
    onKeyDown: _react.PropTypes.func,
    timePicker: _react.PropTypes.element,
    dateInputPlaceholder: _react.PropTypes.any,
    onClear: _react.PropTypes.func,
    onChange: _react.PropTypes.func
  },

  mixins: [_CommonMixin2["default"], _CalendarMixin2["default"]],

  getDefaultProps: function getDefaultProps() {
    return {
      showToday: true,
      showDateInput: true,
      timePicker: null,
      onOk: noop
    };
  },
  onKeyDown: function onKeyDown(event) {
    if (event.target.nodeName.toLowerCase() === 'input') {
      return undefined;
    }
    var keyCode = event.keyCode;
    // mac
    var ctrlKey = event.ctrlKey || event.metaKey;
    switch (keyCode) {
      case _KeyCode2["default"].DOWN:
        goWeek.call(this, 1);
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].UP:
        goWeek.call(this, -1);
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].LEFT:
        if (ctrlKey) {
          goYear.call(this, -1);
        } else {
          goDay.call(this, -1);
        }
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].RIGHT:
        if (ctrlKey) {
          goYear.call(this, 1);
        } else {
          goDay.call(this, 1);
        }
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].HOME:
        goStartMonth.call(this);
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].END:
        goEndMonth.call(this);
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].PAGE_DOWN:
        goMonth.call(this, 1);
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].PAGE_UP:
        goMonth.call(this, -1);
        event.preventDefault();
        return 1;
      case _KeyCode2["default"].ENTER:
        this.onSelect(this.state.value, {
          source: 'keyboard'
        });
        event.preventDefault();
        return 1;
      default:
        this.props.onKeyDown(event);
        return 1;
    }
  },
  onClear: function onClear() {
    this.onSelect(null);
    this.props.onClear();
  },
  onOk: function onOk() {
    var selectedValue = this.state.selectedValue;

    if (this.isAllowedDate(selectedValue)) {
      this.props.onOk(selectedValue);
    }
  },
  onDateInputChange: function onDateInputChange(value) {
    this.onSelect(value, {
      source: 'dateInput'
    });
  },
  onDateTableSelect: function onDateTableSelect(value) {
    this.onSelect(value);
  },
  chooseToday: function chooseToday() {
    var today = this.state.value.clone();
    today.setTime(Date.now());
    this.onSelect(today, {
      source: 'todayButton'
    });
  },
  render: function render() {
    var props = this.props;
    var locale = props.locale;
    var prefixCls = props.prefixCls;
    var disabledDate = props.disabledDate;
    var dateInputPlaceholder = props.dateInputPlaceholder;
    var timePicker = props.timePicker;
    var disabledTime = props.disabledTime;

    var state = this.state;
    var value = state.value;
    var selectedValue = state.selectedValue;

    var dateInputElement = props.showDateInput ? _react2["default"].createElement(_DateInput2["default"], {
      ref: 'dateInput',
      formatter: this.getFormatter(),
      key: 'date-input',
      timePicker: timePicker,
      gregorianCalendarLocale: value.locale,
      locale: locale,
      placeholder: dateInputPlaceholder,
      showClear: true,
      disabledTime: disabledTime,
      disabledDate: disabledDate,
      onClear: this.onClear,
      prefixCls: prefixCls,
      selectedValue: selectedValue,
      onChange: this.onDateInputChange
    }) : null;
    var children = [dateInputElement, _react2["default"].createElement(
      'div',
      {
        key: 'date-panel',
        className: prefixCls + '-date-panel'
      },
      _react2["default"].createElement(_CalendarHeader2["default"], {
        locale: locale,
        onValueChange: this.setValue,
        value: value,
        prefixCls: prefixCls
      }),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-calendar-body' },
        _react2["default"].createElement(_DateTable2["default"], {
          locale: locale,
          value: value,
          selectedValue: selectedValue,
          prefixCls: prefixCls,
          dateRender: props.dateRender,
          onSelect: this.onDateTableSelect,
          disabledDate: disabledDate,
          showWeekNumber: props.showWeekNumber
        })
      ),
      _react2["default"].createElement(_CalendarFooter2["default"], {
        showOk: props.showOk,
        locale: locale,
        prefixCls: prefixCls,
        showToday: props.showToday,
        disabledTime: disabledTime,
        gregorianCalendarLocale: value.locale,
        showDateInput: props.showDateInput,
        timePicker: timePicker,
        selectedValue: selectedValue,
        value: value,
        disabledDate: disabledDate,
        onOk: this.onOk,
        onSelect: this.onSelect,
        onToday: this.chooseToday
      })
    )];

    return this.renderRoot({
      children: children,
      className: props.showWeekNumber ? prefixCls + '-week-number' : ''
    });
  }
});

exports["default"] = Calendar;
module.exports = exports['default'];