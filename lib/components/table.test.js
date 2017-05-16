import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Table from "./table";

describe("<Table />", function () {
  test("should render correctly", function () {
    var context = { styles: { components: { table: {} } } };
    var wrapper = mount(React.createElement(
      Table,
      null,
      React.createElement(
        "tbody",
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
      )
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});