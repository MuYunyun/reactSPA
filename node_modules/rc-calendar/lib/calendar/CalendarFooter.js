'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _mapSelf = require('rc-util/lib/Children/mapSelf');

var _mapSelf2 = _interopRequireDefault(_mapSelf);

var _TodayButton = require('../calendar/TodayButton');

var _TodayButton2 = _interopRequireDefault(_TodayButton);

var _OkButton = require('../calendar/OkButton');

var _OkButton2 = _interopRequireDefault(_OkButton);

var _index = require('../util/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CalendarFooter = _react2["default"].createClass({
  displayName: 'CalendarFooter',

  propTypes: {
    prefixCls: _react.PropTypes.string,
    showDateInput: _react.PropTypes.bool,
    disabledTime: _react.PropTypes.any,
    gregorianCalendarLocale: _react.PropTypes.object,
    selectedValue: _react.PropTypes.any,
    showOk: _react.PropTypes.bool,
    onSelect: _react.PropTypes.func,
    value: _react.PropTypes.object,
    defaultValue: _react.PropTypes.object
  },

  onSelect: function onSelect(value) {
    this.props.onSelect(value);
  },
  getRootDOMNode: function getRootDOMNode() {
    return _reactDom2["default"].findDOMNode(this);
  },
  render: function render() {
    var props = this.props;
    var value = props.value;
    var prefixCls = props.prefixCls;
    var showDateInput = props.showDateInput;
    var disabledTime = props.disabledTime;
    var gregorianCalendarLocale = props.gregorianCalendarLocale;
    var selectedValue = props.selectedValue;
    var showOk = props.showOk;

    var timePicker = !showDateInput && props.timePicker || null;
    var disabledTimeConfig = disabledTime && timePicker ? (0, _index.getTimeConfig)(selectedValue, disabledTime) : null;
    var footerEl = null;
    if (props.showToday || timePicker) {
      var nowEl = void 0;
      if (props.showToday) {
        nowEl = _react2["default"].createElement(_TodayButton2["default"], _extends({}, props, { value: value }));
      }
      var okBtn = void 0;
      if (showOk === true || showOk !== false && !!props.timePicker) {
        okBtn = _react2["default"].createElement(_OkButton2["default"], props);
      }
      var footerBtn = void 0;
      if (nowEl || okBtn) {
        footerBtn = _react2["default"].createElement(
          'span',
          { className: prefixCls + '-footer-btn' },
          (0, _mapSelf2["default"])([nowEl, okBtn])
        );
      }
      if (timePicker) {
        timePicker = _react2["default"].cloneElement(timePicker, _extends({
          onChange: this.onSelect,
          allowEmpty: false,
          gregorianCalendarLocale: gregorianCalendarLocale
        }, disabledTimeConfig, {
          getPopupContainer: this.getRootDOMNode,
          value: selectedValue
        }));
      }
      footerEl = _react2["default"].createElement(
        'div',
        { className: prefixCls + '-footer' },
        timePicker,
        footerBtn
      );
    }
    return footerEl;
  }
});

exports["default"] = CalendarFooter;
module.exports = exports['default'];