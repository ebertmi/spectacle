var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Typeface from "./typeface";

var MockComponent = (_temp = _class = function (_Component) {
  _inherits(MockComponent, _Component);

  function MockComponent() {
    _classCallCheck(this, MockComponent);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  MockComponent.prototype.render = function render() {
    return React.createElement(
      "div",
      {
        style: this.context.typeface
      },
      this.props.children
    );
  };

  return MockComponent;
}(Component), _class.propTypes = {
  children: PropTypes.node
}, _class.contextTypes = {
  typeface: PropTypes.object
}, _temp);


describe("<Typeface />", function () {
  test("should render the children when using a system font.", function () {
    var wrapper = mount(React.createElement(
      Typeface,
      {
        font: "SF UI Text",
        weight: 400
      },
      React.createElement(
        MockComponent,
        null,
        "Hello!"
      )
    ));
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render the children when using a Google font.", function () {
    var wrapper = mount(React.createElement(
      Typeface,
      {
        googleFont: "Roboto Slab",
        weight: 700,
        italic: true
      },
      React.createElement(
        MockComponent,
        null,
        "Hello!"
      )
    ));
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});