import React from "react";
import { countSlides } from "./slides";

describe("slides", function () {
  describe("countSlides", function () {
    test("should count standard slides", function () {
      var children = [React.createElement("div", { key: 0 }), React.createElement("div", { key: 1 })];
      expect(countSlides(children)).toBe(2);
    });

    test("should count slide sets", function () {
      var children = [React.createElement("div", { key: 0 }), React.createElement(
        "div",
        { key: 1, hasSlideChildren: true },
        React.createElement("div", { key: 0 }),
        React.createElement("div", { key: 1 })
      )];
      expect(countSlides(children)).toBe(3);
    });
  });
});