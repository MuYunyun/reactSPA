'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function Step(props) {
  var _classNames, _classNames2;

  var className = props.className;
  var prefixCls = props.prefixCls;
  var style = props.style;
  var tailWidth = props.tailWidth;
  var _props$status = props.status;
  var status = _props$status === undefined ? 'wait' : _props$status;
  var iconPrefix = props.iconPrefix;
  var icon = props.icon;
  var wrapperStyle = props.wrapperStyle;
  var adjustMarginRight = props.adjustMarginRight;
  var stepLast = props.stepLast;
  var stepNumber = props.stepNumber;
  var description = props.description;
  var title = props.title;

  var restProps = _objectWithoutProperties(props, ['className', 'prefixCls', 'style', 'tailWidth', 'status', 'iconPrefix', 'icon', 'wrapperStyle', 'adjustMarginRight', 'stepLast', 'stepNumber', 'description', 'title']);

  var iconClassName = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-icon', true), _defineProperty(_classNames, iconPrefix + 'icon', true), _defineProperty(_classNames, iconPrefix + 'icon-' + icon, icon), _defineProperty(_classNames, iconPrefix + 'icon-check', !icon && status === 'finish'), _defineProperty(_classNames, iconPrefix + 'icon-cross', !icon && status === 'error'), _classNames));
  var iconNode = icon || status === 'finish' || status === 'error' ? _react2["default"].createElement('span', { className: iconClassName }) : _react2["default"].createElement(
    'span',
    { className: prefixCls + '-icon' },
    stepNumber
  );
  var classString = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-item', true), _defineProperty(_classNames2, prefixCls + '-item-last', stepLast), _defineProperty(_classNames2, prefixCls + '-status-' + status, true), _defineProperty(_classNames2, prefixCls + '-custom', icon), _defineProperty(_classNames2, className, !!className), _classNames2));
  return _react2["default"].createElement(
    'div',
    _extends({}, restProps, {
      className: classString,
      style: _extends({ width: tailWidth, marginRight: adjustMarginRight }, style)
    }),
    stepLast ? '' : _react2["default"].createElement(
      'div',
      { className: prefixCls + '-tail' },
      _react2["default"].createElement('i', null)
    ),
    _react2["default"].createElement(
      'div',
      { className: prefixCls + '-step' },
      _react2["default"].createElement(
        'div',
        {
          className: prefixCls + '-head',
          style: { background: wrapperStyle.background || wrapperStyle.backgroundColor }
        },
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-head-inner' },
          iconNode
        )
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-main' },
        _react2["default"].createElement(
          'div',
          {
            className: prefixCls + '-title',
            style: { background: wrapperStyle.background || wrapperStyle.backgroundColor }
          },
          title
        ),
        description ? _react2["default"].createElement(
          'div',
          { className: prefixCls + '-description' },
          description
        ) : ''
      )
    )
  );
}

Step.propTypes = {
  className: _react.PropTypes.string,
  prefixCls: _react.PropTypes.string,
  style: _react.PropTypes.object,
  wrapperStyle: _react.PropTypes.object,
  tailWidth: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  status: _react.PropTypes.string,
  iconPrefix: _react.PropTypes.string,
  icon: _react.PropTypes.string,
  adjustMarginRight: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
  stepLast: _react.PropTypes.bool,
  stepNumber: _react.PropTypes.string,
  description: _react.PropTypes.any,
  title: _react.PropTypes.any
};

module.exports = Step;