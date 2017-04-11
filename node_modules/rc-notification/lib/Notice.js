'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Notice = _react2["default"].createClass({
  displayName: 'Notice',

  propTypes: {
    duration: _react.PropTypes.number,
    onClose: _react.PropTypes.func,
    children: _react.PropTypes.any
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onEnd: function onEnd() {},
      onClose: function onClose() {},

      duration: 1.5,
      style: {
        right: '50%'
      }
    };
  },
  componentDidMount: function componentDidMount() {
    var _this = this;

    if (this.props.duration) {
      this.closeTimer = setTimeout(function () {
        _this.close();
      }, this.props.duration * 1000);
    }
  },
  componentWillUnmount: function componentWillUnmount() {
    this.clearCloseTimer();
  },
  clearCloseTimer: function clearCloseTimer() {
    if (this.closeTimer) {
      clearTimeout(this.closeTimer);
      this.closeTimer = null;
    }
  },
  close: function close() {
    this.clearCloseTimer();
    this.props.onClose();
  },
  render: function render() {
    var _className;

    var props = this.props;
    var componentClass = props.prefixCls + '-notice';
    var className = (_className = {}, _defineProperty(_className, '' + componentClass, 1), _defineProperty(_className, componentClass + '-closable', props.closable), _defineProperty(_className, props.className, !!props.className), _className);
    return _react2["default"].createElement(
      'div',
      { className: (0, _classnames2["default"])(className), style: props.style },
      _react2["default"].createElement(
        'div',
        { className: componentClass + '-content' },
        props.children
      ),
      props.closable ? _react2["default"].createElement(
        'a',
        { tabIndex: '0', onClick: this.close, className: componentClass + '-close' },
        _react2["default"].createElement('span', { className: componentClass + '-close-x' })
      ) : null
    );
  }
});

exports["default"] = Notice;
module.exports = exports['default'];