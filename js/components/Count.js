'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _actionsCountActions = require('../actions/CountActions');

var _actionsCountActions2 = _interopRequireDefault(_actionsCountActions);

var _storesCountStore = require('../stores/CountStore');

var _storesCountStore2 = _interopRequireDefault(_storesCountStore);

function getCountState() {
  return _storesCountStore2['default'].read();
}

var Count = (function (_React$Component) {
  _inherits(Count, _React$Component);

  function Count(props) {
    _classCallCheck(this, Count);

    _get(Object.getPrototypeOf(Count.prototype), 'constructor', this).call(this, props);

    this.state = { counts: getCountState };
  }

  _createClass(Count, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      _storesCountStore2['default'].create(this._onChange.bind(this));
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      _storesCountStore2['default'].destory(this._onChange.bind(this));
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2['default'].createElement(
        'div',
        null,
        _react2['default'].createElement(
          'button',
          { onClick: _actionsCountActions2['default'].create },
          'model set'
        ),
        _react2['default'].createElement(
          'button',
          { onClick: this._countup.bind(this) },
          'countup'
        ),
        _react2['default'].createElement(
          'button',
          { onClick: _actionsCountActions2['default'].destroy },
          'model clear'
        ),
        _react2['default'].createElement(
          'p',
          null,
          'id: ',
          this.state.counts.id
        ),
        _react2['default'].createElement(
          'p',
          null,
          'count: ',
          this.state.counts.count
        )
      );
    }
  }, {
    key: '_countup',
    value: function _countup() {
      var id = this.state.counts.id;
      var count = this.state.counts.count;
      _actionsCountActions2['default'].update(id, count);
    }
  }, {
    key: '_onChange',
    value: function _onChange() {
      this.setState({ counts: getCountState() });
    }
  }]);

  return Count;
})(_react2['default'].Component);

exports['default'] = Count;
module.exports = exports['default'];