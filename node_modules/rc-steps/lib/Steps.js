'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Steps = function (_React$Component) {
  _inherits(Steps, _React$Component);

  function Steps(props) {
    _classCallCheck(this, Steps);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.culcLastStepOffsetWidth = function () {
      var domNode = _reactDom2["default"].findDOMNode(_this);
      if (domNode.children.length > 0) {
        _this.culcTimeout = setTimeout(function () {
          // +1 for fit edge bug of digit width, like 35.4px
          var lastStepOffsetWidth = domNode.lastChild.offsetWidth + 1;
          if (_this.state.lastStepOffsetWidth === lastStepOffsetWidth) {
            return;
          }
          _this.setState({ lastStepOffsetWidth: lastStepOffsetWidth });
        });
      }
    };

    _this.state = {
      lastStepOffsetWidth: 0
    };
    return _this;
  }

  Steps.prototype.componentDidMount = function componentDidMount() {
    this.culcLastStepOffsetWidth();
  };

  Steps.prototype.componentDidUpdate = function componentDidUpdate() {
    this.culcLastStepOffsetWidth();
  };

  Steps.prototype.componentWillUnmount = function componentWillUnmount() {
    if (this.culcTimeout) {
      clearTimeout(this.culcTimeout);
    }
  };

  Steps.prototype.render = function render() {
    var _classNames,
        _this2 = this;

    var props = this.props;
    var prefixCls = props.prefixCls;
    var _props$style = props.style;
    var style = _props$style === undefined ? {} : _props$style;
    var className = props.className;
    var children = props.children;
    var direction = props.direction;
    var labelPlacement = props.labelPlacement;
    var iconPrefix = props.iconPrefix;
    var status = props.status;
    var size = props.size;
    var current = props.current;

    var restProps = _objectWithoutProperties(props, ['prefixCls', 'style', 'className', 'children', 'direction', 'labelPlacement', 'iconPrefix', 'status', 'size', 'current']);

    var lastIndex = children.length - 1;
    var reLayouted = this.state.lastStepOffsetWidth > 0;
    var classString = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls, true), _defineProperty(_classNames, prefixCls + '-' + size, size), _defineProperty(_classNames, prefixCls + '-' + direction, true), _defineProperty(_classNames, prefixCls + '-label-' + labelPlacement, direction === 'horizontal'), _defineProperty(_classNames, prefixCls + '-hidden', !reLayouted), _defineProperty(_classNames, className, className), _classNames));

    return _react2["default"].createElement(
      'div',
      _extends({ className: classString, style: style }, restProps),
      _react2["default"].Children.map(children, function (ele, idx) {
        var tailWidth = direction === 'vertical' || idx === lastIndex || !reLayouted ? null : 100 / lastIndex + '%';
        var adjustMarginRight = direction === 'vertical' || idx === lastIndex ? null : -(_this2.state.lastStepOffsetWidth / lastIndex + 1);
        var np = {
          stepNumber: (idx + 1).toString(),
          stepLast: idx === lastIndex,
          tailWidth: tailWidth,
          adjustMarginRight: adjustMarginRight,
          prefixCls: prefixCls,
          iconPrefix: iconPrefix,
          wrapperStyle: style
        };

        // fix tail color
        if (status === 'error' && idx === current - 1) {
          np.className = props.prefixCls + '-next-error';
        }

        if (!ele.props.status) {
          if (idx === current) {
            np.status = status;
          } else if (idx < current) {
            np.status = 'finish';
          } else {
            np.status = 'wait';
          }
        }
        return _react2["default"].cloneElement(ele, np);
      }, this)
    );
  };

  return Steps;
}(_react2["default"].Component);

exports["default"] = Steps;


Steps.propTypes = {
  prefixCls: _react.PropTypes.string,
  iconPrefix: _react.PropTypes.string,
  direction: _react.PropTypes.string,
  labelPlacement: _react.PropTypes.string,
  children: _react.PropTypes.any,
  status: _react.PropTypes.string,
  size: _react.PropTypes.string
};

Steps.defaultProps = {
  prefixCls: 'rc-steps',
  iconPrefix: 'rc',
  direction: 'horizontal',
  labelPlacement: 'horizontal',
  current: 0,
  status: 'process',
  size: ''
};
module.exports = exports['default'];