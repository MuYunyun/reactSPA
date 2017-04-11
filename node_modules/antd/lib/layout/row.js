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

var Row = (_temp = _class = function (_React$Component) {
  _inherits(Row, _React$Component);

  function Row() {
    _classCallCheck(this, Row);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Row.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        type = _props.type,
        justify = _props.justify,
        align = _props.align,
        className = _props.className,
        gutter = _props.gutter,
        style = _props.style,
        children = _props.children,
        others = _objectWithoutProperties(_props, ['type', 'justify', 'align', 'className', 'gutter', 'style', 'children']);

    var classes = (0, _classnames2["default"])((_classNames = {
      'ant-row': !type
    }, _defineProperty(_classNames, 'ant-row-' + type, type), _defineProperty(_classNames, 'ant-row-' + type + '-' + justify, justify), _defineProperty(_classNames, 'ant-row-' + type + '-' + align, align), _defineProperty(_classNames, className, className), _classNames));
    var rowStyle = gutter > 0 ? _extends({
      marginLeft: gutter / -2,
      marginRight: gutter / -2
    }, style) : style;
    var cols = _react.Children.map(children, function (col) {
      if (!col) {
        return null;
      }
      if (col.props) {
        return (0, _react.cloneElement)(col, {
          style: gutter > 0 ? _extends({
            paddingLeft: gutter / 2,
            paddingRight: gutter / 2
          }, col.props.style) : col.props.style
        });
      }
      return col;
    });
    return _react2["default"].createElement(
      'div',
      _extends({}, others, { className: classes, style: rowStyle }),
      cols
    );
  };

  return Row;
}(_react2["default"].Component), _class.defaultProps = {
  gutter: 0
}, _class.propTypes = {
  type: _react2["default"].PropTypes.string,
  align: _react2["default"].PropTypes.string,
  justify: _react2["default"].PropTypes.string,
  className: _react2["default"].PropTypes.string,
  children: _react2["default"].PropTypes.node,
  gutter: _react2["default"].PropTypes.number
}, _temp);
exports["default"] = Row;
module.exports = exports['default'];