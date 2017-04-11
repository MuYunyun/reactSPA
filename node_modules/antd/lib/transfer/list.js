'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp;

exports.isRenderResultPlainObject = isRenderResultPlainObject;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _reactAddonsPureRenderMixin = require('react-addons-pure-render-mixin');

var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

function isRenderResultPlainObject(result) {
  return result && !_react2["default"].isValidElement(result) && Object.prototype.toString.call(result) === '[object Object]';
}

var TransferList = (_temp = _class = function (_React$Component) {
  _inherits(TransferList, _React$Component);

  function TransferList(props) {
    _classCallCheck(this, TransferList);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.handleSelect = function (selectedItem) {
      var checkedKeys = _this.props.checkedKeys;

      var result = checkedKeys.some(function (key) {
        return key === selectedItem.key;
      });
      _this.props.handleSelect(selectedItem, !result);
    };

    _this.handleFilter = function (e) {
      _this.props.handleFilter(e);
    };

    _this.handleClear = function () {
      _this.props.handleClear();
    };

    _this.state = {
      mounted: false
    };
    return _this;
  }

  TransferList.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.timer = setTimeout(function () {
      _this2.setState({
        mounted: true
      });
    }, 0);
  };

  TransferList.prototype.componentWillUnmount = function componentWillUnmount() {
    clearTimeout(this.timer);
  };

  TransferList.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _reactAddonsPureRenderMixin2["default"].shouldComponentUpdate.apply(this, args);
  };

  TransferList.prototype.getCheckStatus = function getCheckStatus(filteredDataSource) {
    var checkedKeys = this.props.checkedKeys;

    if (checkedKeys.length === 0) {
      return 'none';
    } else if (filteredDataSource.every(function (item) {
      return checkedKeys.indexOf(item.key) >= 0;
    })) {
      return 'all';
    }
    return 'part';
  };

  TransferList.prototype.renderCheckbox = function renderCheckbox(_ref) {
    var _classNames,
        _this3 = this;

    var prefixCls = _ref.prefixCls,
        filteredDataSource = _ref.filteredDataSource,
        checked = _ref.checked,
        checkPart = _ref.checkPart,
        disabled = _ref.disabled,
        checkable = _ref.checkable;

    var checkAll = !checkPart && checked;

    var checkboxCls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-checkbox', true), _defineProperty(_classNames, prefixCls + '-checkbox-indeterminate', checkPart), _defineProperty(_classNames, prefixCls + '-checkbox-checked', checkAll), _defineProperty(_classNames, prefixCls + '-checkbox-disabled', disabled), _classNames));

    return _react2["default"].createElement(
      'span',
      {
        ref: 'checkbox',
        className: checkboxCls,
        onClick: function onClick() {
          return _this3.props.handleSelectAll(filteredDataSource, checkAll);
        }
      },
      typeof checkable !== 'boolean' ? checkable : null
    );
  };

  TransferList.prototype.matchFilter = function matchFilter(filterText, item, text) {
    var filterOption = this.props.filterOption;
    if (filterOption) {
      return filterOption(filterText, item);
    }
    return text.indexOf(filterText) >= 0;
  };

  TransferList.prototype.render = function render() {
    var _classNames2,
        _this4 = this;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        dataSource = _props.dataSource,
        titleText = _props.titleText,
        filter = _props.filter,
        checkedKeys = _props.checkedKeys,
        body = _props.body,
        footer = _props.footer,
        showSearch = _props.showSearch,
        render = _props.render,
        style = _props.style;
    var _props2 = this.props,
        searchPlaceholder = _props2.searchPlaceholder,
        notFoundContent = _props2.notFoundContent;

    // Custom Layout

    var footerDom = footer(_extends({}, this.props));
    var bodyDom = body(_extends({}, this.props));

    var listCls = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls, true), _defineProperty(_classNames2, prefixCls + '-with-footer', !!footerDom), _classNames2));

    var filteredDataSource = [];

    var showItems = dataSource.map(function (item) {
      var renderResult = render(item);
      var renderedText = void 0;
      var renderedEl = void 0;

      if (isRenderResultPlainObject(renderResult)) {
        renderedText = renderResult.value;
        renderedEl = renderResult.label;
      } else {
        renderedText = renderResult;
        renderedEl = renderResult;
      }

      if (filter && filter.trim() && !_this4.matchFilter(filter, item, renderedText)) {
        return null;
      }

      filteredDataSource.push(item);

      return _react2["default"].createElement(
        'li',
        { onClick: function onClick() {
            return _this4.handleSelect(item);
          }, key: item.key, title: renderedText },
        _react2["default"].createElement(_checkbox2["default"], { checked: checkedKeys.some(function (key) {
            return key === item.key;
          }) }),
        _react2["default"].createElement(
          'span',
          null,
          renderedEl
        )
      );
    }).filter(function (item) {
      return !!item;
    });

    var unit = '条';
    if (this.context.antLocale && this.context.antLocale.Transfer) {
      unit = dataSource.length > 1 ? this.context.antLocale.Transfer.itemsUnit : this.context.antLocale.Transfer.itemUnit;
      searchPlaceholder = searchPlaceholder || this.context.antLocale.Transfer.searchPlaceholder;
      notFoundContent = notFoundContent || this.context.antLocale.Transfer.notFoundContent;
    }

    var checkStatus = this.getCheckStatus(filteredDataSource);

    return _react2["default"].createElement(
      'div',
      { className: listCls, style: style },
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-header' },
        this.renderCheckbox({
          prefixCls: 'ant-transfer',
          checked: checkStatus === 'all',
          checkPart: checkStatus === 'part',
          checkable: _react2["default"].createElement('span', { className: 'ant-transfer-checkbox-inner' }),
          filteredDataSource: filteredDataSource
        }),
        _react2["default"].createElement(
          'span',
          { className: prefixCls + '-header-selected' },
          _react2["default"].createElement(
            'span',
            null,
            (checkedKeys.length > 0 ? checkedKeys.length + '/' : '') + dataSource.length,
            ' ',
            unit
          ),
          _react2["default"].createElement(
            'span',
            { className: prefixCls + '-header-title' },
            titleText
          )
        )
      ),
      bodyDom || _react2["default"].createElement(
        'div',
        { className: showSearch ? prefixCls + '-body ' + prefixCls + '-body-with-search' : prefixCls + '-body' },
        showSearch ? _react2["default"].createElement(
          'div',
          { className: prefixCls + '-body-search-wrapper' },
          _react2["default"].createElement(_search2["default"], { prefixCls: prefixCls + '-search',
            onChange: this.handleFilter,
            handleClear: this.handleClear,
            placeholder: searchPlaceholder || '请输入搜索内容',
            value: filter
          })
        ) : null,
        _react2["default"].createElement(
          _rcAnimate2["default"],
          { component: 'ul',
            transitionName: this.state.mounted ? prefixCls + '-highlight' : '',
            transitionLeave: false
          },
          showItems.length > 0 ? showItems : _react2["default"].createElement(
            'div',
            { className: prefixCls + '-body-not-found' },
            notFoundContent || '列表为空'
          )
        )
      ),
      footerDom ? _react2["default"].createElement(
        'div',
        { className: prefixCls + '-footer' },
        footerDom
      ) : null
    );
  };

  return TransferList;
}(_react2["default"].Component), _class.defaultProps = {
  dataSource: [],
  titleText: '',
  showSearch: false,
  handleClear: noop,
  handleFilter: noop,
  handleSelect: noop,
  handleSelectAll: noop,
  render: noop,
  // advanced
  body: noop,
  footer: noop
}, _class.propTypes = {
  prefixCls: _react.PropTypes.string,
  dataSource: _react.PropTypes.array,
  showSearch: _react.PropTypes.bool,
  filterOption: _react.PropTypes.func,
  searchPlaceholder: _react.PropTypes.string,
  titleText: _react.PropTypes.string,
  style: _react.PropTypes.object,
  handleClear: _react.PropTypes.func,
  handleFilter: _react.PropTypes.func,
  handleSelect: _react.PropTypes.func,
  handleSelectAll: _react.PropTypes.func,
  render: _react.PropTypes.func,
  body: _react.PropTypes.func,
  footer: _react.PropTypes.func
}, _class.contextTypes = {
  antLocale: _react2["default"].PropTypes.object
}, _temp);
exports["default"] = TransferList;