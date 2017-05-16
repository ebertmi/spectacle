import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import CodePane from "./code-pane";

describe("<CodePane />", function () {
  test("should render correctly.", function () {
    var context = { styles: { components: { codePane: { pre: {} } } } };
    var source = "\n      const myButton = (\n        <CustomButton\n          style={{ background: '#f00' }}\n          onClick={this.action}\n        >\n         Click Me\n        </CustomButton>\n      );\n    ";
    var wrapper = mount(React.createElement(CodePane, {
      lang: "jsx",
      source: source
    }), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});