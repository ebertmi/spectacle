import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Presenter from "./presenter";

var _mockRoute = function _mockRoute(slide) {
  return { params: [], slide: slide };
};

var _mockContext = function _mockContext() {
  return {
    store: {
      getState: function getState() {
        return { route: "" };
      }
    }
  };
};

var _mockSlides = function _mockSlides() {
  var Slide = function Slide() {
    return React.createElement(
      "div",
      null,
      "Slide Content"
    );
  };
  return [React.createElement(Slide, { key: 0 }), React.createElement(Slide, { key: 1 }), React.createElement(Slide, { key: 2 })];
};

var _mockSlidesWithNotes = function _mockSlidesWithNotes() {
  var notes = "These are my slide notes!!";
  var Slide = function Slide() {
    return React.createElement(
      "div",
      null,
      "Slide Content"
    );
  };
  return [React.createElement(Slide, { key: 0 }), React.createElement(Slide, { key: 1, notes: notes }), React.createElement(Slide, { key: 2 })];
};

var mockDateFn = jest.fn();
mockDateFn.mockReturnValue("November 07, 2016 11:04:08");

var _mockSlideReference = function _mockSlideReference() {
  return [{ id: 0, rootIndex: 0 }, { id: 1, rootIndex: 1 }, { id: 2, rootIndex: 2 }];
};

describe("<Presenter />", function () {
  beforeAll(function () {
    global.Date.now = mockDateFn;
  });

  test("should render correctly", function () {
    var wrapper = mount(React.createElement(Presenter, {
      dispatch: function dispatch() {},
      slides: _mockSlides(),
      slideIndex: 1,
      slideReference: _mockSlideReference(),
      hash: 1,
      route: _mockRoute(1),
      lastSlide: 0
    }), { context: _mockContext() });

    wrapper.instance().componentWillMount = jest.fn();
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render with notes when slides have them.", function () {
    var wrapper = mount(React.createElement(Presenter, {
      dispatch: function dispatch() {},
      slides: _mockSlidesWithNotes(),
      slideIndex: 1,
      slideReference: _mockSlideReference(),
      hash: 1,
      route: _mockRoute(1),
      lastSlide: 0
    }), { context: _mockContext() });

    wrapper.instance().componentWillMount = jest.fn();
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should render timer when set in params.", function () {
    var wrapper = mount(React.createElement(Presenter, {
      dispatch: function dispatch() {},
      slides: _mockSlidesWithNotes(),
      slideIndex: 1,
      slideReference: _mockSlideReference(),
      hash: 1,
      route: _mockRoute(1),
      lastSlide: 0,
      timer: true
    }), { context: _mockContext() });
    wrapper.instance().componentWillMount = jest.fn();
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });
});