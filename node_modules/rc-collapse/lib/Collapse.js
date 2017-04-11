'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Panel = require('./Panel');

var _Panel2 = _interopRequireDefault(_Panel);

var _openAnimationFactory = require('./openAnimationFactory');

var _openAnimationFactory2 = _interopRequireDefault(_openAnimationFactory);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function toArray(activeKey) {
  var currentActiveKey = activeKey;
  if (!Array.isArray(currentActiveKey)) {
    currentActiveKey = currentActiveKey ? [currentActiveKey] : [];
  }
  return currentActiveKey;
}

var Collapse = _react2["default"].createClass({
  displayName: 'Collapse',

  propTypes: {
    children: _react.PropTypes.any,
    prefixCls: _react.PropTypes.string,
    activeKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
    defaultActiveKey: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.arrayOf(_react.PropTypes.string)]),
    openAnimation: _react.PropTypes.object,
    onChange: _react.PropTypes.func,
    accordion: _react.PropTypes.bool,
    className: _react.PropTypes.string,
    style: _react.PropTypes.object
  },

  statics: {
    Panel: _Panel2["default"]
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-collapse',
      onChange: function onChange() {},

      accordion: false
    };
  },
  getInitialState: function getInitialState() {
    var _props = this.props,
        activeKey = _props.activeKey,
        defaultActiveKey = _props.defaultActiveKey;

    var currentActiveKey = defaultActiveKey;
    if ('activeKey' in this.props) {
      currentActiveKey = activeKey;
    }
    return {
      openAnimation: this.props.openAnimation || (0, _openAnimationFactory2["default"])(this.props.prefixCls),
      activeKey: toArray(currentActiveKey)
    };
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    if ('activeKey' in nextProps) {
      this.setState({
        activeKey: toArray(nextProps.activeKey)
      });
    }
    if ('openAnimation' in nextProps) {
      this.setState({
        openAnimation: nextProps.openAnimation
      });
    }
  },
  onClickItem: function onClickItem(key) {
    var _this = this;

    return function () {
      var activeKey = _this.state.activeKey;
      if (_this.props.accordion) {
        activeKey = activeKey[0] === key ? [] : [key];
      } else {
        activeKey = [].concat(_toConsumableArray(activeKey));
        var index = activeKey.indexOf(key);
        var isActive = index > -1;
        if (isActive) {
          // remove active state
          activeKey.splice(index, 1);
        } else {
          activeKey.push(key);
        }
      }
      _this.setActiveKey(activeKey);
    };
  },
  getItems: function getItems() {
    var _this2 = this;

    var activeKey = this.state.activeKey;
    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        accordion = _props2.accordion;

    var newChildren = [];

    _react.Children.forEach(this.props.children, function (child, index) {
      if (!child) return;
      // If there is no key provide, use the panel order as default key
      var key = child.key || String(index);
      var header = child.props.header;
      var isActive = false;
      if (accordion) {
        isActive = activeKey[0] === key;
      } else {
        isActive = activeKey.indexOf(key) > -1;
      }

      var props = {
        key: key,
        header: header,
        isActive: isActive,
        prefixCls: prefixCls,
        openAnimation: _this2.state.openAnimation,
        children: child.props.children,
        onItemClick: _this2.onClickItem(key).bind(_this2)
      };

      newChildren.push(_react2["default"].cloneElement(child, props));
    });

    return newChildren;
  },
  setActiveKey: function setActiveKey(activeKey) {
    if (!('activeKey' in this.props)) {
      this.setState({ activeKey: activeKey });
    }
    this.props.onChange(this.props.accordion ? activeKey[0] : activeKey);
  },
  render: function render() {
    var _classNames;

    var _props3 = this.props,
        prefixCls = _props3.prefixCls,
        className = _props3.className,
        style = _props3.style;

    var collapseClassName = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, className, !!className), _classNames));
    return _react2["default"].createElement(
      'div',
      { className: collapseClassName, style: style },
      this.getItems()
    );
  }
});

exports["default"] = Collapse;
module.exports = exports['default'];