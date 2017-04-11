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

var _isCssAnimationSupported = require('../_util/isCssAnimationSupported');

var _isCssAnimationSupported2 = _interopRequireDefault(_isCssAnimationSupported);

var _object = require('object.omit');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function getNumberArray(num) {
  return num ? num.toString().split('').reverse().map(function (i) {
    return Number(i);
  }) : [];
}

var ScrollNumber = (_temp = _class = function (_React$Component) {
  _inherits(ScrollNumber, _React$Component);

  function ScrollNumber(props) {
    _classCallCheck(this, ScrollNumber);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      animateStarted: true,
      count: props.count
    };
    return _this;
  }

  ScrollNumber.prototype.componentDidMount = function componentDidMount() {
    if (!(0, _isCssAnimationSupported2["default"])()) {
      (0, _reactDom.findDOMNode)(this).className += ' not-support-css-animation';
    }
  };

  ScrollNumber.prototype.getPositionByNum = function getPositionByNum(num, i) {
    if (this.state.animateStarted) {
      return 10 + num;
    }
    var currentDigit = getNumberArray(this.state.count)[i];
    var lastDigit = getNumberArray(this.lastCount)[i];
    // 同方向则在同一侧切换数字
    if (this.state.count > this.lastCount) {
      if (currentDigit >= lastDigit) {
        return 10 + num;
      }
      return 20 + num;
    }
    if (currentDigit <= lastDigit) {
      return 10 + num;
    }
    return num;
  };

  ScrollNumber.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    if ('count' in nextProps) {
      if (this.state.count === nextProps.count) {
        return;
      }
      this.lastCount = this.state.count;
      // 复原数字初始位置
      this.setState({
        animateStarted: true
      }, function () {
        // 等待数字位置复原完毕
        // 开始设置完整的数字
        setTimeout(function () {
          _this2.setState({
            animateStarted: false,
            count: nextProps.count
          }, function () {
            _this2.props.onAnimated();
          });
        }, 5);
      });
    }
  };

  ScrollNumber.prototype.renderNumberList = function renderNumberList(position) {
    var childrenToReturn = [];
    for (var i = 0; i < 30; i++) {
      var currentClassName = position === i ? 'current' : null;
      childrenToReturn.push(_react2["default"].createElement(
        'p',
        { key: i, className: currentClassName },
        i % 10
      ));
    }
    return childrenToReturn;
  };

  ScrollNumber.prototype.renderCurrentNumber = function renderCurrentNumber(num, i) {
    var position = this.getPositionByNum(num, i);
    var height = this.props.height;
    var removeTransition = this.state.animateStarted || getNumberArray(this.lastCount)[i] === undefined;
    return (0, _react.createElement)('span', {
      className: this.props.prefixCls + '-only',
      style: {
        transition: removeTransition && 'none',
        WebkitTransform: 'translateY(' + -position * height + 'px)',
        transform: 'translateY(' + -position * height + 'px)',
        height: height
      },
      key: i
    }, this.renderNumberList(position));
  };

  ScrollNumber.prototype.renderNumberElement = function renderNumberElement() {
    var _this3 = this;

    var state = this.state;
    if (!state.count || isNaN(state.count)) {
      return state.count;
    }
    return getNumberArray(state.count).map(function (num, i) {
      return _this3.renderCurrentNumber(num, i);
    }).reverse();
  };

  ScrollNumber.prototype.render = function render() {
    var _props = this.props,
        component = _props.component,
        prefixCls = _props.prefixCls,
        className = _props.className,
        otherProps = _objectWithoutProperties(_props, ['component', 'prefixCls', 'className']);
    // fix https://fb.me/react-unknown-prop


    var restProps = (0, _object2["default"])(otherProps, ['count', 'onAnimated']);
    var props = _extends({}, restProps, {
      className: prefixCls + ' ' + className
    });
    return (0, _react.createElement)(component, props, this.renderNumberElement());
  };

  return ScrollNumber;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-scroll-number',
  count: null,
  component: 'sup',
  onAnimated: function onAnimated() {},

  height: 18
}, _class.propTypes = {
  count: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.number]),
  component: _react2["default"].PropTypes.string,
  onAnimated: _react2["default"].PropTypes.func,
  height: _react2["default"].PropTypes.number
}, _temp);
exports["default"] = ScrollNumber;
module.exports = exports['default'];