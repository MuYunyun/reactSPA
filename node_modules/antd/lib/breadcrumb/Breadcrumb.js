'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = undefined;

var _class, _temp;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _BreadcrumbItem = require('./BreadcrumbItem');

var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var defaultNameRender = function defaultNameRender(breadcrumbName, route, params) {
  if (!breadcrumbName) {
    return null;
  }
  var paramsKeys = Object.keys(params).join('|');
  var name = breadcrumbName.replace(new RegExp(':(' + paramsKeys + ')', 'g'), function (replacement, key) {
    return params[key] || replacement;
  });
  return _react2["default"].createElement(
    'span',
    null,
    name
  );
};

var Breadcrumb = (_temp = _class = function (_React$Component) {
  _inherits(Breadcrumb, _React$Component);

  function Breadcrumb() {
    _classCallCheck(this, Breadcrumb);

    return _possibleConstructorReturn(this, _React$Component.apply(this, arguments));
  }

  Breadcrumb.prototype.render = function render() {
    var crumbs = void 0;
    var _props = this.props,
        separator = _props.separator,
        prefixCls = _props.prefixCls,
        routes = _props.routes,
        params = _props.params,
        children = _props.children,
        linkRender = _props.linkRender,
        nameRender = _props.nameRender;

    if (routes && routes.length > 0) {
      (function () {
        var paths = [];
        var lastPath = routes.length - 1;
        crumbs = routes.map(function (route, i) {
          route.path = route.path || '';
          var path = route.path.replace(/^\//, '');
          Object.keys(params).forEach(function (key) {
            path = path.replace(':' + key, params[key]);
          });
          if (path) {
            paths.push(path);
          }
          var name = nameRender(route.breadcrumbName, route, params);
          if (name) {
            var link = i === lastPath ? name : linkRender('/' + paths.join('/'), name, paths);
            return _react2["default"].createElement(
              _BreadcrumbItem2["default"],
              { separator: separator, key: route.breadcrumbName || i },
              link
            );
          }
          return null;
        });
      })();
    } else {
      crumbs = _react2["default"].Children.map(children, function (element, index) {
        return (0, _react.cloneElement)(element, {
          separator: separator,
          key: index
        });
      });
    }
    return _react2["default"].createElement(
      'div',
      { className: prefixCls },
      crumbs
    );
  };

  return Breadcrumb;
}(_react2["default"].Component), _class.defaultProps = {
  prefixCls: 'ant-breadcrumb',
  separator: '/',
  linkRender: function linkRender(href, name) {
    return _react2["default"].createElement(
      'a',
      { href: '#' + href },
      name
    );
  },
  nameRender: defaultNameRender
}, _class.propTypes = {
  prefixCls: _react2["default"].PropTypes.string,
  separator: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.string, _react2["default"].PropTypes.element]),
  routes: _react2["default"].PropTypes.array,
  params: _react2["default"].PropTypes.object,
  linkRender: _react2["default"].PropTypes.func,
  nameRender: _react2["default"].PropTypes.func
}, _temp);
exports["default"] = Breadcrumb;
module.exports = exports['default'];