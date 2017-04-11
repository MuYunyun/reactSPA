'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _object = require('object.omit');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Tag = (_temp = _class = function (_React$Component) {
  _inherits(Tag, _React$Component);

  function Tag(props) {
    _classCallCheck(this, Tag);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.close = function (e) {
      _this.props.onClose(e);
      if (e.defaultPrevented) return;
      var dom = _reactDom2["default"].findDOMNode(_this);
      dom.style.width = dom.getBoundingClientRect().width + 'px';
      // It's Magic Code, don't know why
      dom.style.width = dom.getBoundingClientRect().width + 'px';
      _this.setState({
        closing: true
      });
    };

    _this.animationEnd = function (key, existed) {
      if (!existed && !_this.state.closed) {
        _this.setState({
          closed: true,
          closing: false
        });
        _this.props.afterClose();
      }
    };

    _this.state = {
      closing: false,
      closed: false
    };
    return _this;
  }

  Tag.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        closable = _props.closable,
        color = _props.color,
        className = _props.className,
        children = _props.children,
        otherProps = _objectWithoutProperties(_props, ['prefixCls', 'closable', 'color', 'className', 'children']);

    var closeIcon = closable ? _react2["default"].createElement(_icon2["default"], { type: 'cross', onClick: this.close }) : '';
    var classString = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-' + color, !!color), _defineProperty(_classNames, prefixCls + '-close', this.state.closing), _defineProperty(_classNames, className, !!className), _classNames));
    // fix https://fb.me/react-unknown-prop
    var divProps = (0, _object2["default"])(otherProps, ['onClose', 'afterClose']);
    return _react2["default"].createElement(
      _rcAnimate2["default"],
      { component: '',
        showProp: 'data-show',
        transitionName: prefixCls + '-zoom',
        transitionAppear: true,
        onEnd: this.animationEnd
      },
      this.state.closed ? null : _react2["default"].createElement(
        'div',
        _extends({
          'data-show': !this.state.closing
        }, divProps, {
          className: classString,
          style: { backgroundColor: /blue|red|green|yellow/.test(color) ? null : color }
        }),
        _react2["default"].createElement(
          'span',
          { className: prefixCls + '-text' },
          children
        ),
        closeIcon
      )
    );
  };

  return Tag;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-tag',
  closable: false,
  onClose: function onClose() {},
  afterClose: function afterClose() {}
}, _temp);
exports["default"] = Tag;
module.exports = exports['default'];