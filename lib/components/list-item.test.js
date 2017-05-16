import ListItem from "./list-item";
import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";

describe("<ListItem />", function () {
  test("should render correctly", function () {
    var context = { styles: { components: { listItem: {
            color: "#ff0"
          } } } };
    var wrapper = mount(React.createElement(
      ListItem,
      null,
      "Dog"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});