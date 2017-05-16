import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import TableBody from "./table-header";

describe("<TableBody />", function () {
  test("should render correctly", function () {
    var wrapper = mount(React.createElement(
      TableBody,
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          "Table Content"
        )
      )
    ));
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});