'use strict';

var React = require('react');

function mirror(o) {
  return o;
}

module.exports = function mapSelf(children) {
  // return ReactFragment
  return React.Children.map(children, mirror);
};