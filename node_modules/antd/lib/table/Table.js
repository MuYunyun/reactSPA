'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp, _initialiseProps;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcTable = require('rc-table');

var _rcTable2 = _interopRequireDefault(_rcTable);

var _checkbox = require('../checkbox');

var _checkbox2 = _interopRequireDefault(_checkbox);

var _radio = require('../radio');

var _radio2 = _interopRequireDefault(_radio);

var _filterDropdown = require('./filterDropdown');

var _filterDropdown2 = _interopRequireDefault(_filterDropdown);

var _pagination = require('../pagination');

var _pagination2 = _interopRequireDefault(_pagination);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _spin = require('../spin');

var _spin2 = _interopRequireDefault(_spin);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('./util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

function stopPropagation(e) {
  e.stopPropagation();
  if (e.nativeEvent.stopImmediatePropagation) {
    e.nativeEvent.stopImmediatePropagation();
  }
}

var defaultLocale = {
  filterTitle: '筛选',
  filterConfirm: '确定',
  filterReset: '重置',
  emptyText: _react2["default"].createElement(
    'span',
    null,
    _react2["default"].createElement(_icon2["default"], { type: 'frown' }),
    '\u6682\u65E0\u6570\u636E'
  )
};

var defaultPagination = {
  onChange: noop,
  onShowSizeChange: noop
};

var Table = (_temp = _class = function (_React$Component) {
  _inherits(Table, _React$Component);

  function Table(props) {
    _classCallCheck(this, Table);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _initialiseProps.call(_this);

    var pagination = props.pagination || {};

    _this.state = _extends({
      // 减少状态
      selectedRowKeys: (props.rowSelection || {}).selectedRowKeys || [],
      filters: _this.getFiltersFromColumns(),
      selectionDirty: false
    }, _this.getSortStateFromColumns(), {
      pagination: _this.hasPagination() ? _extends({}, defaultPagination, pagination, {
        current: pagination.defaultCurrent || pagination.current || 1,
        pageSize: pagination.defaultPageSize || pagination.pageSize || 10
      }) : {}
    });

    _this.CheckboxPropsCache = {};
    return _this;
  }

  Table.prototype.getCheckboxPropsByItem = function getCheckboxPropsByItem(item) {
    var _props$rowSelection = this.props.rowSelection,
        rowSelection = _props$rowSelection === undefined ? {} : _props$rowSelection;

    if (!rowSelection.getCheckboxProps) {
      return {};
    }
    var key = this.getRecordKey(item);
    // Cache checkboxProps
    if (!this.CheckboxPropsCache[key]) {
      this.CheckboxPropsCache[key] = rowSelection.getCheckboxProps(item);
    }
    return this.CheckboxPropsCache[key];
  };

  Table.prototype.getDefaultSelection = function getDefaultSelection() {
    var _this2 = this;

    var _props$rowSelection2 = this.props.rowSelection,
        rowSelection = _props$rowSelection2 === undefined ? {} : _props$rowSelection2;

    if (!rowSelection.getCheckboxProps) {
      return [];
    }
    return this.getFlatData().filter(function (item) {
      return _this2.getCheckboxPropsByItem(item).defaultChecked;
    }).map(function (record, rowIndex) {
      return _this2.getRecordKey(record, rowIndex);
    });
  };

  Table.prototype.getLocale = function getLocale() {
    var locale = {};
    if (this.context.antLocale && this.context.antLocale.Table) {
      locale = this.context.antLocale.Table;
    }
    return _extends({}, defaultLocale, locale, this.props.locale);
  };

  Table.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var _this3 = this;

    if ('pagination' in nextProps && nextProps.pagination !== false) {
      this.setState(function (previousState) {
        var newPagination = _extends({}, defaultPagination, previousState.pagination, nextProps.pagination);
        newPagination.current = newPagination.current || 1;
        return { pagination: newPagination };
      });
    }
    // dataSource 的变化会清空选中项
    if ('dataSource' in nextProps && nextProps.dataSource !== this.props.dataSource) {
      this.setState({
        selectionDirty: false
      });
      this.CheckboxPropsCache = {};
    }
    if (nextProps.rowSelection && 'selectedRowKeys' in nextProps.rowSelection) {
      this.setState({
        selectedRowKeys: nextProps.rowSelection.selectedRowKeys || []
      });
      var rowSelection = this.props.rowSelection;

      if (rowSelection && nextProps.rowSelection.getCheckboxProps !== rowSelection.getCheckboxProps) {
        this.CheckboxPropsCache = {};
      }
    }

    if (this.getSortOrderColumns(nextProps.columns).length > 0) {
      var sortState = this.getSortStateFromColumns(nextProps.columns);
      if (sortState.sortColumn !== this.state.sortColumn || sortState.sortOrder !== this.state.sortOrder) {
        this.setState(sortState);
      }
    }

    var filteredValueColumns = this.getFilteredValueColumns(nextProps.columns);
    if (filteredValueColumns.length > 0) {
      (function () {
        var filtersFromColumns = _this3.getFiltersFromColumns(nextProps.columns);
        var newFilters = _extends({}, _this3.state.filters);
        Object.keys(filtersFromColumns).forEach(function (key) {
          newFilters[key] = filtersFromColumns[key];
        });
        if (_this3.isFiltersChanged(newFilters)) {
          _this3.setState({ filters: newFilters });
        }
      })();
    }
  };

  Table.prototype.setSelectedRowKeys = function setSelectedRowKeys(selectedRowKeys, _ref) {
    var _this4 = this;

    var selectWay = _ref.selectWay,
        record = _ref.record,
        checked = _ref.checked,
        changeRowKeys = _ref.changeRowKeys;
    var _props$rowSelection3 = this.props.rowSelection,
        rowSelection = _props$rowSelection3 === undefined ? {} : _props$rowSelection3;

    if (rowSelection && !('selectedRowKeys' in rowSelection)) {
      this.setState({ selectedRowKeys: selectedRowKeys });
    }
    var data = this.getFlatData();
    if (!rowSelection.onChange && !rowSelection[selectWay]) {
      return;
    }
    var selectedRows = data.filter(function (row, i) {
      return selectedRowKeys.indexOf(_this4.getRecordKey(row, i)) >= 0;
    });
    if (rowSelection.onChange) {
      rowSelection.onChange(selectedRowKeys, selectedRows);
    }
    if (selectWay === 'onSelect' && rowSelection.onSelect) {
      rowSelection.onSelect(record, checked, selectedRows);
    } else if (selectWay === 'onSelectAll' && rowSelection.onSelectAll) {
      var changeRows = data.filter(function (row, i) {
        return changeRowKeys.indexOf(_this4.getRecordKey(row, i)) >= 0;
      });
      rowSelection.onSelectAll(checked, selectedRows, changeRows);
    }
  };

  Table.prototype.hasPagination = function hasPagination() {
    return this.props.pagination !== false;
  };

  Table.prototype.isFiltersChanged = function isFiltersChanged(filters) {
    var _this5 = this;

    var filtersChanged = false;
    if (Object.keys(filters).length !== Object.keys(this.state.filters).length) {
      filtersChanged = true;
    } else {
      Object.keys(filters).forEach(function (columnKey) {
        if (filters[columnKey] !== _this5.state.filters[columnKey]) {
          filtersChanged = true;
        }
      });
    }
    return filtersChanged;
  };

  Table.prototype.getSortOrderColumns = function getSortOrderColumns(columns) {
    return (columns || this.props.columns || []).filter(function (column) {
      return 'sortOrder' in column;
    });
  };

  Table.prototype.getFilteredValueColumns = function getFilteredValueColumns(columns) {
    return (columns || this.props.columns || []).filter(function (column) {
      return 'filteredValue' in column;
    });
  };

  Table.prototype.getFiltersFromColumns = function getFiltersFromColumns(columns) {
    var _this6 = this;

    var filters = {};
    this.getFilteredValueColumns(columns).forEach(function (col) {
      filters[_this6.getColumnKey(col)] = col.filteredValue;
    });
    return filters;
  };

  Table.prototype.getSortStateFromColumns = function getSortStateFromColumns(columns) {
    // return fisrt column which sortOrder is not falsy
    var sortedColumn = this.getSortOrderColumns(columns).filter(function (col) {
      return col.sortOrder;
    })[0];
    if (sortedColumn) {
      return {
        sortColumn: sortedColumn,
        sortOrder: sortedColumn.sortOrder
      };
    }
    return {
      sortColumn: null,
      sortOrder: null
    };
  };

  Table.prototype.getSorterFn = function getSorterFn() {
    var _state = this.state,
        sortOrder = _state.sortOrder,
        sortColumn = _state.sortColumn;

    if (!sortOrder || !sortColumn || typeof sortColumn.sorter !== 'function') {
      return;
    }
    return function (a, b) {
      var result = sortColumn.sorter(a, b);
      if (result !== 0) {
        return sortOrder === 'descend' ? -result : result;
      }
      return 0;
    };
  };

  Table.prototype.toggleSortOrder = function toggleSortOrder(order, column) {
    var _props;

    var _state2 = this.state,
        sortColumn = _state2.sortColumn,
        sortOrder = _state2.sortOrder;
    // 只同时允许一列进行排序，否则会导致排序顺序的逻辑问题

    var isSortColumn = this.isSortColumn(column);
    if (!isSortColumn) {
      // 当前列未排序
      sortOrder = order;
      sortColumn = column;
    } else {
      // 当前列已排序
      if (sortOrder === order) {
        // 切换为未排序状态
        sortOrder = '';
        sortColumn = null;
      } else {
        // 切换为排序状态
        sortOrder = order;
      }
    }
    var newState = {
      sortOrder: sortOrder,
      sortColumn: sortColumn
    };

    // Controlled
    if (this.getSortOrderColumns().length === 0) {
      this.setState(newState);
    }

    (_props = this.props).onChange.apply(_props, _toConsumableArray(this.prepareParamsArguments(_extends({}, this.state, newState))));
  };

  Table.prototype.getRecordKey = function getRecordKey(record, index) {
    var rowKey = this.props.rowKey;

    if (typeof rowKey === 'function') {
      return rowKey(record, index);
    }
    return record[rowKey] || index;
  };

  Table.prototype.renderRowSelection = function renderRowSelection() {
    var _this7 = this;

    var _props2 = this.props,
        prefixCls = _props2.prefixCls,
        rowSelection = _props2.rowSelection;

    var columns = this.props.columns.concat();
    if (rowSelection) {
      var data = this.getFlatCurrentPageData().filter(function (item) {
        if (rowSelection.getCheckboxProps) {
          return !_this7.getCheckboxPropsByItem(item).disabled;
        }
        return true;
      });
      var checked = void 0;
      if (!data.length) {
        checked = false;
      } else {
        checked = this.state.selectionDirty ? data.every(function (item, i) {
          return _this7.state.selectedRowKeys.indexOf(_this7.getRecordKey(item, i)) >= 0;
        }) : data.every(function (item, i) {
          return _this7.state.selectedRowKeys.indexOf(_this7.getRecordKey(item, i)) >= 0;
        }) || data.every(function (item) {
          return _this7.getCheckboxPropsByItem(item).defaultChecked;
        });
      }
      var selectionColumn = {
        key: 'selection-column',
        render: this.renderSelectionRadio,
        className: prefixCls + '-selection-column'
      };
      if (rowSelection.type !== 'radio') {
        var checkboxAllDisabled = data.every(function (item) {
          return _this7.getCheckboxPropsByItem(item).disabled;
        });
        selectionColumn.render = this.renderSelectionCheckBox;
        selectionColumn.title = _react2["default"].createElement(_checkbox2["default"], { checked: checked,
          disabled: checkboxAllDisabled,
          onChange: this.handleSelectAllRow
        });
      }
      if (columns.some(function (column) {
        return column.fixed === 'left' || column.fixed === true;
      })) {
        selectionColumn.fixed = 'left';
      }
      if (columns[0] && columns[0].key === 'selection-column') {
        columns[0] = selectionColumn;
      } else {
        columns.unshift(selectionColumn);
      }
    }
    return columns;
  };

  Table.prototype.getColumnKey = function getColumnKey(column, index) {
    return column.key || column.dataIndex || index;
  };

  Table.prototype.getMaxCurrent = function getMaxCurrent(total) {
    var _state$pagination = this.state.pagination,
        current = _state$pagination.current,
        pageSize = _state$pagination.pageSize;

    if ((current - 1) * pageSize >= total) {
      return current - 1;
    }
    return current;
  };

  Table.prototype.isSortColumn = function isSortColumn(column) {
    var sortColumn = this.state.sortColumn;

    if (!column || !sortColumn) {
      return false;
    }
    return this.getColumnKey(sortColumn) === this.getColumnKey(column);
  };

  Table.prototype.renderColumnsDropdown = function renderColumnsDropdown(columns) {
    var _this8 = this;

    var _props3 = this.props,
        prefixCls = _props3.prefixCls,
        dropdownPrefixCls = _props3.dropdownPrefixCls;
    var sortOrder = this.state.sortOrder;

    var locale = this.getLocale();
    return columns.map(function (originColumn, i) {
      var column = _extends({}, originColumn);
      var key = _this8.getColumnKey(column, i);
      var filterDropdown = void 0;
      var sortButton = void 0;
      if (column.filters && column.filters.length > 0 || column.filterDropdown) {
        var colFilters = _this8.state.filters[key] || [];
        filterDropdown = _react2["default"].createElement(_filterDropdown2["default"], {
          locale: locale,
          column: column,
          selectedKeys: colFilters,
          confirmFilter: _this8.handleFilter,
          prefixCls: prefixCls + '-filter',
          dropdownPrefixCls: dropdownPrefixCls || 'ant-dropdown'
        });
      }
      if (column.sorter) {
        var isSortColumn = _this8.isSortColumn(column);
        if (isSortColumn) {
          column.className = column.className || '';
          if (sortOrder) {
            column.className += ' ' + prefixCls + '-column-sort';
          }
        }
        var isAscend = isSortColumn && sortOrder === 'ascend';
        var isDescend = isSortColumn && sortOrder === 'descend';
        sortButton = _react2["default"].createElement(
          'div',
          { className: prefixCls + '-column-sorter' },
          _react2["default"].createElement(
            'span',
            { className: prefixCls + '-column-sorter-up ' + (isAscend ? 'on' : 'off'),
              title: '\u2191',
              onClick: function onClick() {
                return _this8.toggleSortOrder('ascend', column);
              }
            },
            _react2["default"].createElement(_icon2["default"], { type: 'caret-up' })
          ),
          _react2["default"].createElement(
            'span',
            { className: prefixCls + '-column-sorter-down ' + (isDescend ? 'on' : 'off'),
              title: '\u2193',
              onClick: function onClick() {
                return _this8.toggleSortOrder('descend', column);
              }
            },
            _react2["default"].createElement(_icon2["default"], { type: 'caret-down' })
          )
        );
      }
      column.title = _react2["default"].createElement(
        'span',
        null,
        column.title,
        sortButton,
        filterDropdown
      );
      return column;
    });
  };

  Table.prototype.renderPagination = function renderPagination() {
    // 强制不需要分页
    if (!this.hasPagination()) {
      return null;
    }
    var size = 'default';
    var pagination = this.state.pagination;

    if (pagination.size) {
      size = pagination.size;
    } else if (this.props.size === 'middle' || this.props.size === 'small') {
      size = 'small';
    }
    var total = pagination.total || this.getLocalData().length;
    return total > 0 ? _react2["default"].createElement(_pagination2["default"], _extends({}, pagination, {
      className: this.props.prefixCls + '-pagination',
      onChange: this.handlePageChange,
      total: total,
      size: size,
      current: this.getMaxCurrent(total),
      onShowSizeChange: this.handleShowSizeChange
    })) : null;
  };

  Table.prototype.prepareParamsArguments = function prepareParamsArguments(state) {
    // 准备筛选、排序、分页的参数
    var pagination = state.pagination;
    var filters = state.filters;
    var sorter = {};
    if (state.sortColumn && state.sortOrder) {
      sorter.column = state.sortColumn;
      sorter.order = state.sortOrder;
      sorter.field = state.sortColumn.dataIndex;
      sorter.columnKey = this.getColumnKey(state.sortColumn);
    }
    return [pagination, filters, sorter];
  };

  Table.prototype.findColumn = function findColumn(myKey) {
    var _this9 = this;

    return this.props.columns.filter(function (c) {
      return _this9.getColumnKey(c) === myKey;
    })[0];
  };

  Table.prototype.getCurrentPageData = function getCurrentPageData() {
    var data = this.getLocalData();
    var current = void 0;
    var pageSize = void 0;
    var state = this.state;
    // 如果没有分页的话，默认全部展示
    if (!this.hasPagination()) {
      pageSize = Number.MAX_VALUE;
      current = 1;
    } else {
      pageSize = state.pagination.pageSize;
      current = this.getMaxCurrent(state.pagination.total || data.length);
    }

    // 分页
    // ---
    // 当数据量少于等于每页数量时，直接设置数据
    // 否则进行读取分页数据
    if (data.length > pageSize || pageSize === Number.MAX_VALUE) {
      data = data.filter(function (item, i) {
        return i >= (current - 1) * pageSize && i < current * pageSize;
      });
    }
    return data;
  };

  Table.prototype.getFlatData = function getFlatData() {
    return (0, _util.flatArray)(this.getLocalData());
  };

  Table.prototype.getFlatCurrentPageData = function getFlatCurrentPageData() {
    return (0, _util.flatArray)(this.getCurrentPageData());
  };

  Table.prototype.recursiveSort = function recursiveSort(data, sorterFn) {
    var _this10 = this;

    var childrenColumnName = this.props.childrenColumnName;

    return data.sort(sorterFn).map(function (item) {
      return item[childrenColumnName] ? _extends({}, item, _defineProperty({}, childrenColumnName, _this10.recursiveSort(item[childrenColumnName], sorterFn))) : item;
    });
  };

  Table.prototype.getLocalData = function getLocalData() {
    var _this11 = this;

    var state = this.state;
    var dataSource = this.props.dataSource;

    var data = dataSource || [];
    // 优化本地排序
    data = data.slice(0);
    var sorterFn = this.getSorterFn();
    if (sorterFn) {
      data = this.recursiveSort(data, sorterFn);
    }
    // 筛选
    if (state.filters) {
      Object.keys(state.filters).forEach(function (columnKey) {
        var col = _this11.findColumn(columnKey);
        if (!col) {
          return;
        }
        var values = state.filters[columnKey] || [];
        if (values.length === 0) {
          return;
        }
        data = col.onFilter ? data.filter(function (record) {
          return values.some(function (v) {
            return col.onFilter(v, record);
          });
        }) : data;
      });
    }
    return data;
  };

  Table.prototype.render = function render() {
    var _classNames,
        _this12 = this;

    var _props4 = this.props,
        style = _props4.style,
        className = _props4.className,
        prefixCls = _props4.prefixCls,
        showHeader = _props4.showHeader,
        restProps = _objectWithoutProperties(_props4, ['style', 'className', 'prefixCls', 'showHeader']);

    var data = this.getCurrentPageData();
    var columns = this.renderRowSelection();
    var expandIconAsCell = this.props.expandedRowRender && this.props.expandIconAsCell !== false;
    var locale = this.getLocale();

    var classString = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-' + this.props.size, true), _defineProperty(_classNames, prefixCls + '-bordered', this.props.bordered), _defineProperty(_classNames, prefixCls + '-empty', !data.length), _defineProperty(_classNames, prefixCls + '-without-column-header', !showHeader), _classNames));

    columns = this.renderColumnsDropdown(columns);
    columns = columns.map(function (column, i) {
      var newColumn = _extends({}, column);
      newColumn.key = _this12.getColumnKey(newColumn, i);
      return newColumn;
    });

    var expandIconColumnIndex = columns[0] && columns[0].key === 'selection-column' ? 1 : 0;
    if ('expandIconColumnIndex' in restProps) {
      expandIconColumnIndex = restProps.expandIconColumnIndex;
    }

    var table = _react2["default"].createElement(_rcTable2["default"], _extends({}, restProps, {
      prefixCls: prefixCls,
      data: data,
      columns: columns,
      showHeader: showHeader,
      className: classString,
      expandIconColumnIndex: expandIconColumnIndex,
      expandIconAsCell: expandIconAsCell,
      emptyText: function emptyText() {
        return locale.emptyText;
      }
    }));
    // if there is no pagination or no data,
    // the height of spin should decrease by half of pagination
    var paginationPatchClass = this.hasPagination() && data && data.length !== 0 ? prefixCls + '-with-pagination' : prefixCls + '-without-pagination';
    var spinClassName = this.props.loading ? paginationPatchClass + ' ' + prefixCls + '-spin-holder' : '';
    return _react2["default"].createElement(
      'div',
      { className: className + ' clearfix', style: style },
      _react2["default"].createElement(
        _spin2["default"],
        { className: spinClassName, spinning: this.props.loading },
        table,
        this.renderPagination()
      )
    );
  };

  return Table;
}(_react2["default"].Component), _class.propTypes = {
  dataSource: _react2["default"].PropTypes.array,
  prefixCls: _react2["default"].PropTypes.string,
  useFixedHeader: _react2["default"].PropTypes.bool,
  rowSelection: _react2["default"].PropTypes.object,
  className: _react2["default"].PropTypes.string,
  size: _react2["default"].PropTypes.string,
  loading: _react2["default"].PropTypes.bool,
  bordered: _react2["default"].PropTypes.bool,
  onChange: _react2["default"].PropTypes.func,
  locale: _react2["default"].PropTypes.object,
  dropdownPrefixCls: _react2["default"].PropTypes.string
}, _class.defaultProps = {
  dataSource: [],
  prefixCls: 'ant-table',
  useFixedHeader: false,
  rowSelection: null,
  className: '',
  size: 'large',
  loading: false,
  bordered: false,
  indentSize: 20,
  onChange: noop,
  locale: {},
  rowKey: 'key',
  childrenColumnName: 'children'
}, _class.contextTypes = {
  antLocale: _react2["default"].PropTypes.object
}, _initialiseProps = function _initialiseProps() {
  var _this13 = this;

  this.handleFilter = function (column, nextFilters) {
    var props = _this13.props;
    var pagination = _extends({}, _this13.state.pagination);
    var filters = _extends({}, _this13.state.filters, _defineProperty({}, _this13.getColumnKey(column), nextFilters));
    // Remove filters not in current columns
    var currentColumnKeys = props.columns.map(function (c) {
      return _this13.getColumnKey(c);
    });
    Object.keys(filters).forEach(function (columnKey) {
      if (currentColumnKeys.indexOf(columnKey) < 0) {
        delete filters[columnKey];
      }
    });

    if (props.pagination) {
      // Reset current prop
      pagination.current = 1;
      pagination.onChange(pagination.current);
    }

    var newState = {
      selectionDirty: false,
      pagination: pagination
    };
    var filtersToSetState = _extends({}, filters);
    // Remove filters which is controlled
    _this13.getFilteredValueColumns().forEach(function (col) {
      var columnKey = _this13.getColumnKey(col);
      if (columnKey) {
        delete filtersToSetState[columnKey];
      }
    });
    if (Object.keys(filtersToSetState).length > 0) {
      newState.filters = filtersToSetState;
    }

    // Controlled current prop will not respond user interaction
    if (props.pagination && 'current' in props.pagination) {
      newState.pagination = _extends({}, pagination, {
        current: _this13.state.pagination.current
      });
    }

    _this13.setState(newState, function () {
      props.onChange.apply(props, _toConsumableArray(_this13.prepareParamsArguments(_extends({}, _this13.state, {
        selectionDirty: false,
        filters: filters,
        pagination: pagination
      }))));
    });
  };

  this.handleSelect = function (record, rowIndex, e) {
    var checked = e.target.checked;
    var defaultSelection = _this13.state.selectionDirty ? [] : _this13.getDefaultSelection();
    var selectedRowKeys = _this13.state.selectedRowKeys.concat(defaultSelection);
    var key = _this13.getRecordKey(record, rowIndex);
    if (checked) {
      selectedRowKeys.push(_this13.getRecordKey(record, rowIndex));
    } else {
      selectedRowKeys = selectedRowKeys.filter(function (i) {
        return key !== i;
      });
    }
    _this13.setState({
      selectionDirty: true
    });
    _this13.setSelectedRowKeys(selectedRowKeys, {
      selectWay: 'onSelect',
      record: record,
      checked: checked
    });
  };

  this.handleRadioSelect = function (record, rowIndex, e) {
    var checked = e.target.checked;
    var defaultSelection = _this13.state.selectionDirty ? [] : _this13.getDefaultSelection();
    var selectedRowKeys = _this13.state.selectedRowKeys.concat(defaultSelection);
    var key = _this13.getRecordKey(record, rowIndex);
    selectedRowKeys = [key];
    _this13.setState({
      selectionDirty: true
    });
    _this13.setSelectedRowKeys(selectedRowKeys, {
      selectWay: 'onSelect',
      record: record,
      checked: checked
    });
  };

  this.handleSelectAllRow = function (e) {
    var checked = e.target.checked;
    var data = _this13.getFlatCurrentPageData();
    var defaultSelection = _this13.state.selectionDirty ? [] : _this13.getDefaultSelection();
    var selectedRowKeys = _this13.state.selectedRowKeys.concat(defaultSelection);
    var changableRowKeys = data.filter(function (item) {
      return !_this13.getCheckboxPropsByItem(item).disabled;
    }).map(function (item, i) {
      return _this13.getRecordKey(item, i);
    });

    // 记录变化的列
    var changeRowKeys = [];
    if (checked) {
      changableRowKeys.forEach(function (key) {
        if (selectedRowKeys.indexOf(key) < 0) {
          selectedRowKeys.push(key);
          changeRowKeys.push(key);
        }
      });
    } else {
      changableRowKeys.forEach(function (key) {
        if (selectedRowKeys.indexOf(key) >= 0) {
          selectedRowKeys.splice(selectedRowKeys.indexOf(key), 1);
          changeRowKeys.push(key);
        }
      });
    }
    _this13.setState({
      selectionDirty: true
    });
    _this13.setSelectedRowKeys(selectedRowKeys, {
      selectWay: 'onSelectAll',
      checked: checked,
      changeRowKeys: changeRowKeys
    });
  };

  this.handlePageChange = function (current) {
    var _props5;

    var props = _this13.props;
    var pagination = _extends({}, _this13.state.pagination);
    if (current) {
      pagination.current = current;
    } else {
      pagination.current = pagination.current || 1;
    }
    pagination.onChange(pagination.current);

    var newState = {
      selectionDirty: false,
      pagination: pagination
    };
    // Controlled current prop will not respond user interaction
    if (props.pagination && 'current' in props.pagination) {
      newState.pagination = _extends({}, pagination, {
        current: _this13.state.pagination.current
      });
    }
    _this13.setState(newState);

    (_props5 = _this13.props).onChange.apply(_props5, _toConsumableArray(_this13.prepareParamsArguments(_extends({}, _this13.state, {
      selectionDirty: false,
      pagination: pagination
    }))));
  };

  this.renderSelectionRadio = function (value, record, index) {
    var rowIndex = _this13.getRecordKey(record, index); // 从 1 开始
    var props = _this13.getCheckboxPropsByItem(record);
    var checked = void 0;
    if (_this13.state.selectionDirty) {
      checked = _this13.state.selectedRowKeys.indexOf(rowIndex) >= 0;
    } else {
      checked = _this13.state.selectedRowKeys.indexOf(rowIndex) >= 0 || _this13.getDefaultSelection().indexOf(rowIndex) >= 0;
    }
    return _react2["default"].createElement(
      'span',
      { onClick: stopPropagation },
      _react2["default"].createElement(_radio2["default"], { disabled: props.disabled,
        onChange: function onChange(e) {
          return _this13.handleRadioSelect(record, rowIndex, e);
        },
        value: rowIndex, checked: checked
      })
    );
  };

  this.renderSelectionCheckBox = function (value, record, index) {
    var rowIndex = _this13.getRecordKey(record, index); // 从 1 开始
    var checked = void 0;
    if (_this13.state.selectionDirty) {
      checked = _this13.state.selectedRowKeys.indexOf(rowIndex) >= 0;
    } else {
      checked = _this13.state.selectedRowKeys.indexOf(rowIndex) >= 0 || _this13.getDefaultSelection().indexOf(rowIndex) >= 0;
    }
    var props = _this13.getCheckboxPropsByItem(record);
    return _react2["default"].createElement(
      'span',
      { onClick: stopPropagation },
      _react2["default"].createElement(_checkbox2["default"], {
        checked: checked,
        disabled: props.disabled,
        onChange: function onChange(e) {
          return _this13.handleSelect(record, rowIndex, e);
        }
      })
    );
  };

  this.handleShowSizeChange = function (current, pageSize) {
    var _props6;

    var pagination = _this13.state.pagination;
    pagination.onShowSizeChange(current, pageSize);
    var nextPagination = _extends({}, pagination, { pageSize: pageSize, current: current });
    _this13.setState({ pagination: nextPagination });
    (_props6 = _this13.props).onChange.apply(_props6, _toConsumableArray(_this13.prepareParamsArguments(_extends({}, _this13.state, {
      pagination: nextPagination
    }))));
  };
}, _temp);
exports["default"] = Table;
module.exports = exports['default'];