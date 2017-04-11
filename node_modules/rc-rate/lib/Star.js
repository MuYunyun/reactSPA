'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Star = _react2["default"].createClass({
  displayName: 'Star',

  propTypes: {
    value: _react.PropTypes.number,
    index: _react.PropTypes.number,
    prefixCls: _react.PropTypes.string,
    allowHalf: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    onHover: _react.PropTypes.func,
    onClick: _react.PropTypes.func
  },

  onHover: function onHover(e) {
    this.props.onHover(e, this.props.index);
  },
  onClick: function onClick(e) {
    this.props.onClick(e, this.props.index);
  },
  getClassName: function getClassName() {
    var _props = this.props;
    var index = _props.index;
    var value = _props.value;
    var prefixCls = _props.prefixCls;
    var allowHalf = _props.allowHalf;

    var starValue = index + 1;
    if (allowHalf && value + 0.5 === starValue) {
      return prefixCls + ' ' + prefixCls + '-half ' + prefixCls + '-active';
    }
    return starValue <= value ? prefixCls + ' ' + prefixCls + '-full' : prefixCls + ' ' + prefixCls + '-zero';
  },
  render: function render() {
    var onHover = this.onHover;
    var onClick = this.onClick;
    var _props2 = this.props;
    var disabled = _props2.disabled;
    var prefixCls = _props2.prefixCls;

    return _react2["default"].createElement(
      'li',
      {
        className: this.getClassName(),
        onClick: disabled ? null : onClick,
        onMouseMove: disabled ? null : onHover
      },
      _react2["default"].createElement('div', { className: prefixCls + '-content' })
    );
  }
});

exports["default"] = Star;
module.exports = exports['default'];