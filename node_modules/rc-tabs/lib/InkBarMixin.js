'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

function _componentDidUpdate(component) {
  var refs = component.refs;
  var containerNode = refs.nav;
  var containerOffset = (0, _utils.offset)(containerNode);
  var inkBarNode = refs.inkBar;
  var activeTab = refs.activeTab;
  var tabPosition = component.props.tabPosition;
  if (activeTab) {
    var tabNode = activeTab;
    var tabOffset = (0, _utils.offset)(tabNode);
    var transformPropertyName = (0, _utils.getTransformPropertyName)();
    if (tabPosition === 'top' || tabPosition === 'bottom') {
      var left = tabOffset.left - containerOffset.left;
      // use 3d gpu to optimize render
      if (transformPropertyName) {
        inkBarNode.style[transformPropertyName] = 'translate3d(' + left + 'px,0,0)';
        inkBarNode.style.width = tabNode.offsetWidth + 'px';
        inkBarNode.style.height = '';
      } else {
        inkBarNode.style.left = left + 'px';
        inkBarNode.style.top = '';
        inkBarNode.style.bottom = '';
        inkBarNode.style.right = containerNode.offsetWidth - left - tabNode.offsetWidth + 'px';
      }
    } else {
      var top = tabOffset.top - containerOffset.top;
      if (transformPropertyName) {
        inkBarNode.style[transformPropertyName] = 'translate3d(0,' + top + 'px,0)';
        inkBarNode.style.height = tabNode.offsetHeight + 'px';
        inkBarNode.style.width = '';
      } else {
        inkBarNode.style.left = '';
        inkBarNode.style.right = '';
        inkBarNode.style.top = top + 'px';
        inkBarNode.style.bottom = containerNode.offsetHeight - top - tabNode.offsetHeight + 'px';
      }
    }
  }
  inkBarNode.style.display = activeTab ? 'block' : 'none';
}

exports["default"] = {
  componentDidUpdate: function componentDidUpdate() {
    _componentDidUpdate(this);
  },
  componentDidMount: function componentDidMount() {
    _componentDidUpdate(this);
  }
};
module.exports = exports['default'];