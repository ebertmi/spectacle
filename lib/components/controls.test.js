import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Controls from "./controls";

describe("<Controls />", function () {
  test("should render correctly.", function () {
    var context = { styles: { controls: {
          prev: { background: "#f00" },
          next: { background: "#f0f" }
        } } };
    var wrapper = mount(React.createElement(Controls, {
      currentSlideIndex: 2,
      totalSlides: 5,
      onPrev: function onPrev() {},
      onNext: function onNext() {}
    }), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should call the next function when the next button is selected", function () {
    var context = { styles: { controls: {} } };
    var nextFunc = jest.fn();
    var wrapper = mount(React.createElement(Controls, {
      currentSlideIndex: 2,
      totalSlides: 5,
      onPrev: function onPrev() {},
      onNext: nextFunc
    }), { context: context });
    wrapper.findWhere(function (node) {
      return node.name() === "button" && node.key() === ".$next";
    }).simulate("click");
    expect(nextFunc).toHaveBeenCalledTimes(1);
  });

  test("should call the prev function when the previous button is selected", function () {
    var context = { styles: { controls: {} } };
    var prevFunc = jest.fn();
    var wrapper = mount(React.createElement(Controls, {
      currentSlideIndex: 3,
      totalSlides: 5,
      onPrev: prevFunc,
      onNext: function onNext() {}
    }), { context: context });
    wrapper.findWhere(function (node) {
      return node.name() === "button" && node.key() === ".$prev";
    }).simulate("click");
    expect(prevFunc).toHaveBeenCalledTimes(1);
  });
});