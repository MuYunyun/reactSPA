'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Dialog = require('./Dialog');

var _Dialog2 = _interopRequireDefault(_Dialog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function noop() {}

function copy(obj, fields) {
  var ret = {};
  fields.forEach(function (f) {
    if (obj[f] !== undefined) {
      ret[f] = obj[f];
    }
  });
  return ret;
}

var DialogWrap = function (_React$Component) {
  _inherits(DialogWrap, _React$Component);

  function DialogWrap(props) {
    _classCallCheck(this, DialogWrap);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DialogWrap).call(this, props));

    _this.state = {
      visible: props.visible
    };
    ['onClose', 'cleanDialogContainer'].forEach(function (m) {
      _this[m] = _this[m].bind(_this);
    });
    return _this;
  }

  _createClass(DialogWrap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.componentDidUpdate();
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(props) {
      if ('visible' in props) {
        this.setState({
          visible: props.visible
        });
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return !!(this.state.visible || nextState.visible);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      if (this.dialogRendered) {
        this.dialogInstance = _reactDom2["default"].unstable_renderSubtreeIntoContainer(this, this.getDialogElement(), this.getDialogContainer());
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.dialogContainer) {
        if (this.state.visible) {
          _reactDom2["default"].unstable_renderSubtreeIntoContainer(this, this.getDialogElement({
            onAfterClose: this.cleanDialogContainer,
            onClose: noop,
            visible: false
          }), this.dialogContainer);
        } else {
          this.cleanDialogContainer();
        }
      }
    }
  }, {
    key: 'onClose',
    value: function onClose(e) {
      this.props.onClose(e);
    }
  }, {
    key: 'getDialogContainer',
    value: function getDialogContainer() {
      if (!this.dialogContainer) {
        this.dialogContainer = document.createElement('div');
        document.body.appendChild(this.dialogContainer);
      }
      return this.dialogContainer;
    }
  }, {
    key: 'getDialogElement',
    value: function getDialogElement(extra) {
      var props = this.props;
      var dialogProps = copy(props, ['className', 'closable', 'maskClosable', 'title', 'footer', 'mask', 'keyboard', 'animation', 'transitionName', 'maskAnimation', 'maskTransitionName', 'mousePosition', 'prefixCls', 'style', 'width', 'wrapStyle', 'height', 'zIndex', 'bodyStyle', 'wrapClassName']);
      dialogProps = _extends({}, dialogProps, {
        onClose: this.onClose,
        visible: this.state.visible
      }, extra);
      return _react2["default"].createElement(
        _Dialog2["default"],
        _extends({}, dialogProps, { key: 'dialog' }),
        props.children
      );
    }
  }, {
    key: 'getElement',
    value: function getElement(part) {
      return this.dialogInstance.getElement(part);
    }
  }, {
    key: 'cleanDialogContainer',
    value: function cleanDialogContainer() {
      if (this.dialogContainer) {
        _reactDom2["default"].unmountComponentAtNode(this.dialogContainer);
        document.body.removeChild(this.dialogContainer);
        this.dialogContainer = null;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.dialogRendered = this.dialogRendered || this.state.visible;
      return null;
    }
  }]);

  return DialogWrap;
}(_react2["default"].Component);

DialogWrap.defaultProps = {
  className: '',
  mask: true,
  keyboard: true,
  closable: true,
  maskClosable: true,
  prefixCls: 'rc-dialog',
  onClose: noop
};

DialogWrap.propTypes = {
  className: _react.PropTypes.string,
  keyboard: _react.PropTypes.bool,
  wrapStyle: _react.PropTypes.object,
  style: _react.PropTypes.object,
  mask: _react.PropTypes.bool,
  closable: _react.PropTypes.bool,
  maskClosable: _react.PropTypes.bool,
  prefixCls: _react.PropTypes.string,
  visible: _react.PropTypes.bool,
  onClose: _react.PropTypes.func
};

exports["default"] = DialogWrap;
module.exports = exports['default'];