import Progress from "./progress";
import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";

var _mockSlideIndexReference = function _mockSlideIndexReference() {
  return [{ id: 0 }, { id: 1 }, { id: "last" }];
};

describe("<Progress />", function () {
  test("should render PacMan correctly", function () {
    var context = { styles: { progress: { pacman: [] } } };
    var wrapper = mount(React.createElement(Progress, {
      type: "pacman",
      items: _mockSlideIndexReference(),
      currentSlideIndex: 2
    }), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render the number style correctly", function () {
    var context = { styles: { progress: { number: [] } } };
    var wrapper = mount(React.createElement(Progress, {
      type: "number",
      items: _mockSlideIndexReference(),
      currentSlideIndex: 1
    }), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render the bar style correctly", function () {
    var context = { styles: { progress: { bar: [] } } };
    var wrapper = mount(React.createElement(Progress, {
      type: "bar",
      items: _mockSlideIndexReference(),
      currentSlideIndex: 1
    }), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render nothing when none is provided.", function () {
    var context = { styles: { progress: {} } };
    var wrapper = mount(React.createElement(Progress, {
      type: "none",
      items: _mockSlideIndexReference(),
      currentSlideIndex: 3
    }), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});