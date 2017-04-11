'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utilSelection = require('../util/selection');

var _utilSelection2 = _interopRequireDefault(_utilSelection);

var Header = _react2['default'].createClass({
  displayName: 'Header',

  propTypes: {
    formatter: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    gregorianCalendarLocale: _react.PropTypes.object,
    locale: _react.PropTypes.object,
    disabledDate: _react.PropTypes.func,
    placeholder: _react.PropTypes.string,
    value: _react.PropTypes.object,
    hourOptions: _react.PropTypes.array,
    minuteOptions: _react.PropTypes.array,
    secondOptions: _react.PropTypes.array,
    disabledHours: _react.PropTypes.func,
    disabledMinutes: _react.PropTypes.func,
    disabledSeconds: _react.PropTypes.func,
    onChange: _react.PropTypes.func,
    onClear: _react.PropTypes.func,
    onEsc: _react.PropTypes.func,
    allowEmpty: _react.PropTypes.bool,
    currentSelectPanel: _react.PropTypes.string
  },

  getInitialState: function getInitialState() {
    var value = this.props.value;
    return {
      str: value && this.props.formatter.format(value) || '',
      invalid: false
    };
  },

  componentDidMount: function componentDidMount() {
    this.timer = setTimeout(this.selectRange, 0);
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value;
    this.setState({
      str: value && nextProps.formatter.format(value) || '',
      invalid: false
    });
  },

  componentDidUpdate: function componentDidUpdate() {
    this.timer = setTimeout(this.selectRange, 0);
  },

  componentWillUnmount: function componentWillUnmount() {
    clearTimeout(this.timer);
  },

  onInputChange: function onInputChange(event) {
    var str = event.target.value;
    this.setState({
      str: str
    });
    var value = null;
    var _props = this.props;
    var formatter = _props.formatter;
    var gregorianCalendarLocale = _props.gregorianCalendarLocale;
    var hourOptions = _props.hourOptions;
    var minuteOptions = _props.minuteOptions;
    var secondOptions = _props.secondOptions;
    var disabledHours = _props.disabledHours;
    var disabledMinutes = _props.disabledMinutes;
    var disabledSeconds = _props.disabledSeconds;
    var onChange = _props.onChange;
    var allowEmpty = _props.allowEmpty;

    if (str) {
      var originalValue = this.props.value;
      try {
        value = formatter.parse(str, {
          locale: gregorianCalendarLocale,
          obeyCount: true
        });
      } catch (ex) {
        this.setState({
          invalid: true
        });
        return;
      }

      if (value) {
        // if time value not allowed, response warning.
        if (hourOptions.indexOf(value.getHourOfDay()) < 0 || minuteOptions.indexOf(value.getMinutes()) < 0 || secondOptions.indexOf(value.getSeconds()) < 0) {
          this.setState({
            invalid: true
          });
          return;
        }

        // if time value is disabled, response warning.
        var disabledHourOptions = disabledHours();
        var disabledMinuteOptions = disabledMinutes(value.getHourOfDay());
        var disabledSecondOptions = disabledSeconds(value.getHourOfDay(), value.getMinutes());
        if (disabledHourOptions && disabledHourOptions.indexOf(value.getHourOfDay()) >= 0 || disabledMinuteOptions && disabledMinuteOptions.indexOf(value.getMinutes()) >= 0 || disabledSecondOptions && disabledSecondOptions.indexOf(value.getSeconds()) >= 0) {
          this.setState({
            invalid: true
          });
          return;
        }

        if (originalValue && value) {
          if (originalValue.getHourOfDay() !== value.getHourOfDay() || originalValue.getMinutes() !== value.getMinutes() || originalValue.getSeconds() !== value.getSeconds()) {
            // keep other fields for rc-calendar
            var changedValue = originalValue.clone();
            changedValue.setHourOfDay(value.getHourOfDay());
            changedValue.setMinutes(value.getMinutes());
            changedValue.setSeconds(value.getSeconds());
            onChange(changedValue);
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
    } else if (allowEmpty) {
      onChange(null);
    } else {
      this.setState({
        invalid: true
      });
      return;
    }

    this.setState({
      invalid: false
    });
  },

  onKeyDown: function onKeyDown(e) {
    if (e.keyCode === 27) {
      this.props.onEsc();
    }
  },

  onClear: function onClear() {
    this.setState({ str: '' });
    this.props.onClear();
  },

  getClearButton: function getClearButton() {
    var _props2 = this.props;
    var locale = _props2.locale;
    var prefixCls = _props2.prefixCls;
    var allowEmpty = _props2.allowEmpty;

    if (!allowEmpty) {
      return null;
    }
    return _react2['default'].createElement('a', { className: prefixCls + '-clear-btn', role: 'button', title: locale.clear, onMouseDown: this.onClear });
  },

  getInput: function getInput() {
    var _props3 = this.props;
    var prefixCls = _props3.prefixCls;
    var placeholder = _props3.placeholder;
    var _state = this.state;
    var invalid = _state.invalid;
    var str = _state.str;

    var invalidClass = invalid ? prefixCls + '-input-invalid' : '';
    return _react2['default'].createElement('input', {
      className: prefixCls + '-input  ' + invalidClass,
      ref: 'input',
      onKeyDown: this.onKeyDown,
      value: str,
      placeholder: placeholder, onChange: this.onInputChange
    });
  },

  selectRange: function selectRange() {
    this.refs.input.select();
    if (this.props.currentSelectPanel && this.refs.input.value) {
      var selectionRangeStart = 0;
      var selectionRangeEnd = 0;
      if (this.props.currentSelectPanel === 'hour') {
        selectionRangeStart = 0;
        selectionRangeEnd = this.refs.input.value.indexOf(':');
      } else if (this.props.currentSelectPanel === 'minute') {
        selectionRangeStart = this.refs.input.value.indexOf(':') + 1;
        selectionRangeEnd = this.refs.input.value.lastIndexOf(':');
      } else if (this.props.currentSelectPanel === 'second') {
        selectionRangeStart = this.refs.input.value.lastIndexOf(':') + 1;
        selectionRangeEnd = this.refs.input.value.length;
      }
      if (selectionRangeEnd - selectionRangeStart === 2) {
        (0, _utilSelection2['default'])(this.refs.input, selectionRangeStart, selectionRangeEnd);
      }
    }
  },

  render: function render() {
    var prefixCls = this.props.prefixCls;

    return _react2['default'].createElement(
      'div',
      { className: prefixCls + '-input-wrap' },
      this.getInput(),
      this.getClearButton()
    );
  }
});

exports['default'] = Header;
module.exports = exports['default'];