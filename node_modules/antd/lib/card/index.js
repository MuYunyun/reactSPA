'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

exports["default"] = function (props) {
  var _classNames;

  var _props$prefixCls = props.prefixCls,
      prefixCls = _props$prefixCls === undefined ? 'ant-card' : _props$prefixCls,
      className = props.className,
      children = props.children,
      extra = props.extra,
      bodyStyle = props.bodyStyle,
      title = props.title,
      loading = props.loading,
      _props$bordered = props.bordered,
      bordered = _props$bordered === undefined ? true : _props$bordered,
      other = _objectWithoutProperties(props, ['prefixCls', 'className', 'children', 'extra', 'bodyStyle', 'title', 'loading', 'bordered']);

  var classString = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls + '-loading', loading), _defineProperty(_classNames, prefixCls + '-bordered', bordered), _classNames));

  if (loading) {
    children = _react2["default"].createElement(
      'div',
      null,
      _react2["default"].createElement(
        'p',
        null,
        '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588'
      ),
      _react2["default"].createElement(
        'p',
        null,
        '\u2588\u2588\u2588\u2588\u2588\u2588\u3000\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588'
      ),
      _react2["default"].createElement(
        'p',
        null,
        '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u3000\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588'
      ),
      _react2["default"].createElement(
        'p',
        null,
        '\u2588\u2588\u2588\u2588\u2588\u3000\u2588\u2588\u2588\u2588\u2588\u2588\u3000\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588'
      ),
      _react2["default"].createElement(
        'p',
        null,
        '\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u3000\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u3000\u2588\u2588\u2588'
      )
    );
  }

  var head = title ? _react2["default"].createElement(
    'div',
    { className: prefixCls + '-head' },
    _react2["default"].createElement(
      'h3',
      { className: prefixCls + '-head-title' },
      title
    )
  ) : null;

  return _react2["default"].createElement(
    'div',
    _extends({}, other, { className: classString }),
    head,
    extra ? _react2["default"].createElement(
      'div',
      { className: prefixCls + '-extra' },
      extra
    ) : null,
    _react2["default"].createElement(
      'div',
      { className: prefixCls + '-body', style: bodyStyle },
      children
    )
  );
};

module.exports = exports['default'];