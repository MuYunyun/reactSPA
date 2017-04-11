'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _rcProgress = require('rc-progress');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var statusColorMap = {
  normal: '#2db7f5',
  exception: '#ff5500',
  success: '#87d068'
};

var Line = (_temp = _class = function (_React$Component) {
  _inherits(Line, _React$Component);

  function Line() {
    _classCallCheck(this, Line);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Line.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        status = _props.status,
        format = _props.format,
        percent = _props.percent,
        trailColor = _props.trailColor,
        type = _props.type,
        strokeWidth = _props.strokeWidth,
        width = _props.width,
        className = _props.className,
        showInfo = _props.showInfo,
        restProps = _objectWithoutProperties(_props, ['prefixCls', 'status', 'format', 'percent', 'trailColor', 'type', 'strokeWidth', 'width', 'className', 'showInfo']);

    var progressStatus = parseInt(percent, 10) >= 100 && !('status' in this.props) ? 'success' : status || 'normal';
    var progressInfo = void 0;
    var progress = void 0;
    var textFormatter = format || function (percentNumber) {
      return percentNumber + '%';
    };

    if (showInfo) {
      var text = void 0;
      var iconType = type === 'circle' ? '' : '-circle';
      if (progressStatus === 'exception') {
        text = format ? textFormatter(percent) : _react2["default"].createElement(_icon2["default"], { type: 'cross' + iconType });
      } else if (progressStatus === 'success') {
        text = format ? textFormatter(percent) : _react2["default"].createElement(_icon2["default"], { type: 'check' + iconType });
      } else {
        text = textFormatter(percent);
      }
      progressInfo = _react2["default"].createElement(
        'span',
        { className: prefixCls + '-text' },
        text
      );
    }

    if (type === 'line') {
      var percentStyle = {
        width: percent + '%',
        height: strokeWidth || 10
      };
      progress = _react2["default"].createElement(
        'div',
        null,
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-outer' },
          _react2["default"].createElement(
            'div',
            { className: prefixCls + '-inner' },
            _react2["default"].createElement('div', { className: prefixCls + '-bg', style: percentStyle })
          )
        ),
        progressInfo
      );
    } else if (type === 'circle') {
      var circleSize = width || 132;
      var circleStyle = {
        width: circleSize,
        height: circleSize,
        fontSize: circleSize * 0.16 + 6
      };
      progress = _react2["default"].createElement(
        'div',
        { className: prefixCls + '-inner', style: circleStyle },
        _react2["default"].createElement(_rcProgress.Circle, { percent: percent, strokeWidth: strokeWidth || 6,
          strokeColor: statusColorMap[progressStatus], trailColor: trailColor
        }),
        progressInfo
      );
    }

    var classString = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, '' + prefixCls, true), _defineProperty(_classNames, prefixCls + '-' + type, true), _defineProperty(_classNames, prefixCls + '-status-' + progressStatus, true), _defineProperty(_classNames, prefixCls + '-show-info', showInfo), _defineProperty(_classNames, className, !!className), _classNames));

    return _react2["default"].createElement(
      'div',
      _extends({}, restProps, { className: classString }),
      progress
    );
  };

  return Line;
}(_react2["default"].Component), _class.defaultProps = {
  type: 'line',
  percent: 0,
  showInfo: true,
  trailColor: '#f3f3f3',
  prefixCls: 'ant-progress'
}, _class.propTypes = {
  status: _react.PropTypes.oneOf(['normal', 'exception', 'active', 'success']),
  type: _react.PropTypes.oneOf(['line', 'circle']),
  showInfo: _react.PropTypes.bool,
  percent: _react.PropTypes.number,
  width: _react.PropTypes.number,
  strokeWidth: _react.PropTypes.number,
  trailColor: _react.PropTypes.string,
  format: _react.PropTypes.func
}, _temp);
exports["default"] = Line;
module.exports = exports['default'];