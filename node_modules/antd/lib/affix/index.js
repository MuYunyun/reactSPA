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

var _reactDom2 = _interopRequireDefault(_reactDom);

var _addEventListener = require('rc-util/lib/Dom/addEventListener');

var _addEventListener2 = _interopRequireDefault(_addEventListener);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function getScroll(target, top) {
  var prop = top ? 'pageYOffset' : 'pageXOffset';
  var method = top ? 'scrollTop' : 'scrollLeft';
  var isWindow = target === window;

  var ret = isWindow ? target[prop] : target[method];
  // ie6,7,8 standard mode
  if (isWindow && typeof ret !== 'number') {
    ret = window.document.documentElement[method];
  }

  return ret;
}

function getTargetRect(target) {
  return target !== window ? target.getBoundingClientRect() : { top: 0, left: 0, bottom: 0 };
}

function getOffset(element, target) {
  var elemRect = element.getBoundingClientRect();
  var targetRect = getTargetRect(target);

  var scrollTop = getScroll(target, true);
  var scrollLeft = getScroll(target, false);

  var docElem = window.document.body;
  var clientTop = docElem.clientTop || 0;
  var clientLeft = docElem.clientLeft || 0;

  return {
    top: elemRect.top - targetRect.top + scrollTop - clientTop,
    left: elemRect.left - targetRect.left + scrollLeft - clientLeft
  };
}

var Affix = (_temp = _class = function (_React$Component) {
  _inherits(Affix, _React$Component);

  function Affix(props) {
    _classCallCheck(this, Affix);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.updatePosition = function (e) {
      var _this$props = _this.props,
          offsetTop = _this$props.offsetTop,
          offsetBottom = _this$props.offsetBottom,
          offset = _this$props.offset,
          target = _this$props.target;

      var targetNode = target();

      // Backwards support
      offsetTop = offsetTop || offset;
      var scrollTop = getScroll(targetNode, true);
      var elemOffset = getOffset(_reactDom2["default"].findDOMNode(_this), targetNode);
      var elemSize = {
        width: _this.refs.fixedNode.offsetWidth,
        height: _this.refs.fixedNode.offsetHeight
      };

      var offsetMode = {};
      // Default to `offsetTop=0`.
      if (typeof offsetTop !== 'number' && typeof offsetBottom !== 'number') {
        offsetMode.top = true;
        offsetTop = 0;
      } else {
        offsetMode.top = typeof offsetTop === 'number';
        offsetMode.bottom = typeof offsetBottom === 'number';
      }

      var targetRect = getTargetRect(targetNode);
      var targetInnerHeight = targetNode.innerHeight || targetNode.clientHeight;
      if (scrollTop > elemOffset.top - offsetTop && offsetMode.top) {
        // Fixed Top
        _this.setAffixStyle(e, {
          position: 'fixed',
          top: targetRect.top + offsetTop,
          left: targetRect.left + elemOffset.left,
          width: _reactDom2["default"].findDOMNode(_this).offsetWidth
        });
        _this.setPlaceholderStyle(e, {
          width: _reactDom2["default"].findDOMNode(_this).offsetWidth,
          height: _reactDom2["default"].findDOMNode(_this).offsetHeight
        });
      } else if (scrollTop < elemOffset.top + elemSize.height + offsetBottom - targetInnerHeight && offsetMode.bottom) {
        // Fixed Bottom
        var targetBottomOffet = targetNode === window ? 0 : window.innerHeight - targetRect.bottom;
        _this.setAffixStyle(e, {
          position: 'fixed',
          bottom: targetBottomOffet + offsetBottom,
          left: targetRect.left + elemOffset.left,
          width: _reactDom2["default"].findDOMNode(_this).offsetWidth
        });
        _this.setPlaceholderStyle(e, {
          width: _reactDom2["default"].findDOMNode(_this).offsetWidth,
          height: _reactDom2["default"].findDOMNode(_this).offsetHeight
        });
      } else {
        _this.setAffixStyle(e, null);
        _this.setPlaceholderStyle(e, null);
      }
    };

    _this.state = {
      affixStyle: null,
      placeholderStyle: null
    };
    return _this;
  }

  Affix.prototype.setAffixStyle = function setAffixStyle(e, affixStyle) {
    var _this2 = this;

    var _props = this.props,
        onChange = _props.onChange,
        target = _props.target;

    var originalAffixStyle = this.state.affixStyle;
    var isWindow = target() === window;
    if (e.type === 'scroll' && originalAffixStyle && affixStyle && isWindow) {
      return;
    }
    if ((0, _shallowequal2["default"])(affixStyle, originalAffixStyle)) {
      return;
    }
    this.setState({ affixStyle: affixStyle }, function () {
      var affixed = !!_this2.state.affixStyle;
      if (affixStyle && !originalAffixStyle || !affixStyle && originalAffixStyle) {
        onChange(affixed);
      }
    });
  };

  Affix.prototype.setPlaceholderStyle = function setPlaceholderStyle(e, placeholderStyle) {
    var originalPlaceholderStyle = this.state.placeholderStyle;
    if (e.type === 'resize') {
      return;
    }
    if ((0, _shallowequal2["default"])(placeholderStyle, originalPlaceholderStyle)) {
      return;
    }
    this.setState({ placeholderStyle: placeholderStyle });
  };

  Affix.prototype.componentDidMount = function componentDidMount() {
    (0, _warning2["default"])(!('offset' in this.props), '`offset` prop of Affix is deprecated, use `offsetTop` instead.');

    var target = this.props.target;
    this.setTargetEventListeners(target);
  };

  Affix.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (this.props.target !== nextProps.target) {
      this.clearScrollEventListeners();
      this.setTargetEventListeners(nextProps.target);

      // Mock Event object.
      this.updatePosition({});
    }
  };

  Affix.prototype.componentWillUnmount = function componentWillUnmount() {
    this.clearScrollEventListeners();
  };

  Affix.prototype.setTargetEventListeners = function setTargetEventListeners(getTarget) {
    var target = getTarget();
    this.scrollEvent = (0, _addEventListener2["default"])(target, 'scroll', this.updatePosition);
    this.resizeEvent = (0, _addEventListener2["default"])(target, 'resize', this.updatePosition);
  };

  Affix.prototype.clearScrollEventListeners = function clearScrollEventListeners() {
    var _this3 = this;

    ['scrollEvent', 'resizeEvent'].forEach(function (name) {
      if (_this3[name]) {
        _this3[name].remove();
      }
    });
  };

  Affix.prototype.render = function render() {
    var className = (0, _classnames2["default"])({
      'ant-affix': this.state.affixStyle
    });

    var props = _extends({}, this.props);
    delete props.offsetTop;
    delete props.offsetBottom;
    delete props.target;

    return _react2["default"].createElement(
      'div',
      _extends({}, props, { style: this.state.placeholderStyle }),
      _react2["default"].createElement(
        'div',
        { className: className, ref: 'fixedNode', style: this.state.affixStyle },
        this.props.children
      )
    );
  };

  return Affix;
}(_react2["default"].Component), _class.propTypes = {
  offsetTop: _react2["default"].PropTypes.number,
  offsetBottom: _react2["default"].PropTypes.number,
  target: _react2["default"].PropTypes.func
}, _class.defaultProps = {
  target: function target() {
    return window;
  },
  onChange: function onChange() {}
}, _temp);
exports["default"] = Affix;
module.exports = exports['default'];