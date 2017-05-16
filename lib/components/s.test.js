import S from "./s";
import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";

describe("<S />", function () {
  test("should underline text when specified", function () {
    var context = { styles: { components: { s: {
            strikethrough: { color: "#ff0" }
          } } } };
    var wrapper = mount(React.createElement(
      S,
      { type: "strikethrough" },
      "Don\u2019t read this!"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should bold text when specified", function () {
    var context = { styles: { components: { s: {
            bold: { color: "#ff0" }
          } } } };
    var wrapper = mount(React.createElement(
      S,
      { type: "bold" },
      "You should read this!"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should underline text when specified", function () {
    var context = { styles: { components: { s: {
            underline: { color: "#ff0" }
          } } } };
    var wrapper = mount(React.createElement(
      S,
      { type: "underline" },
      "This text is underlined!"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should italicize text when specified", function () {
    var context = { styles: { components: { s: {
            italic: { color: "#ff0" }
          } } } };
    var wrapper = mount(React.createElement(
      S,
      { type: "italic" },
      "This text is italicized!"
    ), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});