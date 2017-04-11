'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gregorianCalendarFormat = require('gregorian-calendar-format');

var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);

var _TimePicker = require('rc-time-picker/lib/TimePicker');

var _TimePicker2 = _interopRequireDefault(_TimePicker);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var TimePicker = (_temp2 = _class = function (_React$Component) {
  _inherits(TimePicker, _React$Component);

  function TimePicker() {
    var _temp, _this, _ret;

    _classCallCheck(this, TimePicker);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleChange = function (value) {
      _this.props.onChange(value ? new Date(value.getTime()) : null, value ? _this.getFormatter().format(value) : '');
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  TimePicker.prototype.getFormatter = function getFormatter() {
    return new _gregorianCalendarFormat2["default"](this.props.format, this.getLocale().format);
  };

  /**
   * 获得输入框的 className
   */


  TimePicker.prototype.getSizeClass = function getSizeClass() {
    var sizeClass = '';
    if (this.props.size === 'large') {
      sizeClass = ' ant-input-lg';
    } else if (this.props.size === 'small') {
      sizeClass = ' ant-input-sm';
    }
    return sizeClass;
  };

  /**
   * 获得输入框的默认值
   */


  TimePicker.prototype.parseTimeFromValue = function parseTimeFromValue(value) {
    if (value) {
      if (typeof value === 'string') {
        return this.getFormatter().parse(value, {
          locale: this.getLocale().calendar,
          obeyCount: true
        });
      } else if (value instanceof Date) {
        var date = new _gregorianCalendar2["default"](this.getLocale().calendar);
        date.setTime(+value);
        return date;
      }
    }
    return value;
  };

  TimePicker.prototype.getLocale = function getLocale() {
    var locale = _zh_CN2["default"];
    if (this.context.antLocale && this.context.antLocale.TimePicker) {
      locale = this.context.antLocale.TimePicker;
    }
    // 统一合并为完整的 Locale
    return _extends({}, locale, this.props.locale);
  };

  TimePicker.prototype.render = function render() {
    var _classNames;

    var locale = this.getLocale();
    var props = _extends({}, this.props);
    props.placeholder = 'placeholder' in this.props ? props.placeholder : locale.placeholder;
    if (props.defaultValue) {
      props.defaultValue = this.parseTimeFromValue(props.defaultValue);
    } else {
      delete props.defaultValue;
    }
    if (props.value) {
      props.value = this.parseTimeFromValue(props.value);
    }
    var className = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, props.className, !!props.className), _defineProperty(_classNames, props.prefixCls + '-' + props.size, !!props.size), _classNames));
    if (props.format.indexOf('ss') < 0) {
      props.showSecond = false;
    }
    if (props.format.indexOf('HH') < 0) {
      props.showHour = false;
    }

    return _react2["default"].createElement(_TimePicker2["default"], _extends({}, props, {
      className: className,
      locale: locale,
      formatter: this.getFormatter(),
      onChange: this.handleChange
    }));
  };

  return TimePicker;
}(_react2["default"].Component), _class.defaultProps = {
  format: 'HH:mm:ss',
  prefixCls: 'ant-time-picker',
  onChange: function onChange() {},

  locale: {},
  align: {
    offset: [0, -2]
  },
  disabled: false,
  disabledHours: undefined,
  disabledMinutes: undefined,
  disabledSeconds: undefined,
  hideDisabledOptions: false,
  placement: 'bottomLeft',
  transitionName: 'slide-up'
}, _class.contextTypes = {
  antLocale: _react2["default"].PropTypes.object
}, _temp2);
exports["default"] = TimePicker;
module.exports = exports['default'];