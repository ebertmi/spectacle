import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Cite from "./cite";

describe("<Cite />", function () {
  test("should render correctly.", function () {
    var context = { styles: { components: { cite: { color: "#ee0" } } } };
    var wrapper = mount(React.createElement(
      Cite,
      null,
      "Someone"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});