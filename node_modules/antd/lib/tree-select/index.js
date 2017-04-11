'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTreeSelect = require('rc-tree-select');

var _rcTreeSelect2 = _interopRequireDefault(_rcTreeSelect);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var TreeSelect = (_temp = _class = function (_React$Component) {
  _inherits(TreeSelect, _React$Component);

  function TreeSelect() {
    _classCallCheck(this, TreeSelect);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  TreeSelect.prototype.render = function render() {
    var _classNames;

    var props = this.props;
    var _props = this.props,
        size = _props.size,
        className = _props.className,
        combobox = _props.combobox,
        notFoundContent = _props.notFoundContent,
        prefixCls = _props.prefixCls;


    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-lg', size === 'large'), _defineProperty(_classNames, prefixCls + '-sm', size === 'small'), _defineProperty(_classNames, className, !!className), _classNames));

    var antLocale = this.context.antLocale;

    if (antLocale && antLocale.Select) {
      notFoundContent = notFoundContent || antLocale.Select.notFoundContent;
    }

    if (combobox) {
      notFoundContent = null;
    }

    var checkable = props.treeCheckable;
    if (checkable) {
      checkable = _react2["default"].createElement('span', { className: prefixCls + '-tree-checkbox-inner' });
    }

    return _react2["default"].createElement(_rcTreeSelect2["default"], _extends({}, this.props, {
      treeCheckable: checkable,
      className: cls,
      notFoundContent: notFoundContent
    }));
  };

  return TreeSelect;
}(_react2["default"].Component), _class.TreeNode = _rcTreeSelect.TreeNode, _class.SHOW_ALL = _rcTreeSelect.SHOW_ALL, _class.SHOW_PARENT = _rcTreeSelect.SHOW_PARENT, _class.SHOW_CHILD = _rcTreeSelect.SHOW_CHILD, _class.defaultProps = {
  prefixCls: 'ant-select',
  transitionName: 'slide-up',
  choiceTransitionName: 'zoom',
  showSearch: false,
  dropdownClassName: 'ant-select-tree-dropdown'
}, _class.contextTypes = {
  antLocale: _react2["default"].PropTypes.object
}, _temp);
exports["default"] = TreeSelect;
module.exports = exports['default'];