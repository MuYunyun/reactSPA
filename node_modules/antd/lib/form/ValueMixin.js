'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ValueMixin = {
  setValue: function setValue(field, e) {
    var v = e;
    var target = e && e.target;
    if (target) {
      if (('' + target.nodeName).toLowerCase() === 'input' && target.type === 'checkbox') {
        v = target.checked;
      } else {
        v = e.target.value;
      }
    }
    var newFormData = {};
    newFormData[field] = v;
    this.setState({
      formData: _extends({}, this.state.formData, newFormData)
    });
  }
};

exports["default"] = ValueMixin;
module.exports = exports['default'];