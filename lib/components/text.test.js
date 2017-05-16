import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Text from "./text";

describe("<Text />", function () {
  it("should render a <p> with text for the default configuration.", function () {
    var context = { styles: { components: { text: { color: "#000" } } } };
    var wrapper = mount(React.createElement(
      Text,
      null,
      "Spectacle!"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  it("should render a <div> with text for the `fit` configuration.", function () {
    var context = { styles: { components: { text: { color: "#000" } } } };
    var wrapper = mount(React.createElement(
      Text,
      { fit: true },
      "Spectacle Full Size!"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});