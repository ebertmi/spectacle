import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import TableRow from "./table-row";

describe("<TableRow />", function () {
  test("should render correctly", function () {
    var context = { styles: { components: { tableRow: {
            color: "#00f"
          } } } };
    var wrapper = mount(React.createElement(
      TableRow,
      null,
      React.createElement(
        "td",
        null,
        "Table Row Content"
      )
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});