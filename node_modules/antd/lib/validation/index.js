'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Validation = function (_React$Component) {
  _inherits(Validation, _React$Component);

  function Validation() {
    _classCallCheck(this, Validation);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Validation.prototype.componentDidMount = function componentDidMount() {
    (0, _warning2["default"])(false, '`Validation` is removed, please use `Form` which has supported validation after antd@0.12.0,' + ' or you can just import Validation from \'rc-form-validation\' for compatibility');
  };

  Validation.prototype.render = function render() {
    return null;
  };

  return Validation;
}(_react2["default"].Component);

exports["default"] = Validation;


Validation.Validator = function () {};
Validation.FieldMixin = {
  setField: function setField() {}
};
module.exports = exports['default'];