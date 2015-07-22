'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

var _events = require('events');

var _dispathcerCountDispatcher = require('../dispathcer/CountDispatcher');

var _dispathcerCountDispatcher2 = _interopRequireDefault(_dispathcerCountDispatcher);

var _constantsCountConstants = require('../constants/CountConstants');

var _constantsCountConstants2 = _interopRequireDefault(_constantsCountConstants);

var CHANGE_EVENT = 'change';

var _counts = {};

function create() {
  var id = (Math.random() * 999999 | 0).toString(36);
  _counts = { id: id, count: 1 };
}

function update(id, updates) {
  _counts = { id: id, count: updates };
}

function destroy() {
  _counts = {};
}

var CountStore = (function (_EventEmitter) {
  _inherits(CountStore, _EventEmitter);

  function CountStore() {
    _classCallCheck(this, CountStore);

    _get(Object.getPrototypeOf(CountStore.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(CountStore, [{
    key: 'create',
    value: function create(callback) {
      this.on(CHANGE_EVENT, callback);
    }
  }, {
    key: 'read',
    value: function read() {
      return _counts;
    }
  }, {
    key: 'update',
    value: function update() {
      this.emit(CHANGE_EVENT);
    }
  }, {
    key: 'destroy',
    value: function destroy(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  }]);

  return CountStore;
})(_events.EventEmitter);

_dispathcerCountDispatcher2['default'].register(function (action) {
  switch (action.actionType) {
    case _constantsCountConstants2['default'].CREATE:
      create();
      countStore.update();
      break;

    case _constantsCountConstants2['default'].UPDATE:
      update(action.id, action.count + 1);
      countStore.update();
      break;

    case _constantsCountConstants2['default'].DESTROY:
      destroy();
      countStore.update();
      break;

    default:
    // no OP
  }
});

var countStore = new CountStore();
exports['default'] = countStore;
module.exports = exports['default'];