'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _createChainedFunction = require('rc-util/lib/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _KeyCode = require('rc-util/lib/KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _placements = require('./picker/placements');

var _placements2 = _interopRequireDefault(_placements);

var _rcTrigger = require('rc-trigger');

var _rcTrigger2 = _interopRequireDefault(_rcTrigger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

function refFn(field, component) {
  this[field] = component;
}

var Picker = _react2["default"].createClass({
  displayName: 'Picker',

  propTypes: {
    animation: _react.PropTypes.oneOfType([_react.PropTypes.func, _react.PropTypes.string]),
    disabled: _react.PropTypes.bool,
    transitionName: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    onOpen: _react.PropTypes.func,
    onClose: _react.PropTypes.func,
    children: _react.PropTypes.func,
    getCalendarContainer: _react.PropTypes.func,
    calendar: _react.PropTypes.element,
    style: _react.PropTypes.object,
    open: _react.PropTypes.bool,
    defaultOpen: _react.PropTypes.bool,
    prefixCls: _react.PropTypes.string,
    placement: _react.PropTypes.any,
    value: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array]),
    defaultValue: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.array]),
    align: _react.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-calendar-picker',
      style: {},
      align: {},
      placement: 'bottomLeft',
      defaultOpen: false,
      onChange: noop,
      onOpen: noop,
      onClose: noop
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var open = void 0;
    if ('open' in props) {
      open = props.open;
    } else {
      open = props.defaultOpen;
    }
    var value = props.value || props.defaultValue;
    this.saveCalendarRef = refFn.bind(this, 'calendarInstance');
    return {
      open: open,
      value: value
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var value = nextProps.value;
    var open = nextProps.open;

    if ('value' in nextProps) {
      this.setState({
        value: value
      });
    }
    if (open !== undefined) {
      this.setState({
        open: open
      });
    }
  },
  onCalendarKeyDown: function onCalendarKeyDown(event) {
    if (event.keyCode === _KeyCode2["default"].ESC) {
      event.stopPropagation();
      this.close(this.focus);
    }
  },
  onCalendarSelect: function onCalendarSelect(value) {
    var cause = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    var props = this.props;
    if (!('value' in props)) {
      this.setState({
        value: value
      });
    }
    if (cause.source === 'keyboard' || !props.calendar.props.timePicker && cause.source !== 'dateInput' || cause.source === 'todayButton') {
      this.close(this.focus);
    }
    props.onChange(value);
  },
  onKeyDown: function onKeyDown(event) {
    if (event.keyCode === _KeyCode2["default"].DOWN && !this.state.open) {
      this.open(this.focusCalendar);
      event.preventDefault();
    }
  },
  onCalendarOk: function onCalendarOk() {
    this.close(this.focus);
  },
  onCalendarClear: function onCalendarClear() {
    this.close(this.focus);
  },
  onVisibleChange: function onVisibleChange(open) {
    this.setOpen(open, this.focusCalendar);
  },
  getCalendarElement: function getCalendarElement() {
    var props = this.props;
    var state = this.state;
    var calendarProp = props.calendar;
    var value = state.value;

    var defaultValue = void 0;
    // RangeCalendar
    if (Array.isArray(value)) {
      defaultValue = value[0];
    } else {
      defaultValue = value;
    }
    var extraProps = {
      ref: this.saveCalendarRef,
      defaultValue: defaultValue || calendarProp.props.defaultValue,
      defaultSelectedValue: value,
      onKeyDown: this.onCalendarKeyDown,
      onOk: (0, _createChainedFunction2["default"])(calendarProp.props.onOk, this.onCalendarOk),
      onSelect: (0, _createChainedFunction2["default"])(calendarProp.props.onSelect, this.onCalendarSelect),
      onClear: (0, _createChainedFunction2["default"])(calendarProp.props.onClear, this.onCalendarClear)
    };

    return _react2["default"].cloneElement(calendarProp, extraProps);
  },
  setOpen: function setOpen(open, callback) {
    var _props = this.props;
    var onOpen = _props.onOpen;
    var onClose = _props.onClose;

    if (this.state.open !== open) {
      this.setState({
        open: open
      }, callback);
      var event = {
        open: open
      };
      if (open) {
        onOpen(event);
      } else {
        onClose(event);
      }
    }
  },
  open: function open(callback) {
    this.setOpen(true, callback);
  },
  close: function close(callback) {
    this.setOpen(false, callback);
  },
  focus: function focus() {
    if (!this.state.open) {
      _reactDom2["default"].findDOMNode(this).focus();
    }
  },
  focusCalendar: function focusCalendar() {
    if (this.state.open) {
      this.calendarInstance.focus();
    }
  },
  render: function render() {
    var props = this.props;
    var prefixCls = props.prefixCls;
    var placement = props.placement;
    var style = props.style;
    var getCalendarContainer = props.getCalendarContainer;
    var align = props.align;
    var animation = props.animation;
    var disabled = props.disabled;
    var transitionName = props.transitionName;
    var children = props.children;

    var state = this.state;
    return _react2["default"].createElement(
      _rcTrigger2["default"],
      {
        popup: this.getCalendarElement(),
        popupAlign: align,
        builtinPlacements: _placements2["default"],
        popupPlacement: placement,
        action: disabled && !state.open ? [] : ['click'],
        destroyPopupOnHide: true,
        getPopupContainer: getCalendarContainer,
        popupStyle: style,
        popupAnimation: animation,
        popupTransitionName: transitionName,
        popupVisible: state.open,
        onPopupVisibleChange: this.onVisibleChange,
        prefixCls: prefixCls
      },
      _react2["default"].cloneElement(children(state, props), { onKeyDown: this.onKeyDown })
    );
  }
});

exports["default"] = Picker;
module.exports = exports['default'];