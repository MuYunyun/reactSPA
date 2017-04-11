'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _list = require('./list');

var _list2 = _interopRequireDefault(_list);

var _operation = require('./operation');

var _operation2 = _interopRequireDefault(_operation);

var _search = require('./search');

var _search2 = _interopRequireDefault(_search);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var Transfer = (_temp = _class = function (_React$Component) {
  _inherits(Transfer, _React$Component);

  function Transfer(props) {
    _classCallCheck(this, Transfer);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.moveTo = function (direction) {
      var targetKeys = _this.props.targetKeys;
      var _this$state = _this.state,
          leftCheckedKeys = _this$state.leftCheckedKeys,
          rightCheckedKeys = _this$state.rightCheckedKeys;

      var moveKeys = direction === 'right' ? leftCheckedKeys : rightCheckedKeys;
      // move items to target box
      var newTargetKeys = direction === 'right' ? moveKeys.concat(targetKeys) : targetKeys.filter(function (targetKey) {
        return !moveKeys.some(function (checkedKey) {
          return targetKey === checkedKey;
        });
      });

      // empty checked keys
      _this.setState(_defineProperty({}, direction === 'right' ? 'leftCheckedKeys' : 'rightCheckedKeys', []));

      _this.props.onChange(newTargetKeys, direction, moveKeys);
    };

    _this.moveToLeft = function () {
      return _this.moveTo('left');
    };

    _this.moveToRight = function () {
      return _this.moveTo('right');
    };

    _this.handleSelectAll = function (direction, filteredDataSource, checkAll) {
      var holder = checkAll ? [] : filteredDataSource.map(function (item) {
        return item.key;
      });

      _this.setState(_defineProperty({}, direction + 'CheckedKeys', holder));
    };

    _this.handleLeftSelectAll = function () {
      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _this.handleSelectAll.apply(_this, ['left'].concat(args));
    };

    _this.handleRightSelectAll = function () {
      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleSelectAll.apply(_this, ['right'].concat(args));
    };

    _this.handleFilter = function (direction, e) {
      _this.setState(_defineProperty({}, direction + 'Filter', e.target.value));
    };

    _this.handleLeftFilter = function (e) {
      return _this.handleFilter('left', e);
    };

    _this.handleRightFilter = function (e) {
      return _this.handleFilter('right', e);
    };

    _this.handleClear = function (direction) {
      _this.setState(_defineProperty({}, direction + 'Filter', ''));
    };

    _this.handleLeftClear = function () {
      return _this.handleClear('left');
    };

    _this.handleRightClear = function () {
      return _this.handleClear('right');
    };

    _this.handleSelect = function (direction, selectedItem, checked) {
      var _this$state2 = _this.state,
          leftCheckedKeys = _this$state2.leftCheckedKeys,
          rightCheckedKeys = _this$state2.rightCheckedKeys;

      var holder = direction === 'left' ? [].concat(_toConsumableArray(leftCheckedKeys)) : [].concat(_toConsumableArray(rightCheckedKeys));
      var index = void 0;
      holder.forEach(function (key, i) {
        if (key === selectedItem.key) {
          index = i;
        }
      });
      if (index > -1) {
        holder.splice(index, 1);
      }
      if (checked) {
        holder.push(selectedItem.key);
      }
      _this.setState(_defineProperty({}, direction + 'CheckedKeys', holder));
    };

    _this.handleLeftSelect = function (selectedItem, checked) {
      return _this.handleSelect('left', selectedItem, checked);
    };

    _this.handleRightSelect = function (selectedItem, checked) {
      return _this.handleSelect('right', selectedItem, checked);
    };

    _this.state = {
      leftFilter: '',
      rightFilter: '',
      leftCheckedKeys: [],
      rightCheckedKeys: []
    };
    return _this;
  }

  Transfer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this2 = this;

    var _state = this.state,
        leftCheckedKeys = _state.leftCheckedKeys,
        rightCheckedKeys = _state.rightCheckedKeys;

    if (nextProps.targetKeys !== this.props.targetKeys || nextProps.dataSource !== this.props.dataSource) {
      (function () {
        // clear cached splited dataSource
        _this2.splitedDataSource = null;

        var dataSource = nextProps.dataSource,
            targetKeys = nextProps.targetKeys;
        // clear key nolonger existed
        // clear checkedKeys according to targetKeys

        _this2.setState({
          leftCheckedKeys: leftCheckedKeys.filter(function (data) {
            return dataSource.filter(function (item) {
              return item.key === data;
            }).length;
          }).filter(function (data) {
            return targetKeys.filter(function (key) {
              return key === data;
            }).length === 0;
          }),
          rightCheckedKeys: rightCheckedKeys.filter(function (data) {
            return dataSource.filter(function (item) {
              return item.key === data;
            }).length;
          }).filter(function (data) {
            return targetKeys.filter(function (key) {
              return key === data;
            }).length > 0;
          })
        });
      })();
    }
  };

  Transfer.prototype.splitDataSource = function splitDataSource(props) {
    if (this.splitedDataSource) {
      return this.splitedDataSource;
    }
    var targetKeys = props.targetKeys;
    var dataSource = props.dataSource;


    if (props.rowKey) {
      dataSource = dataSource.map(function (record) {
        record.key = props.rowKey(record);
        return record;
      });
    }
    var leftDataSource = [].concat(_toConsumableArray(dataSource));
    var rightDataSource = [];

    if (targetKeys.length > 0) {
      targetKeys.forEach(function (targetKey) {
        rightDataSource.push(leftDataSource.filter(function (data, index) {
          if (data.key === targetKey) {
            leftDataSource.splice(index, 1);
            return true;
          }
          return false;
        })[0]);
      });
    }

    this.splitedDataSource = {
      leftDataSource: leftDataSource,
      rightDataSource: rightDataSource
    };

    return this.splitedDataSource;
  };

  Transfer.prototype.render = function render() {
    var _classNames;

    var _props = this.props,
        prefixCls = _props.prefixCls,
        titles = _props.titles,
        operations = _props.operations,
        showSearch = _props.showSearch,
        notFoundContent = _props.notFoundContent,
        searchPlaceholder = _props.searchPlaceholder,
        body = _props.body,
        footer = _props.footer,
        listStyle = _props.listStyle,
        className = _props.className,
        filterOption = _props.filterOption,
        render = _props.render;
    var _state2 = this.state,
        leftFilter = _state2.leftFilter,
        rightFilter = _state2.rightFilter,
        leftCheckedKeys = _state2.leftCheckedKeys,
        rightCheckedKeys = _state2.rightCheckedKeys;

    var _splitDataSource = this.splitDataSource(this.props),
        leftDataSource = _splitDataSource.leftDataSource,
        rightDataSource = _splitDataSource.rightDataSource;

    var leftActive = rightCheckedKeys.length > 0;
    var rightActive = leftCheckedKeys.length > 0;

    var cls = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, className, !!className), _defineProperty(_classNames, prefixCls, true), _classNames));

    return _react2["default"].createElement(
      'div',
      { className: cls },
      _react2["default"].createElement(_list2["default"], { titleText: titles[0],
        dataSource: leftDataSource,
        filter: leftFilter,
        filterOption: filterOption,
        style: listStyle,
        checkedKeys: leftCheckedKeys,
        handleFilter: this.handleLeftFilter,
        handleClear: this.handleLeftClear,
        handleSelect: this.handleLeftSelect,
        handleSelectAll: this.handleLeftSelectAll,
        render: render,
        showSearch: showSearch,
        searchPlaceholder: searchPlaceholder,
        notFoundContent: notFoundContent,
        body: body,
        footer: footer,
        prefixCls: prefixCls + '-list'
      }),
      _react2["default"].createElement(_operation2["default"], { rightActive: rightActive,
        rightArrowText: operations[0],
        moveToRight: this.moveToRight,
        leftActive: leftActive,
        leftArrowText: operations[1],
        moveToLeft: this.moveToLeft,
        className: prefixCls + '-operation'
      }),
      _react2["default"].createElement(_list2["default"], { titleText: titles[1],
        dataSource: rightDataSource,
        filter: rightFilter,
        filterOption: filterOption,
        style: listStyle,
        checkedKeys: rightCheckedKeys,
        handleFilter: this.handleRightFilter,
        handleClear: this.handleRightClear,
        handleSelect: this.handleRightSelect,
        handleSelectAll: this.handleRightSelectAll,
        render: render,
        showSearch: showSearch,
        searchPlaceholder: searchPlaceholder,
        notFoundContent: notFoundContent,
        body: body,
        footer: footer,
        prefixCls: prefixCls + '-list'
      })
    );
  };

  return Transfer;
}(_react2["default"].Component), _class.List = _list2["default"], _class.Operation = _operation2["default"], _class.Search = _search2["default"], _class.defaultProps = {
  prefixCls: 'ant-transfer',
  dataSource: [],
  render: noop,
  targetKeys: [],
  onChange: noop,
  titles: ['源列表', '目的列表'],
  operations: [],
  showSearch: false,
  body: noop,
  footer: noop
}, _class.propTypes = {
  prefixCls: _react.PropTypes.string,
  dataSource: _react.PropTypes.array,
  render: _react.PropTypes.func,
  targetKeys: _react.PropTypes.array,
  onChange: _react.PropTypes.func,
  height: _react.PropTypes.number,
  listStyle: _react.PropTypes.object,
  className: _react.PropTypes.string,
  titles: _react.PropTypes.array,
  operations: _react.PropTypes.array,
  showSearch: _react.PropTypes.bool,
  filterOption: _react.PropTypes.func,
  searchPlaceholder: _react.PropTypes.string,
  notFoundContent: _react.PropTypes.node,
  body: _react.PropTypes.func,
  footer: _react.PropTypes.func,
  rowKey: _react.PropTypes.func
}, _temp);
exports["default"] = Transfer;
module.exports = exports['default'];