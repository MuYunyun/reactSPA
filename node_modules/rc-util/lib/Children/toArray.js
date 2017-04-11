'use strict';

var React = require('react');

module.exports = function toArray(children) {
  var ret = [];
  React.Children.forEach(children, function (c) {
    ret.push(c);
  });
  return ret;
};