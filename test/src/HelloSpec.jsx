import React from 'react/addons'
import Hello from '../../dist/build.js'

var TestUtils = React.addons.TestUtils;

describe("Hello World", () => {
  it("should render the component", () => {

    let hello = TestUtils.renderIntoDocument(<body/>);

    let content = React.findDOMNode(hello).textContent;

    expect(content).toContain("Hello World");
  });
});
