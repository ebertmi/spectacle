import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Link from "./link";

describe("<Link />", function () {
  test("should render correctly", function () {
    var context = { styles: { components: { link: { color: "#345" } } } };
    var wrapper = mount(React.createElement(
      Link,
      {
        href: "https://www.formidable.com",
        target: "_blank"
      },
      "Formidable Labs"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});