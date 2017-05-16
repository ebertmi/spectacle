import Quote from "./quote";
import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";

describe("<Quote />", function () {
  test("should render correctly", function () {
    var context = { styles: { components: { quote: {
            color: "#ff0"
          } } } };
    var wrapper = mount(React.createElement(
      Quote,
      null,
      "Hello There!"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});