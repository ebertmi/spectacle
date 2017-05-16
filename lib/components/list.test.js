import List from "./list";
import React from "react";
import { shallow } from "enzyme";

describe("<List />", function () {
  it("creates an unordered list <ul> by default", function () {
    var context = { styles: { components: { list: {} } } };
    var wrapper = shallow(React.createElement(List, null), { context: context });
    expect(wrapper.type()).toBe("ul");
  });

  it("creates an ordered list <ol> when specified", function () {
    var context = { styles: { components: { list: {} } } };
    var wrapper = shallow(React.createElement(List, { ordered: true }), { context: context });
    expect(wrapper.type()).toBe("ol");
  });

  it("applies contextual styles to the rendered component", function () {
    var context = { styles: { components: { list: {
            background: "#fff",
            color: "#ff0"
          } } } };
    var wrapper = shallow(React.createElement(List, null), { context: context });
    expect(wrapper.prop("style")).toEqual(context.styles.components.list);
  });
});