'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var TransferOperation = (_temp = _class = function (_React$Component) {
  _inherits(TransferOperation, _React$Component);

  function TransferOperation() {
    _classCallCheck(this, TransferOperation);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  TransferOperation.prototype.render = function render() {
    var _props = this.props,
        moveToLeft = _props.moveToLeft,
        moveToRight = _props.moveToRight,
        leftArrowText = _props.leftArrowText,
        rightArrowText = _props.rightArrowText,
        leftActive = _props.leftActive,
        rightActive = _props.rightActive,
        className = _props.className;


    var moveToLeftButton = _react2["default"].createElement(
      _button2["default"],
      { type: 'primary', size: 'small', disabled: !leftActive, onClick: moveToLeft },
      _react2["default"].createElement(
        'span',
        null,
        _react2["default"].createElement(_icon2["default"], { type: 'left' }),
        leftArrowText
      )
    );
    var moveToRightButton = _react2["default"].createElement(
      _button2["default"],
      { type: 'primary', size: 'small', disabled: !rightActive, onClick: moveToRight },
      _react2["default"].createElement(
        'span',
        null,
        rightArrowText,
        _react2["default"].createElement(_icon2["default"], { type: 'right' })
      )
    );
    return _react2["default"].createElement(
      'div',
      { className: className },
      moveToLeftButton,
      moveToRightButton
    );
  };

  return TransferOperation;
}(_react2["default"].Component), _class.defaultProps = {
  leftArrowText: '',
  rightArrowText: '',
  moveToLeft: noop,
  moveToRight: noop
}, _class.propTypes = {
  className: _react.PropTypes.string,
  leftArrowText: _react.PropTypes.string,
  rightArrowText: _react.PropTypes.string,
  moveToLeft: _react.PropTypes.func,
  moveToRight: _react.PropTypes.func
}, _temp);
exports["default"] = TransferOperation;
module.exports = exports['default'];