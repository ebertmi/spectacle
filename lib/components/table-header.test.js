import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import TableHeader from "./table-header";

describe("<TableHeader />", function () {
  test("should render correctly", function () {
    var wrapper = mount(React.createElement(
      TableHeader,
      null,
      React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          null,
          "Table Content"
        )
      )
    ));
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});