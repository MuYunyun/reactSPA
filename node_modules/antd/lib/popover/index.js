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

var _placements = require('./placements');

var _placements2 = _interopRequireDefault(_placements);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Popover = (_temp = _class = function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    _classCallCheck(this, Popover);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Popover.prototype.render = function render() {
    var arrowPointAtCenter = this.props.arrowPointAtCenter;

    return _react2["default"].createElement(_tooltip2["default"], _extends({
      builtinPlacements: (0, _placements2["default"])({ arrowPointAtCenter: arrowPointAtCenter }),
      ref: 'tooltip'
    }, this.props, {
      overlay: this.getOverlay()
    }));
  };

  Popover.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.refs.tooltip.getPopupDomNode();
  };

  Popover.prototype.componentDidMount = function componentDidMount() {
    if ('overlay' in this.props) {
      (0, _warning2["default"])(false, '`overlay` prop of Popover is deprecated, use `content` instead.');
    }
  };

  Popover.prototype.getOverlay = function getOverlay() {
    // use content replace overlay
    // keep overlay for compatibility
    var _props = this.props,
        title = _props.title,
        prefixCls = _props.prefixCls,
        overlay = _props.overlay,
        content = _props.content;


    return _react2["default"].createElement(
      'div',
      null,
      title && _react2["default"].createElement(
        'div',
        { className: prefixCls + '-title' },
        title
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-inner-content' },
        content || overlay
      )
    );
  };

  return Popover;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-popover',
  placement: 'top',
  transitionName: 'zoom-big',
  trigger: 'hover',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  arrowPointAtCenter: false
}, _temp);
exports["default"] = Popover;
module.exports = exports['default'];