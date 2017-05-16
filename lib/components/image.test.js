import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Image from "./image";

describe("<Image />", function () {
  test("should render correctly.", function () {
    var context = { styles: { components: { image: {} } } };
    var wrapper = mount(React.createElement(Image, {
      src: "foo.png",
      display: "inline-block",
      width: 2560,
      height: 1440
    }), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});