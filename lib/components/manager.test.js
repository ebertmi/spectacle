function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Manager from "./manager";

var _mockContext = function _mockContext(slide, routeParams) {
  return {
    styles: {
      global: {
        body: []
      },
      controls: {},
      progress: {
        pacman: []
      }
    },
    store: {
      getState: function getState() {
        return {
          route: {
            params: routeParams,
            slide: slide
          },
          style: {
            globalStyleSet: []
          }
        };
      },
      dispatch: function dispatch() {},
      subscribe: function subscribe() {}
    }
  };
};

var MockSlide = function (_Component) {
  _inherits(MockSlide, _Component);

  function MockSlide() {
    _classCallCheck(this, MockSlide);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  MockSlide.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      "Slide Content"
    );
  };

  return MockSlide;
}(Component);

var MockSlideSet = function (_Component2) {
  _inherits(MockSlideSet, _Component2);

  function MockSlideSet() {
    _classCallCheck(this, MockSlideSet);

    return _possibleConstructorReturn(this, _Component2.apply(this, arguments));
  }

  MockSlideSet.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      this.props.children
    );
  };

  return MockSlideSet;
}(Component);

MockSlideSet.defaultProps = {
  hasSlideChildren: true
};
MockSlideSet.propTypes = {
  children: PropTypes.array,
  hasSlideChildren: PropTypes.bool
};

var _mockChildContext = function _mockChildContext() {
  return { styles: function styles() {} };
};

describe("<Manager />", function () {
  test("should render correctly.", function () {
    var wrapper = mount(React.createElement(
      Manager,
      { transition: ["zoom", "slide"], transitionDuration: 500 },
      React.createElement(MockSlide, null),
      React.createElement(MockSlide, null)
    ), { context: _mockContext(0, []), childContextTypes: _mockChildContext() });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render the export configuration when specified.", function () {
    var wrapper = mount(React.createElement(
      Manager,
      null,
      React.createElement(MockSlide, null),
      React.createElement(MockSlide, null)
    ), { context: _mockContext(0, ["export"]), childContextTypes: _mockChildContext() });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render the overview configuration when specified.", function () {
    var wrapper = mount(React.createElement(
      Manager,
      null,
      React.createElement(MockSlide, null),
      React.createElement(MockSlide, null)
    ), { context: _mockContext(0, ["overview"]), childContextTypes: _mockChildContext() });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render with slideset slides", function () {
    var wrapper = mount(React.createElement(
      Manager,
      null,
      React.createElement(MockSlide, null),
      React.createElement(
        MockSlideSet,
        null,
        React.createElement(MockSlide, null),
        React.createElement(MockSlide, null)
      )
    ), { context: _mockContext(1, []), childContextTypes: _mockChildContext() });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});