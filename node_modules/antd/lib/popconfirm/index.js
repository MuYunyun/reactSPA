'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _tooltip = require('../tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _placements = require('../popover/placements');

var _placements2 = _interopRequireDefault(_placements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var noop = function noop() {};

var Popconfirm = (_temp = _class = function (_React$Component) {
  _inherits(Popconfirm, _React$Component);

  function Popconfirm(props) {
    _classCallCheck(this, Popconfirm);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.confirm = function () {
      _this.setVisible(false);
      _this.props.onConfirm.call(_this);
    };

    _this.cancel = function () {
      _this.setVisible(false);
      _this.props.onCancel.call(_this);
    };

    _this.onVisibleChange = function (visible) {
      _this.setVisible(visible);
    };

    _this.state = {
      visible: false
    };
    return _this;
  }

  Popconfirm.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('visible' in nextProps) {
      this.setState({ visible: nextProps.visible });
    }
  };

  Popconfirm.prototype.setVisible = function setVisible(visible) {
    if (!('visible' in this.props)) {
      this.setState({ visible: visible });
    }
    this.props.onVisibleChange(visible);
  };

  Popconfirm.prototype.render = function render() {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        title = _props.title,
        placement = _props.placement,
        arrowPointAtCenter = _props.arrowPointAtCenter,
        restProps = _objectWithoutProperties(_props, ['prefixCls', 'title', 'placement', 'arrowPointAtCenter']);

    var _props2 = this.props,
        okText = _props2.okText,
        cancelText = _props2.cancelText;

    if (this.context.antLocale && this.context.antLocale.Popconfirm) {
      okText = okText || this.context.antLocale.Popconfirm.okText;
      cancelText = cancelText || this.context.antLocale.Popconfirm.cancelText;
    }
    var overlay = _react2["default"].createElement(
      'div',
      null,
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-inner-content' },
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-message' },
          _react2["default"].createElement(_icon2["default"], { type: 'exclamation-circle' }),
          _react2["default"].createElement(
            'div',
            { className: prefixCls + '-message-title' },
            title
          )
        ),
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-buttons' },
          _react2["default"].createElement(
            _button2["default"],
            { onClick: this.cancel, type: 'ghost', size: 'small' },
            cancelText || '取消'
          ),
          _react2["default"].createElement(
            _button2["default"],
            { onClick: this.confirm, type: 'primary', size: 'small' },
            okText || '确定'
          )
        )
      )
    );

    return _react2["default"].createElement(_tooltip2["default"], _extends({}, restProps, {
      builtinPlacements: (0, _placements2["default"])({ arrowPointAtCenter: arrowPointAtCenter }),
      prefixCls: prefixCls,
      placement: placement,
      onVisibleChange: this.onVisibleChange,
      visible: this.state.visible,
      overlay: overlay
    }));
  };

  return Popconfirm;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-popover',
  transitionName: 'zoom-big',
  placement: 'top',
  trigger: 'click',
  onConfirm: noop,
  onCancel: noop,
  onVisibleChange: noop
}, _class.contextTypes = {
  antLocale: _react2["default"].PropTypes.object
}, _temp);
exports["default"] = Popconfirm;
module.exports = exports['default'];