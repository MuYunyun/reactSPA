'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Alert = (_temp = _class = function (_React$Component) {
  _inherits(Alert, _React$Component);

  function Alert(props) {
    _classCallCheck(this, Alert);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleClose = function (e) {
      e.preventDefault();
      var dom = _reactDom2["default"].findDOMNode(_this);
      dom.style.height = dom.offsetHeight + 'px';
      // Magic code
      // 重复一次后才能正确设置 height
      dom.style.height = dom.offsetHeight + 'px';

      _this.setState({
        closing: false
      });
      _this.props.onClose(e);
    };

    _this.animationEnd = function () {
      _this.setState({
        closed: true,
        closing: true
      });
    };

    _this.state = {
      closing: true,
      closed: false
    };
    return _this;
  }

  Alert.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        closable = _props.closable,
        description = _props.description,
        type = _props.type,
        prefixCls = _props.prefixCls,
        message = _props.message,
        closeText = _props.closeText,
        showIcon = _props.showIcon;


    var iconType = '';
    switch (type) {
      case 'success':
        iconType = 'check-circle';
        break;
      case 'info':
        iconType = 'info-circle';
        break;
      case 'error':
        iconType = 'cross-circle';
        break;
      case 'warning':
        iconType = 'exclamation-circle';
        break;
      default:
        iconType = 'default';
    }

    // use outline icon in alert with description
    if (!!description) {
      iconType += '-o';
    }

    var alertCls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-' + type, true), _defineProperty(_classNames, prefixCls + '-close', !this.state.closing), _defineProperty(_classNames, prefixCls + '-with-description', !!description), _defineProperty(_classNames, prefixCls + '-no-icon', !showIcon), _classNames));

    // closeable when closeText is assigned
    if (closeText) {
      closable = true;
    }

    return this.state.closed ? null : _react2["default"].createElement(
      _rcAnimate2["default"],
      { component: '',
        showProp: 'data-show',
        transitionName: prefixCls + '-slide-up',
        onEnd: this.animationEnd
      },
      _react2["default"].createElement(
        'div',
        { 'data-show': this.state.closing, className: alertCls },
        showIcon ? _react2["default"].createElement(_icon2["default"], { className: 'ant-alert-icon', type: iconType }) : null,
        _react2["default"].createElement(
          'span',
          { className: prefixCls + '-message' },
          message
        ),
        _react2["default"].createElement(
          'span',
          { className: prefixCls + '-description' },
          description
        ),
        closable ? _react2["default"].createElement(
          'a',
          { onClick: this.handleClose, className: prefixCls + '-close-icon' },
          closeText || _react2["default"].createElement(_icon2["default"], { type: 'cross' })
        ) : null
      )
    );
  };

  return Alert;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-alert',
  showIcon: false,
  onClose: function onClose() {},

  type: 'info'
}, _temp);
exports["default"] = Alert;
module.exports = exports['default'];