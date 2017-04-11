'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MonthPanel = require('./month/MonthPanel');

var _MonthPanel2 = _interopRequireDefault(_MonthPanel);

var _CalendarMixin = require('./mixin/CalendarMixin');

var _CalendarMixin2 = _interopRequireDefault(_CalendarMixin);

var _CommonMixin = require('./mixin/CommonMixin');

var _CommonMixin2 = _interopRequireDefault(_CommonMixin);

var _KeyCode = require('rc-util/lib/KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var MonthCalendar = _react2["default"].createClass({
  displayName: 'MonthCalendar',

  mixins: [_CommonMixin2["default"], _CalendarMixin2["default"]],

  onKeyDown: function onKeyDown(event) {
    var keyCode = event.keyCode;
    var ctrlKey = event.ctrlKey || event.metaKey;
    var stateValue = this.state.value;
    var value = stateValue;
    switch (keyCode) {
      case _KeyCode2["default"].DOWN:
        value = stateValue.clone();
        value.addMonth(3);
        break;
      case _KeyCode2["default"].UP:
        value = stateValue.clone();
        value.addMonth(-3);
        break;
      case _KeyCode2["default"].LEFT:
        value = stateValue.clone();
        if (ctrlKey) {
          value.addYear(-1);
        } else {
          value.addMonth(-1);
        }
        break;
      case _KeyCode2["default"].RIGHT:
        value = stateValue.clone();
        if (ctrlKey) {
          value.addYear(1);
        } else {
          value.addMonth(1);
        }
        break;
      case _KeyCode2["default"].ENTER:
        this.onSelect(stateValue);
        event.preventDefault();
        return 1;
      default:
        return undefined;
    }
    if (value !== stateValue) {
      this.setValue(value);
      event.preventDefault();
      return 1;
    }
  },
  render: function render() {
    var props = this.props;
    var children = _react2["default"].createElement(_MonthPanel2["default"], {
      locale: props.locale,
      disabledDate: props.disabledDate,
      style: { position: 'relative' },
      value: this.state.value,
      rootPrefixCls: props.prefixCls,
      onChange: this.setValue,
      onSelect: this.onSelect
    });
    return this.renderRoot({
      children: children
    });
  }
});

exports["default"] = MonthCalendar;
module.exports = exports['default'];