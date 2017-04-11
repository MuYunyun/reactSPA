'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcSlider = require('rc-slider');

var _rcSlider2 = _interopRequireDefault(_rcSlider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Slider = (_temp = _class = function (_React$Component) {
  _inherits(Slider, _React$Component);

  function Slider() {
    _classCallCheck(this, Slider);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Slider.prototype.render = function render() {
    var _props = this.props,
        isIncluded = _props.isIncluded,
        marks = _props.marks,
        index = _props.index,
        defaultIndex = _props.defaultIndex,
        rest = _objectWithoutProperties(_props, ['isIncluded', 'marks', 'index', 'defaultIndex']);

    if (isIncluded !== undefined) {
      // 兼容 `isIncluded`
      rest.included = isIncluded;
    }

    if (Array.isArray(marks)) {
      // 兼容当 marks 为数组的情况
      rest.min = 0;
      rest.max = marks.length - 1;
      rest.step = 1;

      if (index !== undefined) {
        rest.value = index;
      }
      if (defaultIndex !== undefined) {
        rest.defaultValue = defaultIndex;
      }

      rest.marks = {};
      marks.forEach(function (val, idx) {
        rest.marks[idx] = val;
      });
    } else {
      rest.marks = marks;
    }

    return _react2["default"].createElement(_rcSlider2["default"], rest);
  };

  return Slider;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-slider',
  tipTransitionName: 'zoom-down'
}, _temp);
exports["default"] = Slider;
module.exports = exports['default'];