'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _util = require('./util');

var _Star = require('./Star');

var _Star2 = _interopRequireDefault(_Star);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

var Rate = _react2["default"].createClass({
  displayName: 'Rate',

  propTypes: {
    disabled: _react.PropTypes.bool,
    value: _react.PropTypes.number,
    defaultValue: _react.PropTypes.number,
    count: _react.PropTypes.number,
    allowHalf: _react.PropTypes.bool,
    style: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    onChange: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      defaultValue: 0,
      count: 5,
      allowHalf: false,
      style: {},
      prefixCls: 'rc-rate',
      onChange: noop
    };
  },
  getInitialState: function getInitialState() {
    var value = this.props.value;
    if (value === undefined) {
      value = this.props.defaultValue;
    }
    return {
      value: value
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      var value = nextProps.value;
      if (value === undefined) {
        value = nextProps.defaultValue;
      }
      this.setState({
        value: value
      });
    }
  },
  onHover: function onHover(event, index) {
    var hoverValue = this.getStarValue(index, event.pageX);
    this.setState({
      hoverValue: hoverValue
    });
  },
  onMouseLeave: function onMouseLeave() {
    this.setState({
      hoverValue: undefined
    });
  },
  onClick: function onClick(event, index) {
    var value = this.getStarValue(index, event.pageX);
    if (!('value' in this.props)) {
      this.setState({
        value: value
      });
    }
    this.onMouseLeave();
    this.props.onChange(value);
  },
  getStarDOM: function getStarDOM(index) {
    return _reactDom2["default"].findDOMNode(this.refs['star_' + index]);
  },
  getStarValue: function getStarValue(index, x) {
    var value = index + 1;
    if (this.props.allowHalf) {
      var leftEdge = (0, _util.getOffsetLeft)(this.getStarDOM(0));
      var width = (0, _util.getOffsetLeft)(this.getStarDOM(1)) - leftEdge;
      if (x - leftEdge - width * index < width / 2) {
        value -= 0.5;
      }
    }
    return value;
  },
  render: function render() {
    var _props = this.props;
    var count = _props.count;
    var allowHalf = _props.allowHalf;
    var style = _props.style;
    var prefixCls = _props.prefixCls;
    var disabled = _props.disabled;
    var _state = this.state;
    var value = _state.value;
    var hoverValue = _state.hoverValue;

    var stars = [];
    var disabledClass = disabled ? prefixCls + '-disabled' : '';
    for (var index = 0; index < count; index++) {
      stars.push(_react2["default"].createElement(_Star2["default"], {
        ref: 'star_' + index,
        index: index,
        disabled: disabled,
        prefixCls: prefixCls + '-star',
        allowHalf: allowHalf,
        value: hoverValue === undefined ? value : hoverValue,
        onClick: this.onClick,
        onHover: this.onHover,
        key: index
      }));
    }
    return _react2["default"].createElement(
      'ul',
      {
        className: prefixCls + ' ' + disabledClass,
        style: style,
        onMouseLeave: disabled ? null : this.onMouseLeave
      },
      stars
    );
  }
});

exports["default"] = Rate;
module.exports = exports['default'];