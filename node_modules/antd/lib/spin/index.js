'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _isCssAnimationSupported = require('../_util/isCssAnimationSupported');

var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _object = require('object.omit');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Spin = (_temp = _class = function (_React$Component) {
  _inherits(Spin, _React$Component);

  function Spin(props) {
    _classCallCheck(this, Spin);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    var spinning = _this.getSpinning(props);
    _this.state = {
      spinning: spinning
    };
    return _this;
  }

  Spin.prototype.isNestedPattern = function isNestedPattern() {
    return !!(this.props && this.props.children);
  };

  Spin.prototype.componentDidMount = function componentDidMount() {
    (0, _warning2["default"])(!('spining' in this.props), '`spining` property of Popover is a spell mistake, use `spinning` instead.');
    if (!(0, _isCssAnimationSupported2["default"])()) {
      // Show text in IE8/9
      (0, _reactDom.findDOMNode)(this).className += ' ' + this.props.prefixCls + '-show-text';
    }
  };

  Spin.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
  };

  Spin.prototype.getSpinning = function getSpinning(props) {
    // Backwards support
    if ('spining' in props) {
      (0, _warning2["default"])(false, '`spining` property of Spin is a spell mistake, use `spinning` instead.');
      return props.spining;
    }
    return props.spinning;
  };

  Spin.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var currentSpinning = this.getSpinning(this.props);
    var spinning = this.getSpinning(nextProps);
    if (this.debounceTimeout) {
      clearTimeout(this.debounceTimeout);
    }
    if (currentSpinning && !spinning) {
      this.debounceTimeout = setTimeout(function () {
        return _this2.setState({ spinning: spinning });
      }, 500);
    } else {
      this.setState({ spinning: spinning });
    }
  };

  Spin.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        className = _props.className,
        size = _props.size,
        prefixCls = _props.prefixCls,
        tip = _props.tip,
        restProps = _objectWithoutProperties(_props, ['className', 'size', 'prefixCls', 'tip']);

    var spinning = this.state.spinning;


    var spinClassName = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-spinning', spinning), _defineProperty(_classNames, prefixCls + '-show-text', !!this.props.tip), _defineProperty(_classNames, className, !!className), _classNames));

    // fix https://fb.me/react-unknown-prop
    var divProps = (0, _object2["default"])(restProps, ['spinning']);

    var spinElement = _react2["default"].createElement(
      'div',
      _extends({}, divProps, { className: spinClassName }),
      _react2["default"].createElement('span', { className: prefixCls + '-dot' }),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-text' },
        tip || '加载中...'
      )
    );

    if (this.isNestedPattern()) {
      return _react2["default"].createElement(
        'div',
        _extends({}, divProps, { className: spinning ? prefixCls + '-nested-loading' : '' }),
        spinElement,
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-container' },
          this.props.children
        )
      );
    }
    return spinElement;
  };

  return Spin;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-spin',
  spinning: true
}, _class.propTypes = {
  className: _react2["default"].PropTypes.string,
  size: _react2["default"].PropTypes.oneOf(['small', 'default', 'large'])
}, _temp);
exports["default"] = Spin;
module.exports = exports['default'];