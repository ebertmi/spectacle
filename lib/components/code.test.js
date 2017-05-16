import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Code from "./code";

describe("<Code />", function () {
  test("should render correctly.", function () {
    var context = { styles: { components: { code: { fontWeight: 500 } } } };
    var wrapper = mount(React.createElement(
      Code,
      null,
      "const [a, ...b] = [1, 2, 3, 4]"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});