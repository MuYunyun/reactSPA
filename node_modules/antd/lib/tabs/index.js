'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _rcTabs = require('rc-tabs');

var _rcTabs2 = _interopRequireDefault(_rcTabs);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Tabs = (_temp2 = _class = function (_React$Component) {
  _inherits(Tabs, _React$Component);

  function Tabs() {
    var _temp, _this, _ret;

    _classCallCheck(this, Tabs);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.createNewTab = function (targetKey) {
      _this.props.onEdit(targetKey, 'add');
    }, _this.removeTab = function (targetKey, e) {
      e.stopPropagation();
      if (!targetKey) {
        return;
      }
      _this.props.onEdit(targetKey, 'remove');
    }, _this.handleChange = function (activeKey) {
      _this.props.onChange(activeKey);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Tabs.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        size = _props.size,
        tabPosition = _props.tabPosition,
        animation = _props.animation,
        type = _props.type,
        children = _props.children,
        tabBarExtraContent = _props.tabBarExtraContent,
        hideAdd = _props.hideAdd;

    var className = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, this.props.className, !!this.props.className), _defineProperty(_classNames, prefixCls + '-mini', size === 'small' || size === 'mini'), _defineProperty(_classNames, prefixCls + '-vertical', tabPosition === 'left' || tabPosition === 'right'), _defineProperty(_classNames, prefixCls + '-card', type.indexOf('card') >= 0), _defineProperty(_classNames, prefixCls + '-' + type, true), _classNames));
    if (tabPosition === 'left' || tabPosition === 'right' || type.indexOf('card') >= 0) {
      animation = null;
    }
    // only card type tabs can be added and closed
    var childrenWithCross = void 0;
    if (type === 'editable-card') {
      childrenWithCross = [];
      _react2["default"].Children.forEach(children, function (child, index) {
        childrenWithCross.push((0, _react.cloneElement)(child, {
          tab: _react2["default"].createElement(
            'div',
            null,
            child.props.tab,
            _react2["default"].createElement(_icon2["default"], { type: 'cross', onClick: function onClick(e) {
                return _this2.removeTab(child.key, e);
              } })
          ),
          key: child.key || index
        }));
      });
      // Add new tab handler
      if (!hideAdd) {
        tabBarExtraContent = _react2["default"].createElement(
          'span',
          null,
          _react2["default"].createElement(_icon2["default"], { type: 'plus', className: prefixCls + '-new-tab', onClick: this.createNewTab }),
          tabBarExtraContent
        );
      }
    }

    tabBarExtraContent = tabBarExtraContent ? _react2["default"].createElement(
      'div',
      { className: prefixCls + '-extra-content' },
      tabBarExtraContent
    ) : null;

    return _react2["default"].createElement(
      _rcTabs2["default"],
      _extends({}, this.props, {
        className: className,
        tabBarExtraContent: tabBarExtraContent,
        onChange: this.handleChange,
        animation: animation
      }),
      childrenWithCross || children
    );
  };

  return Tabs;
}(_react2["default"].Component), _class.TabPane = _rcTabs2["default"].TabPane, _class.defaultProps = {
  prefixCls: 'ant-tabs',
  animation: 'slide-horizontal',
  type: 'line', // or 'card' 'editable-card'
  onChange: function onChange() {},
  onEdit: function onEdit() {},

  hideAdd: false
}, _temp2);
exports["default"] = Tabs;
module.exports = exports['default'];