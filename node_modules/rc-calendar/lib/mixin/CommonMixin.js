'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _en_US = require('../locale/en_US');

var _en_US2 = _interopRequireDefault(_en_US);

var _index = require('../util/index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function noop() {}

exports["default"] = {
  propTypes: {
    className: _react.PropTypes.string,
    locale: _react.PropTypes.object,
    style: _react.PropTypes.object,
    visible: _react.PropTypes.bool,
    onSelect: _react.PropTypes.func,
    prefixCls: _react.PropTypes.string,
    onChange: _react.PropTypes.func,
    onOk: _react.PropTypes.func
  },

  getDefaultProps: function getDefaultProps() {
    return {
      locale: _en_US2["default"],
      style: {},
      visible: true,
      prefixCls: 'rc-calendar',
      formatter: 'yyyy-MM-dd',
      className: '',
      onSelect: noop,
      onChange: noop,
      onClear: noop
    };
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return this.props.visible || nextProps.visible;
  },
  getFormatter: function getFormatter() {
    var formatter = this.props.formatter;
    var locale = this.props.locale;
    if (this.normalFormatter && formatter === this.lastFormatter) {
      return this.normalFormatter;
    }
    this.normalFormatter = (0, _index.getFormatter)(formatter, locale);
    this.lastFormatter = formatter;
    return this.normalFormatter;
  },
  focus: function focus() {
    if (this.refs.root) {
      this.refs.root.focus();
    }
  }
};
module.exports = exports['default'];