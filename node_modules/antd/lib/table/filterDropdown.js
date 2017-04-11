'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcMenu = require('rc-menu');

var _rcMenu2 = _interopRequireDefault(_rcMenu);

var _dropdown = require('../dropdown');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var FilterDropdownMenuWrapper = function FilterDropdownMenuWrapper(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children,
      className = _ref.className;
  return _react2["default"].createElement(
    'div',
    { className: className, onClick: onClick },
    children
  );
};

var FilterMenu = (_temp = _class = function (_React$Component) {
  _inherits(FilterMenu, _React$Component);

  function FilterMenu(props) {
    _classCallCheck(this, FilterMenu);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var visible = 'filterDropdownVisible' in props.column ? props.column.filterDropdownVisible : false;

    _this.state = {
      selectedKeys: props.selectedKeys,
      keyPathOfSelectedItem: {}, // 记录所有有选中子菜单的祖先菜单
      visible: visible
    };
    return _this;
  }

  FilterMenu.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var column = nextProps.column;

    var newState = {};
    if ('selectedKeys' in nextProps) {
      newState.selectedKeys = nextProps.selectedKeys;
    }
    if ('filterDropdownVisible' in column) {
      newState.visible = column.filterDropdownVisible;
    }
    if (Object.keys(newState).length > 0) {
      this.setState(newState);
    }
  };

  FilterMenu.prototype.setVisible = function setVisible(visible) {
    var column = this.props.column;

    if (!('filterDropdownVisible' in column)) {
      this.setState({ visible: visible });
    }
    if (column.onFilterDropdownVisibleChange) {
      column.onFilterDropdownVisibleChange(visible);
    }
  };

  FilterMenu.prototype.confirmFilter = function confirmFilter() {
    if (this.state.selectedKeys !== this.props.selectedKeys) {
      this.props.confirmFilter(this.props.column, this.state.selectedKeys);
    }
  };

  FilterMenu.prototype.renderMenuItem = function renderMenuItem(item) {
    var column = this.props.column;

    var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
    var input = multiple ? _react2["default"].createElement(_checkbox2["default"], { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 }) : _react2["default"].createElement(_radio2["default"], { checked: this.state.selectedKeys.indexOf(item.value.toString()) >= 0 });
    return _react2["default"].createElement(
      _rcMenu.Item,
      { key: item.value },
      input,
      _react2["default"].createElement(
        'span',
        null,
        item.text
      )
    );
  };

  FilterMenu.prototype.renderMenus = function renderMenus(items) {
    var _this2 = this;

    return items.map(function (item) {
      if (item.children && item.children.length > 0) {
        var _ret = function () {
          var keyPathOfSelectedItem = _this2.state.keyPathOfSelectedItem;

          var containSelected = Object.keys(keyPathOfSelectedItem).some(function (key) {
            return keyPathOfSelectedItem[key].indexOf(item.value) >= 0;
          });
          var subMenuCls = containSelected ? _this2.props.dropdownPrefixCls + '-submenu-contain-selected' : '';
          return {
            v: _react2["default"].createElement(
              _rcMenu.SubMenu,
              { title: item.text, className: subMenuCls, key: item.value.toString() },
              item.children.map(function (child) {
                return _this2.renderMenuItem(child);
              })
            )
          };
        }();

        if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
      }
      return _this2.renderMenuItem(item);
    });
  };

  FilterMenu.prototype.render = function render() {
    var _props = this.props,
        column = _props.column,
        locale = _props.locale,
        prefixCls = _props.prefixCls,
        dropdownPrefixCls = _props.dropdownPrefixCls;
    // default multiple selection in filter dropdown

    var multiple = 'filterMultiple' in column ? column.filterMultiple : true;
    var menus = column.filterDropdown ? _react2["default"].createElement(
      FilterDropdownMenuWrapper,
      null,
      column.filterDropdown
    ) : _react2["default"].createElement(
      FilterDropdownMenuWrapper,
      { className: prefixCls + '-dropdown' },
      _react2["default"].createElement(
        _rcMenu2["default"],
        {
          multiple: multiple,
          onClick: this.handleMenuItemClick,
          prefixCls: dropdownPrefixCls + '-menu',
          onSelect: this.setSelectedKeys,
          onDeselect: this.setSelectedKeys,
          selectedKeys: this.state.selectedKeys
        },
        this.renderMenus(column.filters)
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-dropdown-btns' },
        _react2["default"].createElement(
          'a',
          {
            className: prefixCls + '-dropdown-link confirm',
            onClick: this.handleConfirm
          },
          locale.filterConfirm
        ),
        _react2["default"].createElement(
          'a',
          {
            className: prefixCls + '-dropdown-link clear',
            onClick: this.handleClearFilters
          },
          locale.filterReset
        )
      )
    );

    var dropdownSelectedClass = this.props.selectedKeys.length > 0 ? prefixCls + '-selected' : '';

    return _react2["default"].createElement(
      _dropdown2["default"],
      {
        trigger: ['click'],
        overlay: menus,
        visible: this.state.visible,
        onVisibleChange: this.onVisibleChange
      },
      _react2["default"].createElement(_icon2["default"], { title: locale.filterTitle, type: 'filter', className: dropdownSelectedClass })
    );
  };

  return FilterMenu;
}(_react2["default"].Component), _class.defaultProps = {
  handleFilter: function handleFilter() {},

  column: {}
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.setSelectedKeys = function (_ref2) {
    var selectedKeys = _ref2.selectedKeys;

    _this3.setState({ selectedKeys: selectedKeys });
  };

  this.handleClearFilters = function () {
    _this3.setState({
      selectedKeys: []
    }, _this3.handleConfirm);
  };

  this.handleConfirm = function () {
    _this3.setVisible(false);
    _this3.confirmFilter();
  };

  this.onVisibleChange = function (visible) {
    _this3.setVisible(visible);
    if (!visible) {
      _this3.confirmFilter();
    }
  };

  this.handleMenuItemClick = function (info) {
    if (info.keyPath.length <= 1) {
      return;
    }
    var keyPathOfSelectedItem = _this3.state.keyPathOfSelectedItem;
    if (_this3.state.selectedKeys.indexOf(info.key) >= 0) {
      // deselect SubMenu child
      delete keyPathOfSelectedItem[info.key];
    } else {
      // select SubMenu child
      keyPathOfSelectedItem[info.key] = info.keyPath;
    }
    _this3.setState({ keyPathOfSelectedItem: keyPathOfSelectedItem });
  };
}, _temp);
exports["default"] = FilterMenu;
module.exports = exports['default'];