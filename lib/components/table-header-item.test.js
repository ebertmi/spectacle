import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import TableHeaderItem from "./table-header-item";

describe("<TableHeaderItem />", function () {
  test("should render correctly", function () {
    var context = { styles: { components: { tableHeaderItem: {
            color: "#e01"
          } } } };
    var wrapper = mount(React.createElement(
      TableHeaderItem,
      null,
      "Header Text"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});