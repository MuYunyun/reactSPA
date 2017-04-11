'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _icon = require('../icon');

var _icon2 = _interopRequireDefault(_icon);

var _progress = require('../progress');

var _progress2 = _interopRequireDefault(_progress);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var prefixCls = 'ant-upload';


// https://developer.mozilla.org/en-US/docs/Web/API/FileReader/readAsDataURL
var previewFile = function previewFile(file, callback) {
  var reader = new FileReader();
  reader.onloadend = function () {
    return callback(reader.result);
  };
  reader.readAsDataURL(file);
};

var UploadList = (_temp2 = _class = function (_React$Component) {
  _inherits(UploadList, _React$Component);

  function UploadList() {
    var _temp, _this, _ret;

    _classCallCheck(this, UploadList);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClose = function (file) {
      _this.props.onRemove(file);
    }, _this.handlePreview = function (file, e) {
      if (_this.props.onPreview) {
        e.preventDefault();
        return _this.props.onPreview(file);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  UploadList.prototype.componentDidUpdate = function componentDidUpdate() {
    var _this2 = this;

    if (this.props.listType !== 'picture' && this.props.listType !== 'picture-card') {
      return;
    }
    this.props.items.forEach(function (file) {
      if (typeof document === 'undefined' || typeof window === 'undefined' || !window.FileReader || !window.File || !(file.originFileObj instanceof File) || file.thumbUrl !== undefined) {
        return;
      }
      /*eslint-disable */
      file.thumbUrl = '';
      /*eslint-enable */
      previewFile(file.originFileObj, function (previewDataUrl) {
        /*eslint-disable */
        file.thumbUrl = previewDataUrl;
        /*eslint-enable */
        _this2.forceUpdate();
      });
    });
  };

  UploadList.prototype.render = function render() {
    var _this3 = this,
        _classNames2;

    var list = this.props.items.map(function (file) {
      var _classNames;

      var progress = void 0;
      var icon = _react2["default"].createElement(_icon2["default"], { type: 'paper-clip' });

      if (_this3.props.listType === 'picture' || _this3.props.listType === 'picture-card') {
        if (file.status === 'uploading' || !file.thumbUrl && !file.url) {
          if (_this3.props.listType === 'picture-card') {
            icon = _react2["default"].createElement(
              'div',
              { className: prefixCls + '-list-item-uploading-text' },
              '\u6587\u4EF6\u4E0A\u4F20\u4E2D'
            );
          } else {
            icon = _react2["default"].createElement(_icon2["default"], { className: prefixCls + '-list-item-thumbnail', type: 'picture' });
          }
        } else {
          icon = _react2["default"].createElement(
            'a',
            {
              className: prefixCls + '-list-item-thumbnail',
              onClick: function onClick(e) {
                return _this3.handlePreview(file, e);
              },
              href: file.url,
              target: '_blank'
            },
            _react2["default"].createElement('img', { src: file.thumbUrl || file.url, alt: file.name })
          );
        }
      }

      if (file.status === 'uploading') {
        progress = _react2["default"].createElement(
          'div',
          { className: prefixCls + '-list-item-progress' },
          _react2["default"].createElement(_progress2["default"], _extends({ type: 'line' }, _this3.props.progressAttr, { percent: file.percent }))
        );
      }
      var infoUploadingClass = (0, _classnames2["default"])((_classNames = {}, _defineProperty(_classNames, prefixCls + '-list-item', true), _defineProperty(_classNames, prefixCls + '-list-item-' + file.status, true), _classNames));
      return _react2["default"].createElement(
        'div',
        { className: infoUploadingClass, key: file.uid },
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-list-item-info' },
          icon,
          file.url ? _react2["default"].createElement(
            'a',
            {
              href: file.url,
              target: '_blank',
              className: prefixCls + '-list-item-name',
              onClick: function onClick(e) {
                return _this3.handlePreview(file, e);
              }
            },
            file.name
          ) : _react2["default"].createElement(
            'span',
            {
              className: prefixCls + '-list-item-name',
              onClick: function onClick(e) {
                return _this3.handlePreview(file, e);
              }
            },
            file.name
          ),
          _this3.props.listType === 'picture-card' && file.status !== 'uploading' ? _react2["default"].createElement(
            'span',
            null,
            _react2["default"].createElement(
              'a',
              {
                href: file.url,
                target: '_blank',
                style: { pointerEvents: file.url ? '' : 'none' },
                onClick: function onClick(e) {
                  return _this3.handlePreview(file, e);
                }
              },
              _react2["default"].createElement(_icon2["default"], { type: 'eye-o' })
            ),
            _react2["default"].createElement(_icon2["default"], { type: 'delete', onClick: function onClick() {
                return _this3.handleClose(file);
              } })
          ) : _react2["default"].createElement(_icon2["default"], { type: 'cross', onClick: function onClick() {
              return _this3.handleClose(file);
            } })
        ),
        progress
      );
    });
    var listClassNames = (0, _classnames2["default"])((_classNames2 = {}, _defineProperty(_classNames2, prefixCls + '-list', true), _defineProperty(_classNames2, prefixCls + '-list-' + this.props.listType, true), _classNames2));
    return _react2["default"].createElement(
      'div',
      { className: listClassNames },
      _react2["default"].createElement(
        _rcAnimate2["default"],
        { transitionName: prefixCls + '-margin-top' },
        list
      )
    );
  };

  return UploadList;
}(_react2["default"].Component), _class.defaultProps = {
  listType: 'text', // or picture
  items: [],
  progressAttr: {
    strokeWidth: 3,
    showInfo: false
  }
}, _temp2);
exports["default"] = UploadList;
module.exports = exports['default'];