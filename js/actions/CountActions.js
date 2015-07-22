'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _dispathcerCountDispatcher = require('../dispathcer/CountDispatcher');

var _dispathcerCountDispatcher2 = _interopRequireDefault(_dispathcerCountDispatcher);

var _constantsCountConstants = require('../constants/CountConstants');

var _constantsCountConstants2 = _interopRequireDefault(_constantsCountConstants);

exports['default'] = {
  create: function create() {
    _dispathcerCountDispatcher2['default'].dispatch({
      actionType: _constantsCountConstants2['default'].CREATE
    });
  },

  update: function update(id, count) {
    _dispathcerCountDispatcher2['default'].dispatch({
      actionType: _constantsCountConstants2['default'].UPDATE,
      id: id,
      count: count
    });
  },

  destroy: function destroy() {
    _dispathcerCountDispatcher2['default'].dispatch({
      actionType: _constantsCountConstants2['default'].DESTROY
    });
  }
};
module.exports = exports['default'];