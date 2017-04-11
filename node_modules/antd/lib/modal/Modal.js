'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcDialog = require('rc-dialog');

var _rcDialog2 = _interopRequireDefault(_rcDialog);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var mousePosition = void 0;
var mousePositionEventBinded = void 0;

var Modal = (_temp2 = _class = function (_React$Component) {
  _inherits(Modal, _React$Component);

  function Modal() {
    var _temp, _this, _ret;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleCancel = function (e) {
      _this.props.onCancel(e);
    }, _this.handleOk = function () {
      _this.props.onOk();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Modal.prototype.componentDidMount = function componentDidMount() {
    if (mousePositionEventBinded) {
      return;
    }
    // 只有点击事件支持从鼠标位置动画展开
    (0, _addEventListener2["default"])(document.documentElement, 'click', function (e) {
      mousePosition = {
        x: e.pageX,
        y: e.pageY
      };
      // 20ms 内发生过点击事件，则从点击位置动画展示
      // 否则直接 zoom 展示
      // 这样可以兼容非点击方式展开
      setTimeout(function () {
        return mousePosition = null;
      }, 20);
    });
    mousePositionEventBinded = true;
  };

  Modal.prototype.render = function render() {
    var _props = this.props,
        okText = _props.okText,
        cancelText = _props.cancelText,
        confirmLoading = _props.confirmLoading,
        footer = _props.footer,
        visible = _props.visible;


    if (this.context.antLocale && this.context.antLocale.Modal) {
      okText = okText || this.context.antLocale.Modal.okText;
      cancelText = cancelText || this.context.antLocale.Modal.cancelText;
    }

    var defaultFooter = [_react2["default"].createElement(
      _button2["default"],
      {
        key: 'cancel',
        type: 'ghost',
        size: 'large',
        onClick: this.handleCancel
      },
      cancelText || '取消'
    ), _react2["default"].createElement(
      _button2["default"],
      {
        key: 'confirm',
        type: 'primary',
        size: 'large',
        loading: confirmLoading,
        onClick: this.handleOk
      },
      okText || '确定'
    )];

    return _react2["default"].createElement(_rcDialog2["default"], _extends({
      onClose: this.handleCancel,
      footer: footer || defaultFooter
    }, this.props, {
      visible: visible,
      mousePosition: mousePosition
    }));
  };

  return Modal;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-modal',
  onOk: noop,
  onCancel: noop,
  width: 520,
  transitionName: 'zoom',
  maskTransitionName: 'fade',
  confirmLoading: false,
  visible: false
}, _class.propTypes = {
  prefixCls: _react.PropTypes.string,
  onOk: _react.PropTypes.func,
  onCancel: _react.PropTypes.func,
  okText: _react.PropTypes.node,
  cancelText: _react.PropTypes.node,
  width: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  confirmLoading: _react.PropTypes.bool,
  visible: _react.PropTypes.bool,
  align: _react.PropTypes.object,
  footer: _react.PropTypes.node,
  title: _react.PropTypes.node,
  closable: _react.PropTypes.bool
}, _class.contextTypes = {
  antLocale: _react2["default"].PropTypes.object
}, _temp2);
exports["default"] = Modal;
module.exports = exports['default'];