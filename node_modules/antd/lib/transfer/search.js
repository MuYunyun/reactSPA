'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var Search = (_temp2 = _class = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    var _temp, _this, _ret;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleChange = function (e) {
      _this.props.onChange(e);
    }, _this.handleClear = function (e) {
      e.preventDefault();
      _this.props.handleClear(e);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Search.prototype.render = function render() {
    var _props = this.props,
        placeholder = _props.placeholder,
        value = _props.value,
        prefixCls = _props.prefixCls;

    return _react2["default"].createElement(
      'div',
      null,
      _react2["default"].createElement('input', { placeholder: placeholder, className: prefixCls + ' ant-input', value: value, ref: 'input',
        onChange: this.handleChange
      }),
      value && value.length > 0 ? _react2["default"].createElement(
        'a',
        { href: '#', className: prefixCls + '-action', onClick: this.handleClear },
        _react2["default"].createElement(_icon2["default"], { type: 'cross-circle' })
      ) : _react2["default"].createElement(
        'span',
        { className: prefixCls + '-action' },
        _react2["default"].createElement(_icon2["default"], { type: 'search' })
      )
    );
  };

  return Search;
}(_react2["default"].Component), _class.defaultProps = {
  placeholder: '',
  onChange: noop,
  handleClear: noop
}, _class.propTypes = {
  prefixCls: _react.PropTypes.string,
  placeholder: _react.PropTypes.string,
  onChange: _react.PropTypes.func,
  handleClear: _react.PropTypes.func
}, _temp2);
exports["default"] = Search;
module.exports = exports['default'];