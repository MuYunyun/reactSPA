'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcCascader = require('rc-cascader');

var _rcCascader2 = _interopRequireDefault(_rcCascader);

var _input = require('../input');

var _input2 = _interopRequireDefault(_input);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _arrayTreeFilter = require('array-tree-filter');

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _object = require('object.omit');

var _object2 = _interopRequireDefault(_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Cascader = (_temp = _class = function (_React$Component) {
  _inherits(Cascader, _React$Component);

  function Cascader(props) {
    _classCallCheck(this, Cascader);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var value = void 0;
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    }
    _this.state = {
      value: value || [],
      popupVisible: false
    };
    return _this;
  }

  Cascader.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({ value: nextProps.value || [] });
    }
  };

  Cascader.prototype.getLabel = function getLabel() {
    var _this2 = this;

    var _props = this.props,
        options = _props.options,
        displayRender = _props.displayRender;

    var selectedOptions = (0, _arrayTreeFilter2["default"])(options, function (o, level) {
      return o.value === _this2.state.value[level];
    });
    var label = selectedOptions.map(function (o) {
      return o.label;
    });
    return displayRender(label, selectedOptions);
  };

  Cascader.prototype.render = function render() {
    var _classNames, _classNames2;

    var props = this.props;

    var prefixCls = props.prefixCls,
        children = props.children,
        placeholder = props.placeholder,
        size = props.size,
        disabled = props.disabled,
        className = props.className,
        style = props.style,
        allowClear = props.allowClear,
        otherProps = _objectWithoutProperties(props, ['prefixCls', 'children', 'placeholder', 'size', 'disabled', 'className', 'style', 'allowClear']);

    var sizeCls = (0, _classnames2["default"])({
      'ant-input-lg': size === 'large',
      'ant-input-sm': size === 'small'
    });
    var clearIcon = allowClear && !disabled && this.state.value.length > 0 ? _react2["default"].createElement(_icon2["default"], { type: 'cross-circle',
      className: prefixCls + '-picker-clear',
      onClick: this.clearSelection
    }) : null;
    var arrowCls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-picker-arrow', true), _defineProperty(_classNames, prefixCls + '-picker-arrow-expand', this.state.popupVisible), _classNames));
    var pickerCls = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, className, !!className), _defineProperty(_classNames2, prefixCls + '-picker', true), _defineProperty(_classNames2, prefixCls + '-picker-disabled', disabled), _classNames2));

    // Fix bug of https://github.com/facebook/react/pull/5004
    // and https://fb.me/react-unknown-prop
    var inputProps = (0, _object2["default"])(otherProps, ['onChange', 'options', 'popupPlacement', 'transitionName', 'displayRender', 'onPopupVisibleChange', 'changeOnSelect', 'expandTrigger', 'popupVisible', 'getPopupContainer', 'loadData', 'popupClassName']);

    return _react2["default"].createElement(
      _rcCascader2["default"],
      _extends({}, props, {
        value: this.state.value,
        popupVisible: this.state.popupVisible,
        onPopupVisibleChange: this.handlePopupVisibleChange,
        onChange: this.handleChange
      }),
      children || _react2["default"].createElement(
        'span',
        {
          style: style,
          className: pickerCls
        },
        _react2["default"].createElement(_input2["default"], _extends({}, inputProps, {
          placeholder: this.state.value && this.state.value.length > 0 ? null : placeholder,
          className: prefixCls + '-input ' + sizeCls,
          value: null,
          disabled: disabled,
          readOnly: true
        })),
        _react2["default"].createElement(
          'span',
          { className: prefixCls + '-picker-label' },
          this.getLabel()
        ),
        clearIcon,
        _react2["default"].createElement(_icon2["default"], { type: 'down', className: arrowCls })
      )
    );
  };

  return Cascader;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-cascader',
  placeholder: 'Please select',
  transitionName: 'slide-up',
  popupPlacement: 'bottomLeft',
  onChange: function onChange() {},

  options: [],
  displayRender: function displayRender(label) {
    return label.join(' / ');
  },
  disabled: false,
  allowClear: true,
  onPopupVisibleChange: function onPopupVisibleChange() {}
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.handleChange = function (value, selectedOptions) {
    _this3.setValue(value, selectedOptions);
  };

  this.handlePopupVisibleChange = function (popupVisible) {
    _this3.setState({ popupVisible: popupVisible });
    _this3.props.onPopupVisibleChange(popupVisible);
  };

  this.setValue = function (value) {
    var selectedOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

    if (!('value' in _this3.props)) {
      _this3.setState({ value: value });
    }
    _this3.props.onChange(value, selectedOptions);
  };

  this.clearSelection = function (e) {
    e.preventDefault();
    e.stopPropagation();
    _this3.setValue([]);
    _this3.setState({ popupVisible: false });
  };
}, _temp);
exports["default"] = Cascader;
module.exports = exports['default'];