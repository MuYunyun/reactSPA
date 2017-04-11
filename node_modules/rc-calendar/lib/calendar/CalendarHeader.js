'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MonthPanel = require('../month/MonthPanel');

var _MonthPanel2 = _interopRequireDefault(_MonthPanel);

var _index = require('../util/index');

var _YearPanel = require('../year/YearPanel');

var _YearPanel2 = _interopRequireDefault(_YearPanel);

var _mapSelf = require('rc-util/lib/Children/mapSelf');

var _mapSelf2 = _interopRequireDefault(_mapSelf);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function goMonth(direction) {
  var next = this.props.value.clone();
  next.addMonth(direction);
  this.props.onValueChange(next);
}

function goYear(direction) {
  var next = this.props.value.clone();
  next.addYear(direction);
  this.props.onValueChange(next);
}

var CalendarHeader = _react2["default"].createClass({
  displayName: 'CalendarHeader',

  propTypes: {
    enablePrev: _react.PropTypes.any,
    enableNext: _react.PropTypes.any,
    prefixCls: _react.PropTypes.string,
    locale: _react.PropTypes.object,
    value: _react.PropTypes.object,
    onValueChange: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      enableNext: 1,
      enablePrev: 1
    };
  },
  getInitialState: function getInitialState() {
    var props = this.props;
    this.yearFormatter = (0, _index.getFormatter)(props.locale.yearFormat, props.locale);
    this.monthFormatter = (0, _index.getFormatter)(props.locale.monthFormat, props.locale);
    this.nextMonth = goMonth.bind(this, 1);
    this.previousMonth = goMonth.bind(this, -1);
    this.nextYear = goYear.bind(this, 1);
    this.previousYear = goYear.bind(this, -1);
    return {};
  },
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    var locale = this.props.locale;
    var nextLocale = nextProps.locale;

    if (nextLocale !== locale) {
      this.yearFormatter = (0, _index.getFormatter)(nextLocale.yearFormat, nextLocale);
      this.monthFormatter = (0, _index.getFormatter)(nextLocale.monthFormat, nextLocale);
    }
  },
  onSelect: function onSelect(value) {
    this.setState({
      showMonthPanel: 0,
      showYearPanel: 0
    });
    this.props.onValueChange(value);
  },
  getMonthYearElement: function getMonthYearElement() {
    var props = this.props;
    var prefixCls = props.prefixCls;
    var locale = props.locale;
    var value = this.props.value;
    var monthBeforeYear = locale.monthBeforeYear;
    var selectClassName = prefixCls + '-' + (monthBeforeYear ? 'my-select' : 'ym-select');
    var year = _react2["default"].createElement(
      'a',
      {
        className: prefixCls + '-year-select',
        role: 'button',
        onClick: this.showYearPanel,
        title: locale.monthSelect
      },
      this.yearFormatter.format(value)
    );
    var month = _react2["default"].createElement(
      'a',
      {
        className: prefixCls + '-month-select',
        role: 'button',
        onClick: this.showMonthPanel,
        title: locale.monthSelect
      },
      this.monthFormatter.format(value)
    );
    var my = [];
    if (monthBeforeYear) {
      my = [month, year];
    } else {
      my = [year, month];
    }
    return _react2["default"].createElement(
      'span',
      { className: selectClassName },
      (0, _mapSelf2["default"])(my)
    );
  },
  showIf: function showIf(condition, el) {
    return condition ? el : null;
  },
  showMonthPanel: function showMonthPanel() {
    this.setState({
      showMonthPanel: 1,
      showYearPanel: 0
    });
  },
  showYearPanel: function showYearPanel() {
    this.setState({
      showMonthPanel: 0,
      showYearPanel: 1
    });
  },
  render: function render() {
    var props = this.props;
    var enableNext = props.enableNext;
    var enablePrev = props.enablePrev;
    var prefixCls = props.prefixCls;
    var locale = props.locale;
    var value = props.value;

    var state = this.state;
    var PanelClass = null;
    if (state.showMonthPanel) {
      PanelClass = _MonthPanel2["default"];
    } else if (state.showYearPanel) {
      PanelClass = _YearPanel2["default"];
    }
    var panel = void 0;
    if (PanelClass) {
      panel = _react2["default"].createElement(PanelClass, {
        locale: locale,
        defaultValue: value,
        rootPrefixCls: prefixCls,
        onSelect: this.onSelect
      });
    }
    return _react2["default"].createElement(
      'div',
      { className: prefixCls + '-header' },
      _react2["default"].createElement(
        'div',
        { style: { position: 'relative' } },
        this.showIf(enablePrev, _react2["default"].createElement(
          'a',
          {
            className: prefixCls + '-prev-year-btn',
            role: 'button',
            onClick: this.previousYear,
            title: locale.previousYear
          },
          '«'
        )),
        this.showIf(enablePrev, _react2["default"].createElement(
          'a',
          {
            className: prefixCls + '-prev-month-btn',
            role: 'button',
            onClick: this.previousMonth,
            title: locale.previousMonth
          },
          '‹'
        )),
        this.getMonthYearElement(),
        this.showIf(enableNext, _react2["default"].createElement(
          'a',
          {
            className: prefixCls + '-next-month-btn',
            onClick: this.nextMonth,
            title: locale.nextMonth
          },
          '›'
        )),
        this.showIf(enableNext, _react2["default"].createElement(
          'a',
          {
            className: prefixCls + '-next-year-btn',
            onClick: this.nextYear,
            title: locale.nextYear
          },
          '»'
        ))
      ),
      panel
    );
  }
});

exports["default"] = CalendarHeader;
module.exports = exports['default'];