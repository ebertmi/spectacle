import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import BlockQuote from "./block-quote";

describe("<BlockQuote />", function () {
  test("should render correctly.", function () {
    var context = { styles: { components: { blockquote: { fontStyle: "oblique" } } } };
    var wrapper = mount(React.createElement(
      BlockQuote,
      null,
      "Some Quote"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});