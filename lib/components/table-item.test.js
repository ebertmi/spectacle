import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import TableItem from "./table-item";

describe("<TableItem />", function () {
  test("should render correctly", function () {
    var context = { styles: { components: { tableItem: {
            color: "#444"
          } } } };
    var wrapper = mount(React.createElement(
      TableItem,
      null,
      "Table Item Content"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});