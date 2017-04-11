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


function goYear(direction) {
  var next = this.state.value.clone();
  next.addYear(direction);
  this.setState({
    value: next
  });
}

function chooseDecade(year, event) {
  var next = this.state.value.clone();
  next.setYear(year);
  next.rollSetMonth(this.state.value.getMonth());
  this.props.onSelect(next);
  event.preventDefault();
}

var DecadePanel = function (_React$Component) {
  _inherits(DecadePanel, _React$Component);

  function DecadePanel(props) {
    _classCallCheck(this, DecadePanel);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = {
      value: props.value || props.defaultValue
    };

    // bind methods
    _this.prefixCls = props.rootPrefixCls + '-decade-panel';
    _this.nextCentury = goYear.bind(_this, 100);
    _this.previousCentury = goYear.bind(_this, -100);
    return _this;
  }

  DecadePanel.prototype.render = function render() {
    var _this2 = this;

    var value = this.state.value;
    var locale = this.props.locale;
    var currentYear = value.getYear();
    var startYear = parseInt(currentYear / 100, 10) * 100;
    var preYear = startYear - 10;
    var endYear = startYear + 99;
    var decades = [];
    var index = 0;
    var prefixCls = this.prefixCls;

    for (var rowIndex = 0; rowIndex < ROW; rowIndex++) {
      decades[rowIndex] = [];
      for (var colIndex = 0; colIndex < COL; colIndex++) {
        var startDecade = preYear + index * 10;
        var endDecade = preYear + index * 10 + 9;
        decades[rowIndex][colIndex] = {
          startDecade: startDecade,
          endDecade: endDecade
        };
        index++;
      }
    }

    var decadesEls = decades.map(function (row, decadeIndex) {
      var tds = row.map(function (decadeData) {
        var _classNameMap;

        var dStartDecade = decadeData.startDecade;
        var dEndDecade = decadeData.endDecade;
        var isLast = dStartDecade < startYear;
        var isNext = dEndDecade > endYear;
        var classNameMap = (_classNameMap = {}, _defineProperty(_classNameMap, prefixCls + '-cell', 1), _defineProperty(_classNameMap, prefixCls + '-selected-cell', dStartDecade <= currentYear && currentYear <= dEndDecade), _defineProperty(_classNameMap, prefixCls + '-last-century-cell', isLast), _defineProperty(_classNameMap, prefixCls + '-next-century-cell', isNext), _classNameMap);
        var content = void 0;
        var clickHandler = void 0;
        if (isLast) {
          clickHandler = _this2.previousCentury;
        } else if (isNext) {
          clickHandler = _this2.nextCentury;
        } else {
          content = dStartDecade + '-' + dEndDecade;
          clickHandler = chooseDecade.bind(_this2, dStartDecade);
        }
        return _react2["default"].createElement(
          'td',
          {
            key: dStartDecade,
            onClick: clickHandler,
            role: 'gridcell',
            className: (0, _classnames2["default"])(classNameMap)
          },
          _react2["default"].createElement(
            'a',
            {
              className: prefixCls + '-decade'
            },
            content
          )
        );
      });
      return _react2["default"].createElement(
        'tr',
        { key: decadeIndex, role: 'row' },
        tds
      );
    });

    return _react2["default"].createElement(
      'div',
      { className: this.prefixCls },
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-header' },
        _react2["default"].createElement(
          'a',
          {
            className: prefixCls + '-prev-century-btn',
            role: 'button',
            onClick: this.previousCentury,
            title: locale.previousCentury
          },
          '«'
        ),
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-century' },
          startYear,
          '-',
          endYear
        ),
        _react2["default"].createElement(
          'a',
          {
            className: prefixCls + '-next-century-btn',
            role: 'button',
            onClick: this.nextCentury,
            title: locale.nextCentury
          },
          '»'
        )
      ),
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-body' },
        _react2["default"].createElement(
          'table',
          { className: prefixCls + '-table', cellSpacing: '0', role: 'grid' },
          _react2["default"].createElement(
            'tbody',
            { className: prefixCls + '-tbody' },
            decadesEls
          )
        )
      )
    );
  };

  return DecadePanel;
}(_react2["default"].Component);

exports["default"] = DecadePanel;


DecadePanel.propTypes = {
  locale: _react.PropTypes.object,
  value: _react.PropTypes.object,
  defaultValue: _react.PropTypes.object,
  rootPrefixCls: _react.PropTypes.string
};

DecadePanel.defaultProps = {
  onSelect: function onSelect() {}
};
module.exports = exports['default'];