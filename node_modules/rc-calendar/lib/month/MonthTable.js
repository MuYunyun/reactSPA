'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var ROW = 4;
var COL = 3;

function chooseMonth(month) {
  var next = this.state.value.clone();
  next.rollSetMonth(month);
  this.setAndSelectValue(next);
}

function noop() {}

var MonthTable = function (_Component) {
  _inherits(MonthTable, _Component);

  function MonthTable(props) {
    _classCallCheck(this, MonthTable);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      value: props.value
    };
    return _this;
  }

  MonthTable.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if ('value' in nextProps) {
      this.setState({
        value: nextProps.value
      });
    }
  };

  MonthTable.prototype.getMonths = function getMonths() {
    var props = this.props;
    var value = this.state.value;
    var current = value.clone();
    var locale = props.locale;
    var months = [];
    var shortMonths = locale.format.shortMonths;
    var index = 0;
    for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
      months[rowIndex] = [];
      for (var colIndex = 0; colIndex < COL; colIndex++) {
        current.rollSetMonth(index);
        months[rowIndex][colIndex] = {
          value: index,
          content: shortMonths[index],
          title: shortMonths[index]
        };
        index++;
      }
    }
    return months;
  };

  MonthTable.prototype.setAndSelectValue = function setAndSelectValue(value) {
    this.setState({
      value: value
    });
    this.props.onSelect(value);
  };

  MonthTable.prototype.render = function render() {
    var _this2 = this;

    var props = this.props;
    var value = this.state.value;
    var today = value.clone();
    today.setTime(Date.now());
    var months = this.getMonths();
    var currentMonth = value.getMonth();
    var prefixCls = props.prefixCls;
    var locale = props.locale;
    var contentRender = props.contentRender;
    var cellRender = props.cellRender;

    var monthsEls = months.map(function (month, index) {
      var tds = month.map(function (monthData) {
        var _classNameMap;

        var disabled = false;
        if (props.disabledDate) {
          var testValue = value.clone();
          testValue.rollSetMonth(monthData.value);
          disabled = props.disabledDate(testValue);
        }
        var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-cell-disabled', disabled), _defineProperty(_classNameMap, prefixCls + '-selected-cell', monthData.value === currentMonth), _defineProperty(_classNameMap, prefixCls + '-current-cell', today.getYear() === value.getYear() && monthData.value === today.getMonth()), _classNameMap);
        var cellEl = void 0;
        if (cellRender) {
          var currentValue = value.clone();
          currentValue.rollSetMonth(monthData.value);
          cellEl = cellRender(currentValue, locale);
        } else {
          var content = void 0;
          if (contentRender) {
            var _currentValue = value.clone();
            _currentValue.rollSetMonth(monthData.value);
            content = contentRender(_currentValue, locale);
          } else {
            content = monthData.content;
          }
          cellEl = _react2["default"].createElement(
            'div',
            { className: prefixCls + '-month' },
            content
          );
        }
        return _react2["default"].createElement(
          'td',
          {
            role: 'gridcell',
            key: monthData.value,
            onClick: disabled ? null : chooseMonth.bind(_this2, monthData.value),
            title: monthData.title,
            className: (0, _classnames2["default"])(classNameMap)
          },
          cellEl
        );
      });
      return _react2["default"].createElement(
        'tr',
        { key: index, role: 'row' },
        tds
      );
    });

    return _react2["default"].createElement(
      'table',
      { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
      _react2["default"].createElement(
        'tbody',
        { className: prefixCls + '-tbody' },
        monthsEls
      )
    );
  };

  return MonthTable;
}(_react.Component);

MonthTable.defaultProps = {
  onSelect: noop
};
MonthTable.propTypes = {
  onSelect: _react.PropTypes.func,
  cellRender: _react.PropTypes.func,
  prefixCls: _react.PropTypes.string,
  value: _react.PropTypes.object
};
exports["default"] = MonthTable;
module.exports = exports['default'];