import React from "react";
import { render, shallow } from "enzyme";
import { renderToJson } from "enzyme-to-json";
import ComponentPlayground from "./component-playground";

describe("<ComponentPlayground />", function () {
  test("Should render the dark theme correctly", function () {
    var wrapper = render(React.createElement(ComponentPlayground, {
      theme: "dark"
    }));
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  test("Should render the light theme correctly", function () {
    var wrapper = render(React.createElement(ComponentPlayground, {
      theme: "light"
    }));
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  test("Should render with a custom background color", function () {
    var wrapper = render(React.createElement(ComponentPlayground, {
      theme: "light",
      previewBackgroundColor: "#ff0"
    }));
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  test("Should render with a custom code block", function () {
    var code = "\n      const Button = ({ title }) => (<button type=\"button\">{ title }</button>);\n      render(<Button title=\"My Button\" />, mountNode);\n    ";
    var wrapper = render(React.createElement(ComponentPlayground, {
      theme: "light",
      code: code,
      previewBackgroundColor: "#ff0"
    }));
    expect(renderToJson(wrapper)).toMatchSnapshot();
  });

  test("Should render custom scoped components", function () {
    var NewComponent = function NewComponent() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Hi!"
        )
      );
    };
    var wrapper = shallow(React.createElement(ComponentPlayground, {
      scope: { NewComponent: NewComponent }
    }));

    var scope = wrapper.find("ReactPlayground").prop("scope");
    expect(scope.NewComponent).toEqual(NewComponent);
  });
});