'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _arrayTreeFilter = require('array-tree-filter');

var _arrayTreeFilter2 = _interopRequireDefault(_arrayTreeFilter);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Menus = function (_React$Component) {
  _inherits(Menus, _React$Component);

  function Menus() {
    _classCallCheck(this, Menus);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Menus.prototype.componentDidMount = function componentDidMount() {
    this.scrollActiveItemToView();
  };

  Menus.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!prevProps.visible && this.props.visible) {
      this.scrollActiveItemToView();
    }
  };

  Menus.prototype.onSelect = function onSelect(targetOption, menuIndex) {
    if (!targetOption || targetOption.disabled) {
      return;
    }
    var activeValue = this.props.activeValue;
    activeValue = activeValue.slice(0, menuIndex + 1);
    activeValue[menuIndex] = targetOption.value;
    var activeOptions = this.getActiveOptions(activeValue);
    if (targetOption.isLeaf === false && !targetOption.children && this.props.loadData) {
      if (this.props.changeOnSelect) {
        this.props.onChange(activeOptions, { visible: true });
      }
      this.props.onSelect({ activeValue: activeValue });
      this.props.loadData(activeOptions);
      return;
    }
    var onSelectArgument = {};
    if (!targetOption.children || !targetOption.children.length) {
      this.props.onChange(activeOptions, { visible: false });
      // set value to activeValue when select leaf option
      onSelectArgument.value = activeValue;
    } else if (this.props.changeOnSelect) {
      this.props.onChange(activeOptions, { visible: true });
      // set value to activeValue on every select
      onSelectArgument.value = activeValue;
    }
    onSelectArgument.activeValue = activeValue;
    this.props.onSelect(onSelectArgument);
  };

  Menus.prototype.getOption = function getOption(option, menuIndex) {
    var _props = this.props,
        prefixCls = _props.prefixCls,
        expandTrigger = _props.expandTrigger;

    var onSelect = this.onSelect.bind(this, option, menuIndex);
    var expandProps = {
      onClick: onSelect
    };
    var menuItemCls = prefixCls + '-menu-item';
    var hasChildren = option.children && option.children.length > 0;
    if (hasChildren || option.isLeaf === false) {
      menuItemCls += ' ' + prefixCls + '-menu-item-expand';
    }
    if (expandTrigger === 'hover' && hasChildren) {
      expandProps = {
        onMouseEnter: this.delayOnSelect.bind(this, onSelect),
        onMouseLeave: this.delayOnSelect.bind(this)
      };
    }
    if (this.isActiveOption(option, menuIndex)) {
      menuItemCls += ' ' + prefixCls + '-menu-item-active';
      expandProps.ref = 'activeItem' + menuIndex;
    }
    if (option.disabled) {
      menuItemCls += ' ' + prefixCls + '-menu-item-disabled';
    }
    if (option.loading) {
      menuItemCls += ' ' + prefixCls + '-menu-item-loading';
    }
    var title = '';
    if (option.title) {
      title = option.title;
    } else if (typeof option.label === 'string') {
      title = option.label;
    }
    return _react2["default"].createElement(
      'li',
      _extends({
        key: option.value,
        className: menuItemCls,
        title: title
      }, expandProps),
      option.label
    );
  };

  Menus.prototype.getActiveOptions = function getActiveOptions(values) {
    var activeValue = values || this.props.activeValue;
    var options = this.props.options;
    return (0, _arrayTreeFilter2["default"])(options, function (o, level) {
      return o.value === activeValue[level];
    });
  };

  Menus.prototype.getShowOptions = function getShowOptions() {
    var options = this.props.options;

    var result = this.getActiveOptions().map(function (activeOption) {
      return activeOption.children;
    }).filter(function (activeOption) {
      return !!activeOption;
    });
    result.unshift(options);
    return result;
  };

  Menus.prototype.delayOnSelect = function delayOnSelect(onSelect) {
    var _this2 = this;

    if (this.delayTimer) {
      clearTimeout(this.delayTimer);
      this.delayTimer = null;
    }
    if (typeof onSelect === 'function') {
      this.delayTimer = setTimeout(function () {
        onSelect();
        _this2.delayTimer = null;
      }, 150);
    }
  };

  Menus.prototype.scrollActiveItemToView = function scrollActiveItemToView() {
    // scroll into view
    var optionsLength = this.getShowOptions().length;
    for (var i = 0; i < optionsLength; i++) {
      var itemComponent = this.refs['activeItem' + i];
      if (itemComponent) {
        var target = (0, _reactDom.findDOMNode)(itemComponent);
        target.parentNode.scrollTop = target.offsetTop;
      }
    }
  };

  Menus.prototype.isActiveOption = function isActiveOption(option, menuIndex) {
    var _props$activeValue = this.props.activeValue,
        activeValue = _props$activeValue === undefined ? [] : _props$activeValue;

    return activeValue[menuIndex] === option.value;
  };

  Menus.prototype.render = function render() {
    var _this3 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        dropdownMenuColumnStyle = _props2.dropdownMenuColumnStyle;

    return _react2["default"].createElement(
      'div',
      null,
      this.getShowOptions().map(function (options, menuIndex) {
        return _react2["default"].createElement(
          'ul',
          { className: prefixCls + '-menu', key: menuIndex, style: dropdownMenuColumnStyle },
          options.map(function (option) {
            return _this3.getOption(option, menuIndex);
          })
        );
      })
    );
  };

  return Menus;
}(_react2["default"].Component);

Menus.defaultProps = {
  options: [],
  value: [],
  activeValue: [],
  onChange: function onChange() {},
  onSelect: function onSelect() {},

  prefixCls: 'rc-cascader-menus',
  visible: false,
  expandTrigger: 'click',
  changeOnSelect: false
};

Menus.propTypes = {
  value: _react2["default"].PropTypes.array,
  activeValue: _react2["default"].PropTypes.array,
  options: _react2["default"].PropTypes.array.isRequired,
  prefixCls: _react2["default"].PropTypes.string,
  expandTrigger: _react2["default"].PropTypes.string,
  onChange: _react2["default"].PropTypes.func,
  onSelect: _react2["default"].PropTypes.func,
  loadData: _react2["default"].PropTypes.func,
  visible: _react2["default"].PropTypes.bool,
  changeOnSelect: _react2["default"].PropTypes.bool,
  dropdownMenuColumnStyle: _react2["default"].PropTypes.object
};

exports["default"] = Menus;
module.exports = exports['default'];