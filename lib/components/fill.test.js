import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import { Fill } from "./fill";

describe("<Fill />", function () {
  test("should render with style `flex: 1`", function () {
    var wrapper = mount(React.createElement(
      Fill,
      null,
      "Spectacle"
    ));
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});