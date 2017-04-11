'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = createPicker;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MonthCalendar = require('rc-calendar/lib/MonthCalendar');

var _MonthCalendar2 = _interopRequireDefault(_MonthCalendar);

var _Picker = require('rc-calendar/lib/Picker');

var _Picker2 = _interopRequireDefault(_Picker);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function createPicker(TheCalendar) {
  var _class, _temp, _initialiseProps;

  return _temp = _class = function (_React$Component) {
    _inherits(CalenderWrapper, _React$Component);

    function CalenderWrapper(props) {
      _classCallCheck(this, CalenderWrapper);

      var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

      _initialiseProps.call(_this);

      _this.state = {
        value: _this.props.parseDateFromValue(_this.props.value || _this.props.defaultValue)
      };
      return _this;
    }

    CalenderWrapper.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if ('value' in nextProps) {
        this.setState({
          value: nextProps.parseDateFromValue(nextProps.value)
        });
      }
    };

    CalenderWrapper.prototype.render = function render() {
      var _this2 = this;

      var props = this.props;
      var locale = props.locale;
      // 以下两行代码
      // 给没有初始值的日期选择框提供本地化信息
      // 否则会以周日开始排
      var defaultCalendarValue = new _gregorianCalendar2["default"](locale);
      defaultCalendarValue.setTime(Date.now());

      var placeholder = 'placeholder' in props ? props.placeholder : locale.lang.placeholder;

      var disabledTime = props.showTime ? props.disabledTime : null;

      var calendarClassName = (0, _classnames2["default"])({
        'ant-calendar-time': props.showTime,
        'ant-calendar-month': _MonthCalendar2["default"] === TheCalendar
      });

      // 需要选择时间时，点击 ok 时才触发 onChange
      var pickerChangeHandler = {
        onChange: this.handleChange
      };
      var calendarHandler = {
        onOk: this.handleChange,
        // fix https://github.com/ant-design/ant-design/issues/1902
        onSelect: function onSelect(value, cause) {
          if (cause && cause.source === 'todayButton') {
            _this2.handleChange(value);
          }
        }
      };
      if (props.showTime) {
        pickerChangeHandler = {};
      } else {
        calendarHandler = {};
      }

      var calendar = _react2["default"].createElement(TheCalendar, _extends({
        formatter: props.getFormatter(),
        disabledDate: props.disabledDate,
        disabledTime: disabledTime,
        locale: locale.lang,
        timePicker: props.timePicker,
        defaultValue: defaultCalendarValue,
        dateInputPlaceholder: placeholder,
        prefixCls: 'ant-calendar',
        className: calendarClassName,
        onOk: props.onOk
      }, calendarHandler));

      // default width for showTime
      var pickerStyle = {};
      if (props.showTime) {
        pickerStyle.width = 180;
      }

      var clearIcon = !props.disabled && this.state.value ? _react2["default"].createElement(_icon2["default"], { type: 'cross-circle',
        className: 'ant-calendar-picker-clear',
        onClick: this.clearSelection
      }) : null;
      return _react2["default"].createElement(
        'span',
        { className: props.pickerClass, style: _extends({}, pickerStyle, props.style) },
        _react2["default"].createElement(
          _Picker2["default"],
          _extends({
            transitionName: props.transitionName,
            disabled: props.disabled,
            calendar: calendar,
            value: this.state.value,
            prefixCls: 'ant-calendar-picker-container',
            style: props.popupStyle,
            align: props.align,
            getCalendarContainer: props.getCalendarContainer,
            open: props.open,
            onOpen: props.toggleOpen,
            onClose: props.toggleOpen
          }, pickerChangeHandler),
          function (_ref) {
            var value = _ref.value;

            return _react2["default"].createElement(
              'span',
              null,
              _react2["default"].createElement('input', {
                disabled: props.disabled,
                readOnly: true,
                value: value ? props.getFormatter().format(value) : '',
                placeholder: placeholder,
                className: props.pickerInputClass
              }),
              clearIcon,
              _react2["default"].createElement('span', { className: 'ant-calendar-picker-icon' })
            );
          }
        )
      );
    };

    return CalenderWrapper;
  }(_react2["default"].Component), _initialiseProps = function _initialiseProps() {
    var _this3 = this;

    this.clearSelection = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _this3.setState({ value: null });
      _this3.handleChange(null);
    };

    this.handleChange = function (value) {
      var props = _this3.props;
      if (!('value' in props)) {
        _this3.setState({ value: value });
      }
      var timeValue = value ? new Date(value.getTime()) : null;
      props.onChange(timeValue, value ? props.getFormatter().format(value) : '');
    };
  }, _temp;
}
module.exports = exports['default'];