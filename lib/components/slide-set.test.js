function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import SlideSet from "./slide-set";

var _mockContext = function _mockContext() {
  return {};
};

var MockSlide = function (_Component) {
  _inherits(MockSlide, _Component);

  function MockSlide() {
    _classCallCheck(this, MockSlide);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  MockSlide.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      "Slide Content"
    );
  };

  return MockSlide;
}(Component);

describe("<SlideSet />", function () {
  test("should render correctly", function () {
    var wrapper = mount(React.createElement(
      SlideSet,
      null,
      React.createElement(MockSlide, null),
      React.createElement(MockSlide, null)
    ), { context: _mockContext() });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});