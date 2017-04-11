'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AjaxUploader = require('./AjaxUploader');

var _AjaxUploader2 = _interopRequireDefault(_AjaxUploader);

var _IframeUploader = require('./IframeUploader');

var _IframeUploader2 = _interopRequireDefault(_IframeUploader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function empty() {}

var Upload = _react2["default"].createClass({
  displayName: 'Upload',

  propTypes: {
    component: _react.PropTypes.string,
    style: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    action: _react.PropTypes.string,
    name: _react.PropTypes.string,
    multipart: _react.PropTypes.bool,
    onError: _react.PropTypes.func,
    onSuccess: _react.PropTypes.func,
    onProgress: _react.PropTypes.func,
    onStart: _react.PropTypes.func,
    data: _react.PropTypes.oneOfType([_react.PropTypes.object, _react.PropTypes.func]),
    headers: _react.PropTypes.object,
    accept: _react.PropTypes.string,
    multiple: _react.PropTypes.bool,
    disabled: _react.PropTypes.bool,
    beforeUpload: _react.PropTypes.func,
    onReady: _react.PropTypes.func,
    withCredentials: _react.PropTypes.bool,
    supportServerRender: _react.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      component: 'span',
      prefixCls: 'rc-upload',
      data: {},
      headers: {},
      name: 'file',
      multipart: false,
      onProgress: empty,
      onReady: empty,
      onStart: empty,
      onError: empty,
      onSuccess: empty,
      supportServerRender: false,
      multiple: false,
      beforeUpload: null,
      withCredentials: false
    };
  },
  getInitialState: function getInitialState() {
    return {
      Component: null
    };
  },
  componentDidMount: function componentDidMount() {
    if (this.props.supportServerRender) {
      /* eslint react/no-did-mount-set-state:0 */
      this.setState({
        Component: this.getComponent()
      }, this.props.onReady);
    }
  },
  getComponent: function getComponent() {
    return typeof FormData !== 'undefined' ? _AjaxUploader2["default"] : _IframeUploader2["default"];
  },
  abort: function abort(file) {
    this.refs.inner.abort(file);
  },
  render: function render() {
    if (this.props.supportServerRender) {
      var _Component = this.state.Component;

      if (_Component) {
        return _react2["default"].createElement(_Component, (0, _extends3["default"])({}, this.props, { ref: 'inner' }));
      }
      return null;
    }
    var Component = this.getComponent();
    return _react2["default"].createElement(Component, (0, _extends3["default"])({}, this.props, { ref: 'inner' }));
  }
});

exports["default"] = Upload;
module.exports = exports['default'];