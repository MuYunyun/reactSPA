'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports["default"] = confirm;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Modal = require('./Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _button = require('../button');

var _button2 = _interopRequireDefault(_button);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _locale = require('./locale');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function confirm(config) {
  var _classNames;

  var props = _extends({}, config);
  var div = document.createElement('div');
  document.body.appendChild(div);

  props.iconType = props.iconType || 'question-circle';

  var width = props.width || 416;
  var style = props.style || {};

  // 默认为 true，保持向下兼容
  if (!('okCancel' in props)) {
    props.okCancel = true;
  }

  var runtimeLocale = (0, _locale.getConfirmLocale)();

  props.okText = props.okText || (props.okCancel ? runtimeLocale.okText : runtimeLocale.justOkText);
  props.cancelText = props.cancelText || runtimeLocale.cancelText;

  function close() {
    var unmountResult = _reactDom2["default"].unmountComponentAtNode(div);
    if (unmountResult) {
      div.parentNode.removeChild(div);
    }
  }

  function onCancel() {
    var cancelFn = props.onCancel;
    if (cancelFn) {
      var ret = void 0;
      if (cancelFn.length) {
        ret = cancelFn(close);
      } else {
        ret = cancelFn();
        if (!ret) {
          close();
        }
      }
      if (ret && ret.then) {
        ret.then(close);
      }
    } else {
      close();
    }
  }

  function onOk() {
    var okFn = props.onOk;
    if (okFn) {
      var ret = void 0;
      if (okFn.length) {
        ret = okFn(close);
      } else {
        ret = okFn();
        if (!ret) {
          close();
        }
      }
      if (ret && ret.then) {
        ret.then(close);
      }
    } else {
      close();
    }
  }

  var body = _react2["default"].createElement(
    'div',
    { className: 'ant-confirm-body' },
    _react2["default"].createElement(_icon2["default"], { type: props.iconType }),
    _react2["default"].createElement(
      'span',
      { className: 'ant-confirm-title' },
      props.title
    ),
    _react2["default"].createElement(
      'div',
      { className: 'ant-confirm-content' },
      props.content
    )
  );

  var footer = null;
  if (props.okCancel) {
    footer = _react2["default"].createElement(
      'div',
      { className: 'ant-confirm-btns' },
      _react2["default"].createElement(
        _button2["default"],
        { type: 'ghost', size: 'large', onClick: onCancel },
        props.cancelText
      ),
      _react2["default"].createElement(
        _button2["default"],
        { type: 'primary', size: 'large', onClick: onOk },
        props.okText
      )
    );
  } else {
    footer = _react2["default"].createElement(
      'div',
      { className: 'ant-confirm-btns' },
      _react2["default"].createElement(
        _button2["default"],
        { type: 'primary', size: 'large', onClick: onOk },
        props.okText
      )
    );
  }

  var classString = (0, _classnames2["default"])((_classNames = {
    'ant-confirm': true
  }, _defineProperty(_classNames, 'ant-confirm-' + props.type, true), _defineProperty(_classNames, props.className, !!props.className), _classNames));

  _reactDom2["default"].render(_react2["default"].createElement(
    _Modal2["default"],
    {
      className: classString,
      visible: true,
      closable: false,
      title: '',
      transitionName: 'zoom',
      footer: '',
      maskTransitionName: 'fade',
      style: style,
      width: width
    },
    _react2["default"].createElement(
      'div',
      { style: { zoom: 1, overflow: 'hidden' } },
      body,
      ' ',
      footer
    )
  ), div);

  return {
    destroy: close
  };
}
module.exports = exports['default'];