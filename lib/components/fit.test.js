import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import { Fit } from "./fit";

describe("<Fit />", function () {
  test("should render with style `flex: 0`", function () {
    var wrapper = mount(React.createElement(
      Fit,
      null,
      "Hello"
    ));
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});