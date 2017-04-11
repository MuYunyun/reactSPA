'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTooltip = require('rc-tooltip');

var _rcTooltip2 = _interopRequireDefault(_rcTooltip);

var _placements = require('../popover/placements');

var _placements2 = _interopRequireDefault(_placements);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Tooltip = (_temp = _class = function (_React$Component) {
  _inherits(Tooltip, _React$Component);

  function Tooltip(props) {
    _classCallCheck(this, Tooltip);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onVisibleChange = function (visible) {
      _this.setState({ visible: visible });
      _this.props.onVisibleChange(visible);
    };

    _this.onPopupAlign = function (domNode, align) {
      var placements = _this.getPlacements();
      // 当前返回的位置
      var placement = Object.keys(placements).filter(function (key) {
        return placements[key].points[0] === align.points[0] && placements[key].points[1] === align.points[1];
      })[0];
      if (!placement) {
        return;
      }
      // 根据当前坐标设置动画点
      var rect = domNode.getBoundingClientRect();
      var transformOrigin = {
        top: '50%',
        left: '50%'
      };
      if (placement.indexOf('top') >= 0 || placement.indexOf('Bottom') >= 0) {
        transformOrigin.top = rect.height - align.offset[1] + 'px';
      } else if (placement.indexOf('Top') >= 0 || placement.indexOf('bottom') >= 0) {
        transformOrigin.top = -align.offset[1] + 'px';
      }
      if (placement.indexOf('left') >= 0 || placement.indexOf('Right') >= 0) {
        transformOrigin.left = rect.width - align.offset[0] + 'px';
      } else if (placement.indexOf('right') >= 0 || placement.indexOf('Left') >= 0) {
        transformOrigin.left = -align.offset[0] + 'px';
      }
      domNode.style.transformOrigin = transformOrigin.left + ' ' + transformOrigin.top;
    };

    _this.state = {
      visible: false
    };
    return _this;
  }

  Tooltip.prototype.getPopupDomNode = function getPopupDomNode() {
    return this.refs.tooltip.getPopupDomNode();
  };

  Tooltip.prototype.getPlacements = function getPlacements() {
    var _props = this.props,
        builtinPlacements = _props.builtinPlacements,
        arrowPointAtCenter = _props.arrowPointAtCenter;

    return builtinPlacements || (0, _placements2["default"])({
      arrowPointAtCenter: arrowPointAtCenter,
      verticalArrowShift: 8
    });
  };

  // 动态设置动画点


  Tooltip.prototype.render = function render() {
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        title = _props2.title,
        overlay = _props2.overlay,
        children = _props2.children;
    // Hide tooltip when there is no title

    var visible = this.state.visible;
    if (!title && !overlay) {
      visible = false;
    }
    if ('visible' in this.props) {
      visible = this.props.visible;
    }
    var openClassName = this.props.openClassName || prefixCls + '-open';
    var childrenCls = children && children.props && children.props.className ? children.props.className + ' ' + openClassName : openClassName;

    return _react2["default"].createElement(
      _rcTooltip2["default"],
      _extends({
        overlay: title,
        visible: visible,
        onPopupAlign: this.onPopupAlign,
        ref: 'tooltip'
      }, this.props, {
        builtinPlacements: this.getPlacements(),
        onVisibleChange: this.onVisibleChange
      }),
      visible ? (0, _react.cloneElement)(children, { className: childrenCls }) : children
    );
  };

  return Tooltip;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-tooltip',
  placement: 'top',
  transitionName: 'zoom-big',
  mouseEnterDelay: 0.1,
  mouseLeaveDelay: 0.1,
  onVisibleChange: function onVisibleChange() {},

  arrowPointAtCenter: false
}, _temp);
exports["default"] = Tooltip;
module.exports = exports['default'];