'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames2 = require('classnames');

var _classnames3 = _interopRequireDefault(_classnames2);

var scrollTo = function scrollTo(element, to, duration) {
  var requestAnimationFrame = window.requestAnimationFrame || function requestAnimationFrameTimeout() {
    return setTimeout(arguments[0], 10);
  };
  // jump to target if duration zero
  if (duration <= 0) {
    element.scrollTop = to;
    return;
  }
  var difference = to - element.scrollTop;
  var perTick = difference / duration * 10;

  requestAnimationFrame(function () {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  });
};

var Select = _react2['default'].createClass({
  displayName: 'Select',

  propTypes: {
    prefixCls: _react.PropTypes.string,
    options: _react.PropTypes.array,
    gregorianCalendarLocale: _react.PropTypes.object,
    selectedIndex: _react.PropTypes.number,
    type: _react.PropTypes.string,
    onSelect: _react.PropTypes.func,
    onMouseEnter: _react.PropTypes.func
  },

  componentDidMount: function componentDidMount() {
    // jump to selected option
    this.scrollToSelected(0);
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    // smooth scroll to selected option
    if (prevProps.selectedIndex !== this.props.selectedIndex) {
      this.scrollToSelected(120);
    }
  },

  onSelect: function onSelect(value) {
    var _props = this.props;
    var onSelect = _props.onSelect;
    var type = _props.type;

    onSelect(type, value);
  },

  getOptions: function getOptions() {
    var _this = this;

    var _props2 = this.props;
    var options = _props2.options;
    var selectedIndex = _props2.selectedIndex;
    var prefixCls = _props2.prefixCls;

    return options.map(function (item, index) {
      var _classnames;

      var cls = (0, _classnames3['default'])((_classnames = {}, _defineProperty(_classnames, prefixCls + '-select-option-selected', selectedIndex === index), _defineProperty(_classnames, prefixCls + '-select-option-disabled', item.disabled), _classnames));
      var onclick = null;
      if (!item.disabled) {
        onclick = _this.onSelect.bind(_this, +item.value);
      }
      return _react2['default'].createElement(
        'li',
        { className: cls, key: index, onClick: onclick, disabled: item.disabled },
        item.value
      );
    });
  },

  scrollToSelected: function scrollToSelected(duration) {
    // move to selected item
    var select = _reactDom2['default'].findDOMNode(this);
    var list = _reactDom2['default'].findDOMNode(this.refs.list);
    var index = this.props.selectedIndex;
    if (index < 0) {
      index = 0;
    }
    var topOption = list.children[index];
    var to = topOption.offsetTop;
    scrollTo(select, to, duration);
  },

  render: function render() {
    if (this.props.options.length === 0) {
      return null;
    }

    var prefixCls = this.props.prefixCls;

    return _react2['default'].createElement(
      'div',
      { className: prefixCls + '-select',
        onMouseEnter: this.props.onMouseEnter },
      _react2['default'].createElement(
        'ul',
        { ref: 'list' },
        this.getOptions()
      )
    );
  }
});

exports['default'] = Select;
module.exports = exports['default'];