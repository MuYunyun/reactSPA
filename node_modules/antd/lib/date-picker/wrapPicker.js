'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = wrapPicker;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTimePicker = require('rc-time-picker');

var _rcTimePicker2 = _interopRequireDefault(_rcTimePicker);

var _gregorianCalendarFormat = require('gregorian-calendar-format');

var _gregorianCalendarFormat2 = _interopRequireDefault(_gregorianCalendarFormat);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function wrapPicker(Picker, defaultFormat) {
  var _class, _temp2;

  return _temp2 = _class = function (_React$Component) {
    _inherits(PickerWrapper, _React$Component);

    function PickerWrapper() {
      var _temp, _this, _ret;

      _classCallCheck(this, PickerWrapper);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.getFormatter = function () {
        var format = _this.props.format;
        var formatter = new _gregorianCalendarFormat2["default"](format, _this.getLocale().lang.format);
        return formatter;
      }, _this.parseDateFromValue = function (value) {
        if (value) {
          if (typeof value === 'string') {
            return _this.getFormatter().parse(value, { locale: _this.getLocale() });
          } else if (value instanceof Date) {
            var date = new _gregorianCalendar2["default"](_this.getLocale());
            date.setTime(+value);
            return date;
          }
        }
        return value;
      }, _this.toggleOpen = function (_ref) {
        var open = _ref.open;

        _this.props.toggleOpen({ open: open });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    PickerWrapper.prototype.getLocale = function getLocale() {
      var props = this.props;
      var locale = _zh_CN2["default"];
      var context = this.context;
      if (context.antLocale && context.antLocale.DatePicker) {
        locale = context.antLocale.DatePicker;
      }
      // 统一合并为完整的 Locale
      var result = _extends({}, locale, props.locale);
      result.lang = _extends({}, locale.lang, props.locale.lang);
      return result;
    };

    PickerWrapper.prototype.render = function render() {
      var props = this.props;
      var pickerClass = (0, _classnames2["default"])({
        'ant-calendar-picker': true
      });
      var pickerInputClass = (0, _classnames2["default"])({
        'ant-calendar-range-picker': true,
        'ant-input': true,
        'ant-input-lg': props.size === 'large',
        'ant-input-sm': props.size === 'small'
      });

      var locale = this.getLocale();

      var timeFormat = props.showTime && props.showTime.format;
      var rcTimePickerProps = {
        formatter: new _gregorianCalendarFormat2["default"](timeFormat || 'HH:mm:ss', locale.timePickerLocale.format),
        showSecond: timeFormat && timeFormat.indexOf('ss') >= 0,
        showHour: timeFormat && timeFormat.indexOf('HH') >= 0
      };
      var timePicker = props.showTime ? _react2["default"].createElement(_rcTimePicker2["default"], _extends({}, rcTimePickerProps, props.showTime, {
        prefixCls: 'ant-time-picker',
        placeholder: locale.timePickerLocale.placeholder,
        locale: locale.timePickerLocale,
        transitionName: 'slide-up'
      })) : null;

      return _react2["default"].createElement(Picker, _extends({}, props, {
        pickerClass: pickerClass,
        pickerInputClass: pickerInputClass,
        locale: locale,
        timePicker: timePicker,
        toggleOpen: this.toggleOpen,
        getFormatter: this.getFormatter,
        parseDateFromValue: this.parseDateFromValue
      }));
    };

    return PickerWrapper;
  }(_react2["default"].Component), _class.defaultProps = {
    format: defaultFormat || 'yyyy-MM-dd',
    transitionName: 'slide-up',
    popupStyle: {},
    onChange: function onChange() {},
    onOk: function onOk() {},
    toggleOpen: function toggleOpen() {},

    locale: {},
    align: {
      offset: [0, -9]
    }
  }, _class.contextTypes = {
    antLocale: _react.PropTypes.object
  }, _temp2;
}
module.exports = exports['default'];