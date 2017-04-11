'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('./Select');

var _Select2 = _interopRequireDefault(_Select);

var _gregorianCalendar = require('gregorian-calendar');

var _gregorianCalendar2 = _interopRequireDefault(_gregorianCalendar);

var formatOption = function formatOption(option, disabledOptions) {
  var value = '' + option;
  if (option < 10) {
    value = '0' + option;
  }

  var disabled = false;
  if (disabledOptions && disabledOptions.indexOf(option) >= 0) {
    disabled = true;
  }

  return {
    value: value,
    disabled: disabled
  };
};

var Combobox = _react2['default'].createClass({
  displayName: 'Combobox',

  propTypes: {
    formatter: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    value: _react.PropTypes.object,
    onChange: _react.PropTypes.func,
    showHour: _react.PropTypes.bool,
    gregorianCalendarLocale: _react.PropTypes.object,
    showSecond: _react.PropTypes.bool,
    hourOptions: _react.PropTypes.array,
    minuteOptions: _react.PropTypes.array,
    secondOptions: _react.PropTypes.array,
    disabledHours: _react.PropTypes.func,
    disabledMinutes: _react.PropTypes.func,
    disabledSeconds: _react.PropTypes.func,
    onCurrentSelectPanelChange: _react.PropTypes.func
  },

  onItemChange: function onItemChange(type, itemValue) {
    var onChange = this.props.onChange;

    var value = this.props.value;
    if (value) {
      value = value.clone();
    } else {
      value = this.getNow().clone();
    }
    if (type === 'hour') {
      value.setHourOfDay(itemValue);
    } else if (type === 'minute') {
      value.setMinutes(itemValue);
    } else {
      value.setSeconds(itemValue);
    }
    onChange(value);
  },

  onEnterSelectPanel: function onEnterSelectPanel(range) {
    this.props.onCurrentSelectPanelChange(range);
  },

  getHourSelect: function getHourSelect(hour) {
    var _props = this.props;
    var prefixCls = _props.prefixCls;
    var hourOptions = _props.hourOptions;
    var disabledHours = _props.disabledHours;
    var showHour = _props.showHour;

    if (!showHour) {
      return null;
    }
    var disabledOptions = disabledHours();

    return _react2['default'].createElement(_Select2['default'], {
      prefixCls: prefixCls,
      options: hourOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: hourOptions.indexOf(hour),
      type: 'hour',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'hour')
    });
  },

  getMinuteSelect: function getMinuteSelect(minute) {
    var _props2 = this.props;
    var prefixCls = _props2.prefixCls;
    var minuteOptions = _props2.minuteOptions;
    var disabledMinutes = _props2.disabledMinutes;

    var value = this.props.value || this.getNow();
    var disabledOptions = disabledMinutes(value.getHourOfDay());

    return _react2['default'].createElement(_Select2['default'], {
      prefixCls: prefixCls,
      options: minuteOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: minuteOptions.indexOf(minute),
      type: 'minute',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'minute')
    });
  },

  getSecondSelect: function getSecondSelect(second) {
    var _props3 = this.props;
    var prefixCls = _props3.prefixCls;
    var secondOptions = _props3.secondOptions;
    var disabledSeconds = _props3.disabledSeconds;
    var showSecond = _props3.showSecond;

    if (!showSecond) {
      return null;
    }
    var value = this.props.value || this.getNow();
    var disabledOptions = disabledSeconds(value.getHourOfDay(), value.getMinutes());

    return _react2['default'].createElement(_Select2['default'], {
      prefixCls: prefixCls,
      options: secondOptions.map(function (option) {
        return formatOption(option, disabledOptions);
      }),
      selectedIndex: secondOptions.indexOf(second),
      type: 'second',
      onSelect: this.onItemChange,
      onMouseEnter: this.onEnterSelectPanel.bind(this, 'second')
    });
  },

  getNow: function getNow() {
    if (this.showNow) {
      return this.showNow;
    }
    var value = new _gregorianCalendar2['default'](this.props.gregorianCalendarLocale);
    value.setTime(Date.now());
    this.showNow = value;
    return value;
  },

  render: function render() {
    var prefixCls = this.props.prefixCls;

    var value = this.props.value || this.getNow();
    return _react2['default'].createElement(
      'div',
      { className: prefixCls + '-combobox' },
      this.getHourSelect(value.getHourOfDay()),
      this.getMinuteSelect(value.getMinutes()),
      this.getSecondSelect(value.getSeconds())
    );
  }
});

exports['default'] = Combobox;
module.exports = exports['default'];