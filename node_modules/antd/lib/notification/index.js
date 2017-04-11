'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcNotification = require('rc-notification');

var _rcNotification2 = _interopRequireDefault(_rcNotification);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var defaultTop = 24;
var notificationInstance = void 0;
var defaultDuration = 4.5;

function getNotificationInstance() {
  if (notificationInstance) {
    return notificationInstance;
  }
  notificationInstance = _rcNotification2["default"].newInstance({
    prefixCls: 'ant-notification',
    style: {
      top: defaultTop,
      right: 0
    }
  });
  return notificationInstance;
}

function notice(args) {
  var prefixCls = args.prefixCls || 'ant-notification-notice';

  var duration = void 0;
  if (args.duration === undefined) {
    duration = defaultDuration;
  } else {
    duration = args.duration;
  }

  var iconType = '';
  switch (args.icon) {
    case 'success':
      iconType = 'check-circle-o';
      break;
    case 'info':
      iconType = 'info-circle-o';
      break;
    case 'error':
      iconType = 'cross-circle-o';
      break;
    case 'warning':
      iconType = 'exclamation-circle-o';
      break;
    default:
      iconType = 'info-circle';
  }

  getNotificationInstance().notice({
    content: _react2["default"].createElement(
      'div',
      { className: prefixCls + '-content ' + (args.icon ? prefixCls + '-with-icon' : '') },
      args.icon ? _react2["default"].createElement(_icon2["default"], { className: prefixCls + '-icon ' + prefixCls + '-icon-' + args.icon, type: iconType }) : null,
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-message' },
        args.message
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-description' },
        args.description
      ),
      args.btn ? _react2["default"].createElement(
        'span',
        { className: prefixCls + '-btn' },
        args.btn
      ) : null
    ),
    duration: duration,
    closable: true,
    onClose: args.onClose,
    key: args.key,
    style: {}
  });
}

var api = {
  open: function open(args) {
    notice(args);
  },
  close: function close(key) {
    if (notificationInstance) {
      notificationInstance.removeNotice(key);
    }
  },
  config: function config(options) {
    if ('top' in options) {
      defaultTop = options.top;
    }
    if ('duration' in options) {
      defaultDuration = options.duration;
    }
  },
  destroy: function destroy() {
    if (notificationInstance) {
      notificationInstance.destroy();
      notificationInstance = null;
    }
  }
};

['success', 'info', 'warning', 'error'].forEach(function (type) {
  api[type] = function (args) {
    return api.open(_extends({}, args, { icon: type }));
  };
});

api.warn = api.warning;

exports["default"] = api;
module.exports = exports['default'];