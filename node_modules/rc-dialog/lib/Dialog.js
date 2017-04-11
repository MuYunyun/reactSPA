'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _KeyCode = require('rc-util/lib/KeyCode');

var _KeyCode2 = _interopRequireDefault(_KeyCode);

var _rcAnimate = require('rc-animate');

var _rcAnimate2 = _interopRequireDefault(_rcAnimate);

var _LazyRenderBox = require('./LazyRenderBox');

var _LazyRenderBox2 = _interopRequireDefault(_LazyRenderBox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var uuid = 0;
var openCount = 0;

// Measure scrollbar width for padding body during modal show/hide
var scrollbarMeasure = {
  position: 'absolute',
  top: '-9999px',
  width: '50px',
  height: '50px',
  overflow: 'scroll'
};

/* eslint react/no-is-mounted:0 */

function noop() {}

function getScroll(w, top) {
  var ret = w['page' + (top ? 'Y' : 'X') + 'Offset'];
  var method = 'scroll' + (top ? 'Top' : 'Left');
  if (typeof ret !== 'number') {
    var d = w.document;
    ret = d.documentElement[method];
    if (typeof ret !== 'number') {
      ret = d.body[method];
    }
  }
  return ret;
}

function setTransformOrigin(node, value) {
  var style = node.style;
  ['Webkit', 'Moz', 'Ms', 'ms'].forEach(function (prefix) {
    style[prefix + 'TransformOrigin'] = value;
  });
  style['transformOrigin'] = value;
}

function offset(el) {
  var rect = el.getBoundingClientRect();
  var pos = {
    left: rect.left,
    top: rect.top
  };
  var doc = el.ownerDocument;
  var w = doc.defaultView || doc.parentWindow;
  pos.left += getScroll(w);
  pos.top += getScroll(w, 1);
  return pos;
}

var Dialog = _react2["default"].createClass({
  displayName: 'Dialog',

  propTypes: {
    onAfterClose: _react.PropTypes.func,
    onClose: _react.PropTypes.func,
    closable: _react.PropTypes.bool,
    maskClosable: _react.PropTypes.bool,
    visible: _react.PropTypes.bool,
    mousePosition: _react.PropTypes.object,
    wrapStyle: _react.PropTypes.object,
    prefixCls: _react.PropTypes.string,
    wrapClassName: _react.PropTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onAfterClose: noop,
      onClose: noop
    };
  },
  componentWillMount: function componentWillMount() {
    this.titleId = 'rcDialogTitle' + uuid++;
  },
  componentDidMount: function componentDidMount() {
    this.componentDidUpdate({});
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    var props = this.props;
    var mousePosition = this.props.mousePosition;
    if (props.visible) {
      // first show
      if (!prevProps.visible) {
        this.lastOutSideFocusNode = document.activeElement;
        this.addScrollingEffect();
        this.refs.wrap.focus();
        var dialogNode = _reactDom2["default"].findDOMNode(this.refs.dialog);
        if (mousePosition) {
          var elOffset = offset(dialogNode);
          setTransformOrigin(dialogNode, mousePosition.x - elOffset.left + 'px ' + (mousePosition.y - elOffset.top) + 'px');
        } else {
          setTransformOrigin(dialogNode, '');
        }
      }
    } else if (prevProps.visible) {
      if (props.mask && this.lastOutSideFocusNode) {
        try {
          this.lastOutSideFocusNode.focus();
        } catch (e) {
          this.lastOutSideFocusNode = null;
        }
        this.lastOutSideFocusNode = null;
      }
    }
  },
  onAnimateLeave: function onAnimateLeave() {
    // need demo?
    // https://github.com/react-component/dialog/pull/28
    if (this.refs.wrap) {
      this.refs.wrap.style.display = 'none';
    }
    this.removeScrollingEffect();
    this.props.onAfterClose();
  },
  onMaskClick: function onMaskClick(e) {
    if (e.target === e.currentTarget && this.props.closable && this.props.maskClosable) {
      this.close(e);
    }
  },
  onKeyDown: function onKeyDown(e) {
    var props = this.props;
    if (props.closable && props.keyboard) {
      if (e.keyCode === _KeyCode2["default"].ESC) {
        this.close(e);
      }
    }
    // keep focus inside dialog
    if (props.visible) {
      if (e.keyCode === _KeyCode2["default"].TAB) {
        var activeElement = document.activeElement;
        var dialogRoot = this.refs.wrap;
        var sentinel = this.refs.sentinel;
        if (e.shiftKey) {
          if (activeElement === dialogRoot) {
            sentinel.focus();
          }
        } else if (activeElement === this.refs.sentinel) {
          dialogRoot.focus();
        }
      }
    }
  },
  getDialogElement: function getDialogElement() {
    var props = this.props;
    var closable = props.closable;
    var prefixCls = props.prefixCls;
    var dest = {};
    if (props.width !== undefined) {
      dest.width = props.width;
    }
    if (props.height !== undefined) {
      dest.height = props.height;
    }

    var footer = void 0;
    if (props.footer) {
      footer = _react2["default"].createElement(
        'div',
        { className: prefixCls + '-footer', ref: 'footer' },
        props.footer
      );
    }

    var header = void 0;
    if (props.title) {
      header = _react2["default"].createElement(
        'div',
        { className: prefixCls + '-header', ref: 'header' },
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-title', id: this.titleId },
          props.title
        )
      );
    }

    var closer = void 0;
    if (closable) {
      closer = _react2["default"].createElement(
        'button',
        {
          onClick: this.close,
          'aria-label': 'Close',
          className: prefixCls + '-close'
        },
        _react2["default"].createElement('span', { className: prefixCls + '-close-x' })
      );
    }

    var style = _extends({}, props.style, dest);
    var transitionName = this.getTransitionName();
    var dialogElement = _react2["default"].createElement(
      _LazyRenderBox2["default"],
      {
        role: 'document',
        ref: 'dialog',
        style: style,
        className: prefixCls + ' ' + (props.className || ''),
        visible: props.visible
      },
      _react2["default"].createElement(
        'div',
        { className: prefixCls + '-content' },
        closer,
        header,
        _react2["default"].createElement(
          'div',
          { className: prefixCls + '-body', style: props.bodyStyle, ref: 'body' },
          props.children
        ),
        footer
      ),
      _react2["default"].createElement(
        'div',
        { tabIndex: '0', ref: 'sentinel', style: { width: 0, height: 0, overflow: 'hidden' } },
        'sentinel'
      )
    );
    return _react2["default"].createElement(
      _rcAnimate2["default"],
      {
        key: 'dialog',
        showProp: 'visible',
        onLeave: this.onAnimateLeave,
        transitionName: transitionName,
        component: '',
        transitionAppear: true
      },
      dialogElement
    );
  },
  getZIndexStyle: function getZIndexStyle() {
    var style = {};
    var props = this.props;
    if (props.zIndex !== undefined) {
      style.zIndex = props.zIndex;
    }
    return style;
  },
  getWrapStyle: function getWrapStyle() {
    return _extends({}, this.getZIndexStyle(), this.props.wrapStyle);
  },
  getMaskElement: function getMaskElement() {
    var props = this.props;
    var maskElement = void 0;
    if (props.mask) {
      var maskTransition = this.getMaskTransitionName();
      maskElement = _react2["default"].createElement(_LazyRenderBox2["default"], {
        style: this.getZIndexStyle(),
        key: 'mask',
        className: props.prefixCls + '-mask',
        hiddenClassName: props.prefixCls + '-mask-hidden',
        visible: props.visible
      });
      if (maskTransition) {
        maskElement = _react2["default"].createElement(
          _rcAnimate2["default"],
          {
            key: 'mask',
            showProp: 'visible',
            transitionAppear: true,
            component: '',
            transitionName: maskTransition
          },
          maskElement
        );
      }
    }
    return maskElement;
  },
  getMaskTransitionName: function getMaskTransitionName() {
    var props = this.props;
    var transitionName = props.maskTransitionName;
    var animation = props.maskAnimation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  },
  getTransitionName: function getTransitionName() {
    var props = this.props;
    var transitionName = props.transitionName;
    var animation = props.animation;
    if (!transitionName && animation) {
      transitionName = props.prefixCls + '-' + animation;
    }
    return transitionName;
  },
  getElement: function getElement(part) {
    return this.refs[part];
  },
  setScrollbar: function setScrollbar() {
    if (this.bodyIsOverflowing && this.scrollbarWidth) {
      document.body.style.paddingRight = this.scrollbarWidth + 'px';
    }
  },
  addScrollingEffect: function addScrollingEffect() {
    openCount++;
    if (openCount !== 1) {
      return;
    }
    this.checkScrollbar();
    this.setScrollbar();
    document.body.style.overflow = 'hidden';
    // this.adjustDialog();
  },
  removeScrollingEffect: function removeScrollingEffect() {
    openCount--;
    if (openCount !== 0) {
      return;
    }
    document.body.style.overflow = '';
    this.resetScrollbar();
    // this.resetAdjustments();
  },
  close: function close(e) {
    this.props.onClose(e);
  },
  checkScrollbar: function checkScrollbar() {
    var fullWindowWidth = window.innerWidth;
    if (!fullWindowWidth) {
      // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect();
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    if (this.bodyIsOverflowing) {
      this.scrollbarWidth = this.measureScrollbar();
    }
  },
  resetScrollbar: function resetScrollbar() {
    document.body.style.paddingRight = '';
  },
  measureScrollbar: function measureScrollbar() {
    if (this.scrollbarWidth !== undefined) {
      return this.scrollbarWidth;
    }
    var scrollDiv = document.createElement('div');
    for (var scrollProp in scrollbarMeasure) {
      if (scrollbarMeasure.hasOwnProperty(scrollProp)) {
        scrollDiv.style[scrollProp] = scrollbarMeasure[scrollProp];
      }
    }
    document.body.appendChild(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    document.body.removeChild(scrollDiv);
    this.scrollbarWidth = scrollbarWidth;
    return scrollbarWidth;
  },
  adjustDialog: function adjustDialog() {
    if (this.refs.wrap && this.scrollbarWidth) {
      var modalIsOverflowing = this.refs.wrap.scrollHeight > document.documentElement.clientHeight;
      this.refs.wrap.style.paddingLeft = (!this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '') + 'px';
      this.refs.wrap.style.paddingRight = (this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : '') + 'px';
    }
  },
  resetAdjustments: function resetAdjustments() {
    if (this.refs.wrap) {
      this.refs.wrap.style.paddingLeft = this.refs.wrap.style.paddingLeft = '';
    }
  },
  render: function render() {
    var props = this.props;
    var prefixCls = props.prefixCls;
    var style = this.getWrapStyle();
    // clear hide display
    // and only set display after async anim, not here for hide
    if (props.visible) {
      style.display = null;
    }
    return _react2["default"].createElement(
      'div',
      null,
      this.getMaskElement(),
      _react2["default"].createElement(
        'div',
        {
          tabIndex: '-1',
          onKeyDown: this.onKeyDown,
          className: prefixCls + '-wrap ' + (props.wrapClassName || ''),
          ref: 'wrap',
          onClick: this.onMaskClick,
          role: 'dialog',
          'aria-labelledby': props.title ? this.titleId : null,
          style: style
        },
        this.getDialogElement()
      )
    );
  }
});

exports["default"] = Dialog;
module.exports = exports['default'];