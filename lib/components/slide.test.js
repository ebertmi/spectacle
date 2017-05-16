import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Slide from "./slide";

var _mockContext = function _mockContext() {
  return {
    styles: {
      global: {
        body: {
          background: "#eee"
        }
      },
      components: {
        content: {}
      }
    },
    store: {
      getState: function getState() {
        return { route: "" };
      }
    }
  };
};

describe("<Slide />", function () {
  test("should render correctly without transitions.", function () {
    window.watchMedia = jest.fn();
    window.matchMedia = jest.fn().mockReturnValue({ matches: [] });
    var wrapper = mount(React.createElement(
      Slide,
      null,
      React.createElement(
        "div",
        null,
        "Slide Content"
      )
    ), { context: _mockContext() });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render correctly with transitions.", function () {
    window.watchMedia = jest.fn();
    window.matchMedia = jest.fn().mockReturnValue({ matches: [] });

    var wrapper = mount(React.createElement(
      Slide,
      { transition: ["slide", "spin"] },
      React.createElement(
        "div",
        null,
        "Slide Content"
      )
    ), { context: _mockContext() });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});