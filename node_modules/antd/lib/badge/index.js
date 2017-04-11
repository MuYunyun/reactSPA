'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _ScrollNumber = require('./ScrollNumber');

var _ScrollNumber2 = _interopRequireDefault(_ScrollNumber);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Badge = (_temp = _class = function (_React$Component) {
  _inherits(Badge, _React$Component);

  function Badge() {
    _classCallCheck(this, Badge);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Badge.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        count = _props.count,
        prefixCls = _props.prefixCls,
        overflowCount = _props.overflowCount,
        className = _props.className,
        style = _props.style,
        children = _props.children,
        dot = _props.dot,
        restProps = _objectWithoutProperties(_props, ['count', 'prefixCls', 'overflowCount', 'className', 'style', 'children', 'dot']);

    count = count > overflowCount ? overflowCount + '+' : count;

    // dot mode don't need count
    if (dot) {
      count = '';
    }

    // null undefined "" "0" 0
    var hidden = (!count || count === '0') && !dot;
    var scrollNumberCls = prefixCls + (dot ? '-dot' : '-count');
    var badgeCls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-not-a-wrapper', !children), _classNames));

    return _react2["default"].createElement(
      'span',
      _extends({ className: badgeCls, title: count, style: null }, restProps),
      children,
      _react2["default"].createElement(
        _rcAnimate2["default"],
        {
          component: '',
          showProp: 'data-show',
          transitionName: prefixCls + '-zoom',
          transitionAppear: true
        },
        hidden ? null : _react2["default"].createElement(_ScrollNumber2["default"], {
          'data-show': !hidden,
          className: scrollNumberCls,
          count: count,
          style: style
        })
      )
    );
  };

  return Badge;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-badge',
  count: null,
  dot: false,
  overflowCount: 99
}, _class.propTypes = {
  count: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number]),
  dot: _react2["default"].PropTypes.bool,
  overflowCount: _react2["default"].PropTypes.number
}, _temp);
exports["default"] = Badge;
module.exports = exports['default'];