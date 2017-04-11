'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _radio = require('./radio');

var _radio2 = _interopRequireDefault(_radio);

var _radioButton = require('./radioButton');

var _radioButton2 = _interopRequireDefault(_radioButton);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function getCheckedValue(children) {
  var value = null;
  var matched = false;
  _react2["default"].Children.forEach(children, function (radio) {
    if (radio && radio.props && radio.props.checked) {
      value = radio.props.value;
      matched = true;
    }
  });
  return matched ? { value: value } : undefined;
}

var RadioGroup = (_temp = _class = function (_React$Component) {
  _inherits(RadioGroup, _React$Component);

  function RadioGroup(props) {
    _classCallCheck(this, RadioGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.onRadioChange = function (ev) {
      if (!('value' in _this.props)) {
        _this.setState({
          value: ev.target.value
        });
      }
      _this.props.onChange(ev);
    };

    var value = void 0;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    } else {
      var checkedValue = getCheckedValue(props.children);
      value = checkedValue && checkedValue.value;
    }
    _this.state = {
      value: value
    };
    return _this;
  }

  RadioGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value
      });
    } else {
      var checkedValue = getCheckedValue(nextProps.children);
      if (checkedValue) {
        this.setState({
          value: checkedValue.value
        });
      }
    }
  };

  RadioGroup.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
  };

  RadioGroup.prototype.render = function render() {
    var _this2 = this,
        _classNames;

    var props = this.props;
    var children = _react2["default"].Children.map(props.children, function (radio) {
      if (radio && (radio.type === _radio2["default"] || radio.type === _radioButton2["default"]) && radio.props) {
        var keyProps = {};
        if (!('key' in radio) && typeof radio.props.value === 'string') {
          keyProps.key = radio.props.value;
        }
        return _react2["default"].cloneElement(radio, _extends({}, keyProps, radio.props, {
          onChange: _this2.onRadioChange,
          checked: _this2.state.value === radio.props.value,
          disabled: radio.props.disabled || _this2.props.disabled
        }));
      }
      return radio;
    });
    var classString = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, props.prefixCls, true), _defineProperty(_classNames, props.prefixCls + '-' + props.size, props.size), _classNames));
    return _react2["default"].createElement(
      'div',
      { className: classString, style: props.style },
      children
    );
  };

  return RadioGroup;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-radio-group',
  disabled: false,
  onChange: function onChange() {}
}, _temp);
exports["default"] = RadioGroup;
module.exports = exports['default'];