import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Layout from "./layout";

describe("<Layout />", function () {
  test("should render correctly", function () {
    var wrapper = mount(React.createElement(
      Layout,
      null,
      React.createElement(
        "div",
        null,
        "Content"
      )
    ));
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});