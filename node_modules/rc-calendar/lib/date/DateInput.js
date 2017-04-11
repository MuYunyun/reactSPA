'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _index = require('../util/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function copyTime(target, source) {
  if (source) {
    target.setHourOfDay(source.getHourOfDay());
    target.setMinutes(source.getMinutes());
    target.setSeconds(source.getSeconds());
  }
  return target;
}

var DateInput = _react2["default"].createClass({
  displayName: 'DateInput',

  propTypes: {
    prefixCls: _react.PropTypes.string,
    timePicker: _react.PropTypes.object,
    disabledTime: _react.PropTypes.any,
    formatter: _react.PropTypes.object,
    locale: _react.PropTypes.object,
    gregorianCalendarLocale: _react.PropTypes.object,
    disabledDate: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onClear: _react.PropTypes.func,
    placeholder: _react.PropTypes.string,
    onSelect: _react.PropTypes.func,
    selectedValue: _react.PropTypes.object
  },

  getInitialState: function getInitialState() {
    var selectedValue = this.props.selectedValue;
    return {
      str: selectedValue && this.props.formatter.format(selectedValue) || '',
      invalid: false
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    // when popup show, click body will call this, bug!
    var selectedValue = nextProps.selectedValue;
    this.setState({
      str: selectedValue && nextProps.formatter.format(selectedValue) || '',
      invalid: false
    });
  },
  onInputChange: function onInputChange(event) {
    var str = event.target.value;
    this.setState({
      str: str
    });
    var value = void 0;
    var _props = this.props;
    var disabledDate = _props.disabledDate;
    var formatter = _props.formatter;
    var gregorianCalendarLocale = _props.gregorianCalendarLocale;
    var onChange = _props.onChange;

    if (str) {
      try {
        value = copyTime(formatter.parse(str, {
          locale: gregorianCalendarLocale,
          obeyCount: true
        }), this.props.selectedValue);
      } catch (ex) {
        this.setState({
          invalid: true
        });
        return;
      }
      if (value && (!disabledDate || !disabledDate(value))) {
        var originalValue = this.props.selectedValue;
        if (originalValue && value) {
          if (originalValue.getTime() !== value.getTime()) {
            onChange(value);
          }
        } else if (originalValue !== value) {
          onChange(value);
        }
      } else {
        this.setState({
          invalid: true
        });
        return;
      }
    } else {
      onChange(null);
    }
    this.setState({
      invalid: false
    });
  },
  onClear: function onClear() {
    this.setState({
      str: ''
    });
    this.props.onClear(null);
  },
  getRootDOMNode: function getRootDOMNode() {
    return _reactDom2["default"].findDOMNode(this);
  },
  focus: function focus() {
    this.refs.dateInput.focus();
  },
  render: function render() {
    var props = this.props;
    var _state = this.state;
    var invalid = _state.invalid;
    var str = _state.str;
    var selectedValue = props.selectedValue;
    var locale = props.locale;
    var prefixCls = props.prefixCls;
    var placeholder = props.placeholder;
    var onChange = props.onChange;
    var timePicker = props.timePicker;
    var disabledTime = props.disabledTime;
    var gregorianCalendarLocale = props.gregorianCalendarLocale;

    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
    var disabledTimeConfig = disabledTime && timePicker ? (0, _index.getTimeConfig)(selectedValue, disabledTime) : null;
    return _react2["default"].createElement(
      'div',
      { className: prefixCls + '-input-wrap' },
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-time-picker-wrap' },
        timePicker ? _react2["default"].cloneElement(timePicker, _extends({
          showClear: false,
          allowEmpty: false,
          getPopupContainer: this.getRootDOMNode,
          gregorianCalendarLocale: gregorianCalendarLocale,
          value: selectedValue,
          onChange: onChange
        }, disabledTimeConfig)) : null
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-date-input-wrap' },
        _react2["default"].createElement('input', {
          ref: 'dateInput',
          className: prefixCls + '-input  ' + invalidClass,
          value: str,
          placeholder: placeholder,
          onChange: this.onInputChange
        })
      ),
      props.showClear ? _react2["default"].createElement('a', {
        className: prefixCls + '-clear-btn',
        role: 'button',
        title: locale.clear,
        onClick: this.onClear
      }) : null
    );
  }
});

exports["default"] = DateInput;
module.exports = exports['default'];