'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactAddons = require('react/addons');

var _reactAddons2 = _interopRequireDefault(_reactAddons);

var _distBuildJs = require('../../dist/build.js');

var _distBuildJs2 = _interopRequireDefault(_distBuildJs);

var TestUtils = _reactAddons2['default'].addons.TestUtils;

describe("Hello World", function () {
  it("should render the component", function () {

    var hello = TestUtils.renderIntoDocument(_reactAddons2['default'].createElement('body', null));

    var content = _reactAddons2['default'].findDOMNode(hello).textContent;

    expect(content).toContain("Hello World");
  });
});