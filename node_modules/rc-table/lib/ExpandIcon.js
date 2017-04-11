'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _shallowequal = require('shallowequal');

var _shallowequal2 = _interopRequireDefault(_shallowequal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ExpandIcon = _react2["default"].createClass({
  displayName: 'ExpandIcon',

  propTypes: {
    record: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    expandable: _react.PropTypes.any,
    expanded: _react.PropTypes.bool,
    needIndentSpaced: _react.PropTypes.bool,
    onExpand: _react.PropTypes.func
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return !(0, _shallowequal2["default"])(nextProps, this.props);
  },
  render: function render() {
    var _props = this.props;
    var expandable = _props.expandable;
    var prefixCls = _props.prefixCls;
    var onExpand = _props.onExpand;
    var needIndentSpaced = _props.needIndentSpaced;
    var expanded = _props.expanded;
    var record = _props.record;

    if (expandable) {
      var expandClassName = expanded ? 'expanded' : 'collapsed';
      return _react2["default"].createElement('span', {
        className: prefixCls + '-expand-icon ' + prefixCls + '-' + expandClassName,
        onClick: function onClick(e) {
          return onExpand(!expanded, record, e);
        }
      });
    } else if (needIndentSpaced) {
      return _react2["default"].createElement('span', { className: prefixCls + '-expand-icon ' + prefixCls + '-spaced' });
    }
    return null;
  }
});

exports["default"] = ExpandIcon;
module.exports = exports['default'];