'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var TimelineItem = (_temp = _class = function (_React$Component) {
  _inherits(TimelineItem, _React$Component);

  function TimelineItem() {
    _classCallCheck(this, TimelineItem);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  TimelineItem.prototype.render = function render() {
    var _classNames, _classNames2;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        color = _props.color,
        last = _props.last,
        children = _props.children,
        pending = _props.pending,
        className = _props.className,
        dot = _props.dot,
        restProps = _objectWithoutProperties(_props, ['prefixCls', 'color', 'last', 'children', 'pending', 'className', 'dot']);

    var itemClassName = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-item', true), _defineProperty(_classNames, prefixCls + '-item-last', last), _defineProperty(_classNames, prefixCls + '-item-pending', pending), _defineProperty(_classNames, className, className), _classNames));

    var dotClassName = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-item-head', true), _defineProperty(_classNames2, prefixCls + '-item-head-custom', dot), _defineProperty(_classNames2, prefixCls + '-item-head-' + color, true), _classNames2));

    return _react2["default"].createElement(
      'li',
      _extends({}, restProps, { className: itemClassName }),
      _react2["default"].createElement('div', { className: prefixCls + '-item-tail' }),
      _react2["default"].createElement(
        'div',
        {
          className: dotClassName,
          style: { borderColor: /blue|red|green/.test(color) ? null : color }
        },
        dot
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-item-content' },
        children
      )
    );
  };

  return TimelineItem;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-timeline',
  color: 'blue',
  last: false,
  pending: false
}, _temp);
exports["default"] = TimelineItem;
module.exports = exports['default'];