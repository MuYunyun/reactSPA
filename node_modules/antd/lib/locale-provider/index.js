'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _locale = require('../modal/locale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var LocaleProvider = (_temp = _class = function (_React$Component) {
  _inherits(LocaleProvider, _React$Component);

  function LocaleProvider() {
    _classCallCheck(this, LocaleProvider);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  LocaleProvider.prototype.getChildContext = function getChildContext() {
    return {
      antLocale: this.props.locale
    };
  };

  LocaleProvider.prototype.componentDidMount = function componentDidMount() {
    this.componentDidUpdate();
  };

  LocaleProvider.prototype.componentDidUpdate = function componentDidUpdate() {
    var locale = this.props.locale;

    (0, _locale.changeConfirmLocale)(locale && locale.Modal);
  };

  LocaleProvider.prototype.componentWillUnMount = function componentWillUnMount() {
    (0, _locale.changeConfirmLocale)();
  };

  LocaleProvider.prototype.render = function render() {
    return _react2["default"].Children.only(this.props.children);
  };

  return LocaleProvider;
}(_react2["default"].Component), _class.propTypes = {
  locale: _react2["default"].PropTypes.object
}, _class.childContextTypes = {
  antLocale: _react2["default"].PropTypes.object
}, _temp);
exports["default"] = LocaleProvider;
module.exports = exports['default'];