'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

function noop() {}

var CalendarHeader = function (_Component) {
  _inherits(CalendarHeader, _Component);

  function CalendarHeader() {
    _classCallCheck(this, CalendarHeader);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CalendarHeader.prototype.onYearChange = function onYearChange(year) {
    var newValue = this.props.value.clone();
    newValue.setYear(parseInt(year, 10));
    this.props.onValueChange(newValue);
  };

  CalendarHeader.prototype.onMonthChange = function onMonthChange(month) {
    var newValue = this.props.value.clone();
    newValue.setMonth(parseInt(month, 10));
    this.props.onValueChange(newValue);
  };

  CalendarHeader.prototype.getYearSelectElement = function getYearSelectElement(year) {
    var _props = this.props;
    var yearSelectOffset = _props.yearSelectOffset;
    var yearSelectTotal = _props.yearSelectTotal;
    var locale = _props.locale;
    var prefixCls = _props.prefixCls;
    var Select = _props.Select;

    var start = year - yearSelectOffset;
    var end = start + yearSelectTotal;
    var suffix = locale.year === '年' ? '年' : '';

    var options = [];
    for (var index = start; index < end; index++) {
      options.push(_react2["default"].createElement(
        Select.Option,
        { key: '' + index },
        index + suffix
      ));
    }
    return _react2["default"].createElement(
      Select,
      {
        className: prefixCls + '-header-year-select',
        onChange: this.onYearChange.bind(this),
        dropdownStyle: { zIndex: 2000 },
        dropdownMenuStyle: { maxHeight: 250, overflow: 'auto', fontSize: 12 },
        optionLabelProp: 'children',
        value: String(year),
        showSearch: false
      },
      options
    );
  };

  CalendarHeader.prototype.getMonthSelectElement = function getMonthSelectElement(month) {
    var props = this.props;
    var months = props.locale.format.months;
    var prefixCls = props.prefixCls;

    var options = [];
    var Select = props.Select;

    for (var index = 0; index < 12; index++) {
      options.push(_react2["default"].createElement(
        Select.Option,
        { key: '' + index },
        months[index]
      ));
    }

    return _react2["default"].createElement(
      Select,
      {
        className: prefixCls + '-header-month-select',
        dropdownStyle: { zIndex: 2000 },
        dropdownMenuStyle: { maxHeight: 250, overflow: 'auto', overflowX: 'hidden', fontSize: 12 },
        optionLabelProp: 'children',
        value: String(month),
        showSearch: false,
        onChange: this.onMonthChange.bind(this)
      },
      options
    );
  };

  CalendarHeader.prototype.changeTypeToDate = function changeTypeToDate() {
    this.props.onTypeChange('date');
  };

  CalendarHeader.prototype.changeTypeToMonth = function changeTypeToMonth() {
    this.props.onTypeChange('month');
  };

  CalendarHeader.prototype.render = function render() {
    var _props2 = this.props;
    var value = _props2.value;
    var locale = _props2.locale;
    var prefixCls = _props2.prefixCls;
    var type = _props2.type;
    var showTypeSwitch = _props2.showTypeSwitch;
    var headerComponents = _props2.headerComponents;

    var year = value.getYear();
    var month = value.getMonth();
    var yearSelect = this.getYearSelectElement(year);
    var monthSelect = type === 'month' ? null : this.getMonthSelectElement(month);
    var switchCls = prefixCls + '-header-switcher';
    var typeSwitcher = showTypeSwitch ? _react2["default"].createElement(
      'span',
      { className: switchCls },
      type === 'date' ? _react2["default"].createElement(
        'span',
        { className: switchCls + '-focus' },
        locale.month
      ) : _react2["default"].createElement(
        'span',
        {
          onClick: this.changeTypeToDate.bind(this),
          className: switchCls + '-normal'
        },
        locale.month
      ),
      type === 'month' ? _react2["default"].createElement(
        'span',
        { className: switchCls + '-focus' },
        locale.year
      ) : _react2["default"].createElement(
        'span',
        {
          onClick: this.changeTypeToMonth.bind(this),
          className: switchCls + '-normal'
        },
        locale.year
      )
    ) : null;

    return _react2["default"].createElement(
      'div',
      { className: prefixCls + '-header' },
      typeSwitcher,
      monthSelect,
      yearSelect,
      headerComponents
    );
  };

  return CalendarHeader;
}(_react.Component);

CalendarHeader.propTypes = {
  value: _react.PropTypes.object,
  locale: _react.PropTypes.object,
  yearSelectOffset: _react.PropTypes.number,
  yearSelectTotal: _react.PropTypes.number,
  onValueChange: _react.PropTypes.func,
  onTypeChange: _react.PropTypes.func,
  Select: _react.PropTypes.func,
  prefixCls: _react.PropTypes.string,
  type: _react.PropTypes.string,
  showTypeSwitch: _react.PropTypes.bool,
  headerComponents: _react.PropTypes.array
};
CalendarHeader.defaultProps = {
  yearSelectOffset: 10,
  yearSelectTotal: 20,
  onValueChange: noop,
  onTypeChange: noop
};

exports["default"] = CalendarHeader;
module.exports = exports['default'];