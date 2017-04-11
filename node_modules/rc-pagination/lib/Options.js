'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('react');
var KEYCODE = require('./KeyCode');

var Options = (function (_React$Component) {
  _inherits(Options, _React$Component);

  function Options(props) {
    var _this = this;

    _classCallCheck(this, Options);

    _get(Object.getPrototypeOf(Options.prototype), 'constructor', this).call(this, props);

    this.state = {
      current: props.current,
      _current: props.current
    };

    ['_handleChange', '_changeSize', '_go', '_buildOptionText'].forEach(function (method) {
      return _this[method] = _this[method].bind(_this);
    });
  }

  _createClass(Options, [{
    key: '_buildOptionText',
    value: function _buildOptionText(value) {
      return value + ' ' + this.props.locale.items_per_page;
    }
  }, {
    key: '_changeSize',
    value: function _changeSize(value) {
      this.props.changeSize(Number(value));
    }
  }, {
    key: '_handleChange',
    value: function _handleChange(evt) {
      var _val = evt.target.value;

      this.setState({
        _current: _val
      });
    }
  }, {
    key: '_go',
    value: function _go(e) {
      var _val = e.target.value;
      if (_val === '') {
        return;
      }
      var val = Number(this.state._current);
      if (isNaN(val)) {
        val = this.state.current;
      }
      if (e.keyCode === KEYCODE.ENTER) {
        var c = this.props.quickGo(val);
        this.setState({
          _current: c,
          current: c
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var props = this.props;
      var state = this.state;
      var locale = props.locale;
      var prefixCls = props.rootPrefixCls + '-options';
      var changeSize = props.changeSize;
      var quickGo = props.quickGo;
      var buildOptionText = props.buildOptionText || this._buildOptionText;
      var Select = props.selectComponentClass;
      var changeSelect = null;
      var goInput = null;

      if (!(changeSize || quickGo)) {
        return null;
      }

      if (changeSize && Select) {
        (function () {
          var Option = Select.Option;
          var pageSize = props.pageSize || props.pageSizeOptions[0];
          var options = props.pageSizeOptions.map(function (opt, i) {
            return React.createElement(
              Option,
              { key: i, value: opt },
              buildOptionText(opt)
            );
          });

          changeSelect = React.createElement(
            Select,
            {
              prefixCls: props.selectPrefixCls, showSearch: false,
              className: prefixCls + '-size-changer',
              optionLabelProp: 'children',
              dropdownMatchSelectWidth: false,
              value: pageSize + '', onChange: _this2._changeSize },
            options
          );
        })();
      }

      if (quickGo) {
        goInput = React.createElement(
          'div',
          { className: prefixCls + '-quick-jumper' },
          locale.jump_to,
          React.createElement('input', { type: 'text', value: state._current, onChange: this._handleChange.bind(this), onKeyUp: this._go.bind(this) }),
          locale.page
        );
      }

      return React.createElement(
        'div',
        { className: '' + prefixCls },
        changeSelect,
        goInput
      );
    }
  }]);

  return Options;
})(React.Component);

Options.propTypes = {
  changeSize: React.PropTypes.func,
  quickGo: React.PropTypes.func,
  selectComponentClass: React.PropTypes.func,
  current: React.PropTypes.number,
  pageSizeOptions: React.PropTypes.arrayOf(React.PropTypes.string),
  pageSize: React.PropTypes.number,
  buildOptionText: React.PropTypes.func,
  locale: React.PropTypes.object
};

Options.defaultProps = {
  pageSizeOptions: ['10', '20', '30', '40']
};

module.exports = Options;