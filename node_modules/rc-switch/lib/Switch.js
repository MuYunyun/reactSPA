'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var React = require('react');
var classNames = require('classnames');

function noop() {}

var Switch = React.createClass({
  displayName: 'Switch',

  propTypes: {
    className: React.PropTypes.string,
    prefixCls: React.PropTypes.string,
    disabled: React.PropTypes.bool,
    checkedChildren: React.PropTypes.any,
    unCheckedChildren: React.PropTypes.any,
    onChange: React.PropTypes.func,
    onMouseUp: React.PropTypes.func
  },
  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-switch',
      checkedChildren: null,
      unCheckedChildren: null,
      className: '',
      defaultChecked: false,
      onChange: noop
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    var checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    return {
      checked: checked
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('checked' in nextProps) {
      this.setState({
        checked: !!nextProps.checked
      });
    }
  },
  setChecked: function setChecked(checked) {
    if (!('checked' in this.props)) {
      this.setState({
        checked: checked
      });
    }
    this.props.onChange(checked);
  },
  toggle: function toggle() {
    var checked = !this.state.checked;
    this.setChecked(checked);
  },
  handleKeyDown: function handleKeyDown(e) {
    if (e.keyCode === 37) {
      this.setChecked(false);
    }
    if (e.keyCode === 39) {
      this.setChecked(true);
    }
  },
  // Handle auto focus when click switch in Chrome
  handleMouseUp: function handleMouseUp(e) {
    if (this.refs.node) {
      this.refs.node.blur();
    }
    if (this.props.onMouseUp) {
      this.props.onMouseUp(e);
    }
  },
  render: function render() {
    var _classNames;

    var _props = this.props;
    var className = _props.className;
    var prefixCls = _props.prefixCls;
    var disabled = _props.disabled;
    var checkedChildren = _props.checkedChildren;
    var unCheckedChildren = _props.unCheckedChildren;

    var restProps = _objectWithoutProperties(_props, ['className', 'prefixCls', 'disabled', 'checkedChildren', 'unCheckedChildren']);

    var checked = this.state.checked;
    var switchClassName = classNames((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-checked', checked), _defineProperty(_classNames, prefixCls + '-disabled', disabled), _classNames));
    return React.createElement(
      'span',
      _extends({}, restProps, {
        className: switchClassName,
        tabIndex: '0',
        ref: 'node',
        onKeyDown: this.handleKeyDown,
        onClick: disabled ? noop : this.toggle,
        onMouseUp: this.handleMouseUp }),
      React.createElement(
        'span',
        { className: prefixCls + '-inner' },
        checked ? checkedChildren : unCheckedChildren
      )
    );
  }
});

module.exports = Switch;