import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Heading from "./heading";

describe("<Heading />", function () {
  test("should render correctly.", function () {
    var context = { styles: { components: { heading: { h2: {
              color: "#ff0"
            } } } } };
    var wrapper = mount(React.createElement(
      Heading,
      { size: 2 },
      "Hi There!"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render the fit configuration correctly.", function () {
    var context = { styles: { components: { heading: {} } } };
    var wrapper = mount(React.createElement(
      Heading,
      { fit: true },
      "This Header Fits!"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});