'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _PanelContent = require('./PanelContent');

var _PanelContent2 = _interopRequireDefault(_PanelContent);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CollapsePanel = _react2["default"].createClass({
  displayName: 'CollapsePanel',

  propTypes: {
    className: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
    children: _react.PropTypes.any,
    openAnimation: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    header: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number, _react.PropTypes.node]),
    showArrow: _react.PropTypes.bool,
    isActive: _react.PropTypes.bool,
    onItemClick: _react.PropTypes.func,
    style: _react.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      showArrow: true,
      isActive: false,
      onItemClick: function onItemClick() {}
    };
  },
  handleItemClick: function handleItemClick() {
    this.props.onItemClick();
  },
  render: function render() {
    var _classNames;

    var _props = this.props,
        className = _props.className,
        style = _props.style,
        prefixCls = _props.prefixCls,
        header = _props.header,
        children = _props.children,
        isActive = _props.isActive,
        showArrow = _props.showArrow;

    var headerCls = prefixCls + '-header';
    var itemCls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-item', true), _defineProperty(_classNames, prefixCls + '-item-active', isActive), _classNames), className);
    return _react2["default"].createElement(
      'div',
      { className: itemCls, style: style },
      _react2["default"].createElement(
        'div',
        {
          className: headerCls,
          onClick: this.handleItemClick,
          role: 'tab',
          'aria-expanded': isActive
        },
        showArrow && _react2["default"].createElement('i', { className: 'arrow' }),
        header
      ),
      _react2["default"].createElement(
        _rcAnimate2["default"],
        {
          showProp: 'isActive',
          exclusive: true,
          component: '',
          animation: this.props.openAnimation
        },
        _react2["default"].createElement(
          _PanelContent2["default"],
          { prefixCls: prefixCls, isActive: isActive },
          children
        )
      )
    );
  }
});

exports["default"] = CollapsePanel;
module.exports = exports['default'];