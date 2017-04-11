'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcPagination = require('rc-pagination');

var _rcPagination2 = _interopRequireDefault(_rcPagination);

var _select = require('../select');

var _select2 = _interopRequireDefault(_select);

var _MiniSelect = require('./MiniSelect');

var _MiniSelect2 = _interopRequireDefault(_MiniSelect);

var _zh_CN = require('./locale/zh_CN');

var _zh_CN2 = _interopRequireDefault(_zh_CN);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Pagination = (_temp = _class = function (_React$Component) {
  _inherits(Pagination, _React$Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Pagination.prototype.render = function render() {
    var className = this.props.className;
    var selectComponentClass = _select2["default"];

    var locale = void 0;
    if (this.context.antLocale && this.context.antLocale.Pagination) {
      locale = this.context.antLocale.Pagination;
    } else {
      locale = this.props.locale;
    }

    if (this.props.size === 'small') {
      className += ' mini';
      selectComponentClass = _MiniSelect2["default"];
    }

    return _react2["default"].createElement(_rcPagination2["default"], _extends({ selectComponentClass: selectComponentClass,
      selectPrefixCls: 'ant-select'
    }, this.props, {
      locale: locale,
      className: className
    }));
  };

  return Pagination;
}(_react2["default"].Component), _class.defaultProps = {
  locale: _zh_CN2["default"],
  className: '',
  prefixCls: 'ant-pagination'
}, _class.contextTypes = {
  antLocale: _react2["default"].PropTypes.object
}, _temp);
exports["default"] = Pagination;
module.exports = exports['default'];