var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _templateObject = _taggedTemplateLiteralLoose(["\n  background: ", ";\n  border-radius: 0 0 6px 6px;\n  height: 100%;\n  width: 100%;\n"], ["\n  background: ", ";\n  border-radius: 0 0 6px 6px;\n  height: 100%;\n  width: 100%;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import { render } from "react-dom";
import Playground from "component-playground";
import styled from "styled-components";
import "../themes/default/playground.css";
import "../themes/default/codemirror.css";
import { defaultCode } from "../utils/playground.default-code";

var ComponentPlaygroundContainer = styled.div(_templateObject, function (props) {
  return props.previewBackgroundColor || "#fff";
});

var ComponentPlayground = function ComponentPlayground(_ref) {
  var code = _ref.code,
      previewBackgroundColor = _ref.previewBackgroundColor,
      _ref$scope = _ref.scope,
      scope = _ref$scope === undefined ? {} : _ref$scope,
      _ref$theme = _ref.theme,
      theme = _ref$theme === undefined ? "dark" : _ref$theme;

  var useDarkTheme = theme === "dark";

  if (useDarkTheme) {
    require("../themes/default/dark.codemirror.css");
  } else {
    require("../themes/default/light.codemirror.css");
  }

  return React.createElement(
    ComponentPlaygroundContainer,
    {
      className: "theme-" + theme,
      previewBackgroundColor: previewBackgroundColor
    },
    React.createElement(Playground, {
      codeText: (code || defaultCode).trim(),
      scope: _extends({ React: React, Component: Component, render: render }, scope),
      noRender: false,
      theme: useDarkTheme ? "material" : "elegant"
    })
  );
};

ComponentPlayground.propTypes = {
  code: PropTypes.string,
  previewBackgroundColor: PropTypes.string,
  scope: PropTypes.object,
  theme: PropTypes.string
};

export default ComponentPlayground;