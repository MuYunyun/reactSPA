'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _createChainedFunction = require('rc-util/lib/createChainedFunction');

var _createChainedFunction2 = _interopRequireDefault(_createChainedFunction);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _Notice = require('./Notice');

var _Notice2 = _interopRequireDefault(_Notice);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var seed = 0;
var now = Date.now();

function getUuid() {
  return 'rcNotification_' + now + '_' + seed++;
}

var Notification = _react2["default"].createClass({
  displayName: 'Notification',

  propTypes: {
    prefixCls: _react.PropTypes.string,
    transitionName: _react.PropTypes.string,
    animation: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]),
    style: _react.PropTypes.object
  },

  getDefaultProps: function getDefaultProps() {
    return {
      prefixCls: 'rc-notification',
      animation: 'fade',
      style: {
        top: 65,
        left: '50%'
      }
    };
  },
  getInitialState: function getInitialState() {
    return {
      notices: []
    };
  },
  getTransitionName: function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    if (!transitionName && props.animation) {
      transitionName = props.prefixCls + '-' + props.animation;
    }
    return transitionName;
  },
  add: function add(notice) {
    var key = notice.key = notice.key || getUuid();
    this.setState(function (previousState) {
      var notices = previousState.notices;
      if (!notices.filter(function (v) {
        return v.key === key;
      }).length) {
        return {
          notices: notices.concat(notice)
        };
      }
    });
  },
  remove: function remove(key) {
    this.setState(function (previousState) {
      return {
        notices: previousState.notices.filter(function (notice) {
          return notice.key !== key;
        })
      };
    });
  },
  render: function render() {
    var _this = this,
        _className;

    var props = this.props;
    var noticeNodes = this.state.notices.map(function (notice) {
      var onClose = (0, _createChainedFunction2["default"])(_this.remove.bind(_this, notice.key), notice.onClose);
      return _react2["default"].createElement(
        _Notice2["default"],
        _extends({
          prefixCls: props.prefixCls
        }, notice, {
          onClose: onClose
        }),
        notice.content
      );
    });
    var className = (_className = {}, _defineProperty(_className, props.prefixCls, 1), _defineProperty(_className, props.className, !!props.className), _className);
    return _react2["default"].createElement(
      'div',
      { className: (0, _classnames2["default"])(className), style: props.style },
      _react2["default"].createElement(
        _rcAnimate2["default"],
        { transitionName: this.getTransitionName() },
        noticeNodes
      )
    );
  }
});

Notification.newInstance = function newNotificationInstance(properties) {
  var props = properties || {};
  var div = document.createElement('div');
  document.body.appendChild(div);
  var notification = _reactDom2["default"].render(_react2["default"].createElement(Notification, props), div);
  return {
    notice: function notice(noticeProps) {
      notification.add(noticeProps);
    },
    removeNotice: function removeNotice(key) {
      notification.remove(key);
    },

    component: notification,
    destroy: function destroy() {
      _reactDom2["default"].unmountComponentAtNode(div);
      document.body.removeChild(div);
    }
  };
};

exports["default"] = Notification;
module.exports = exports['default'];