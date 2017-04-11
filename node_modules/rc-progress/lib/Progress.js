'use strict';

var assign = require('object-assign');
var React = require('react');
var defaultProps = {
  strokeWidth: 1,
  strokeColor: '#3FC7FA',
  trailWidth: 1,
  trailColor: '#D9D9D9'
};

var Line = React.createClass({
  displayName: 'Line',

  render: function render() {
    var props = assign({}, this.props);
    var pathStyle = {
      'strokeDasharray': '100px, 100px',
      'strokeDashoffset': 100 - props.percent + 'px',
      'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s linear'
    };

    ['strokeWidth', 'strokeColor', 'trailWidth', 'trailColor'].forEach(function (item) {
      if (item === 'trailWidth' && !props.trailWidth && props.strokeWidth) {
        props.trailWidth = props.strokeWidth;
        return;
      }
      if (item === 'strokeWidth' && props.strokeWidth && (!parseFloat(props.strokeWidth) || parseFloat(props.strokeWidth) > 100 || parseFloat(props.strokeWidth) < 0)) {
        props[item] = defaultProps[item];
        return;
      }
      if (!props[item]) {
        props[item] = defaultProps[item];
      }
    });

    var strokeWidth = props.strokeWidth;
    var center = strokeWidth / 2;
    var right = 100 - strokeWidth / 2;
    var pathString = 'M ' + center + ',' + center + ' L ' + right + ',' + center;
    var viewBoxString = '0 0 100 ' + strokeWidth;

    return React.createElement(
      'svg',
      { className: "rc-progress-line", viewBox: viewBoxString, preserveAspectRatio: "none" },
      React.createElement('path', { className: "rc-progress-line-trail", d: pathString, strokeLinecap: "round",
        stroke: props.trailColor, strokeWidth: props.trailWidth, fillOpacity: "0" }),
      React.createElement('path', { className: "rc-progress-line-path", d: pathString, strokeLinecap: "round",
        stroke: props.strokeColor, strokeWidth: props.strokeWidth, fillOpacity: "0", style: pathStyle })
    );
  }
});

var Circle = React.createClass({
  displayName: 'Circle',

  render: function render() {
    var props = assign({}, this.props);
    var strokeWidth = props.strokeWidth;
    var radius = 50 - strokeWidth / 2;
    var pathString = 'M 50,50 m 0,-' + radius + '\n     a ' + radius + ',' + radius + ' 0 1 1 0,' + 2 * radius + '\n     a ' + radius + ',' + radius + ' 0 1 1 0,-' + 2 * radius;
    var len = Math.PI * 2 * radius;
    var pathStyle = {
      'strokeDasharray': len + 'px ' + len + 'px',
      'strokeDashoffset': (100 - props.percent) / 100 * len + 'px',
      'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
    };
    ['strokeWidth', 'strokeColor', 'trailWidth', 'trailColor'].forEach(function (item) {
      if (item === 'trailWidth' && !props.trailWidth && props.strokeWidth) {
        props.trailWidth = props.strokeWidth;
        return;
      }
      if (!props[item]) {
        props[item] = defaultProps[item];
      }
    });

    return React.createElement(
      'svg',
      { className: 'rc-progress-circle', viewBox: '0 0 100 100' },
      React.createElement('path', { className: 'rc-progress-circle-trail', d: pathString, stroke: props.trailColor,
        strokeWidth: props.trailWidth, fillOpacity: '0' }),
      React.createElement('path', { className: 'rc-progress-circle-path', d: pathString, strokeLinecap: 'round',
        stroke: props.strokeColor, strokeWidth: props.strokeWidth, fillOpacity: '0', style: pathStyle })
    );
  }
});

module.exports = {
  Line: Line,
  Circle: Circle
};