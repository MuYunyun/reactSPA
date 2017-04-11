'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _openAnimation = require('../_util/openAnimation');

var _openAnimation2 = _interopRequireDefault(_openAnimation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var Menu = (_temp = _class = function (_React$Component) {
  _inherits(Menu, _React$Component);

  function Menu(props) {
    _classCallCheck(this, Menu);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleClick = function (e) {
      _this.setOpenKeys([]);
      _this.props.onClick(e);
    };

    _this.handleOpenKeys = function (e) {
      var openKeys = e.openKeys;

      _this.setOpenKeys(openKeys);
      _this.props.onOpen(e);
    };

    _this.handleCloseKeys = function (e) {
      var openKeys = e.openKeys;

      _this.setOpenKeys(openKeys);
      _this.props.onClose(e);
    };

    _this.state = {
      openKeys: []
    };
    return _this;
  }

  Menu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.mode === 'inline' && nextProps.mode !== 'inline') {
      this.switchModeFromInline = true;
    }
    if ('openKeys' in nextProps) {
      this.setOpenKeys(nextProps.openKeys);
    }
  };

  Menu.prototype.setOpenKeys = function setOpenKeys(openKeys) {
    if (!('openKeys' in this.props)) {
      this.setState({ openKeys: openKeys });
    }
  };

  Menu.prototype.render = function render() {
    var openAnimation = this.props.openAnimation || this.props.openTransitionName;
    if (!openAnimation) {
      switch (this.props.mode) {
        case 'horizontal':
          openAnimation = 'slide-up';
          break;
        case 'vertical':
          // When mode switch from inline
          // submenu should hide without animation
          if (this.switchModeFromInline) {
            openAnimation = '';
            this.switchModeFromInline = false;
          } else {
            openAnimation = 'zoom-big';
          }
          break;
        case 'inline':
          openAnimation = _openAnimation2["default"];
          break;
        default:
      }
    }

    var props = {};
    var className = this.props.className + ' ' + this.props.prefixCls + '-' + this.props.theme;
    if (this.props.mode !== 'inline') {
      // 这组属性的目的是
      // 弹出型的菜单需要点击后立即关闭
      // 另外，弹出型的菜单的受控模式没有使用场景
      props = {
        openKeys: this.state.openKeys,
        onClick: this.handleClick,
        onOpen: this.handleOpenKeys,
        onClose: this.handleCloseKeys,
        openTransitionName: openAnimation,
        className: className
      };
    } else {
      props = {
        openAnimation: openAnimation,
        className: className
      };
    }
    return _react2["default"].createElement(_rcMenu2["default"], _extends({}, this.props, props));
  };

  return Menu;
}(_react2["default"].Component), _class.Divider = _rcMenu.Divider, _class.Item = _rcMenu.Item, _class.SubMenu = _rcMenu.SubMenu, _class.ItemGroup = _rcMenu.ItemGroup, _class.defaultProps = {
  prefixCls: 'ant-menu',
  onClick: noop,
  onOpen: noop,
  onClose: noop,
  className: '',
  theme: 'light' }, _temp);
exports["default"] = Menu;
module.exports = exports['default'];