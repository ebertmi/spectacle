var _templateObject = _taggedTemplateLiteralLoose(["\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  float: right;\n  margin: 0;\n  line-height: 1;\n  display: inline-block;\n  font-size: 28px;\n"], ["\n  position: relative;\n  top: 50%;\n  transform: translateY(-50%);\n  float: right;\n  margin: 0;\n  line-height: 1;\n  display: inline-block;\n  font-size: 28px;\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  padding: 20px 0;\n"], ["\n  padding: 20px 0;\n"]),
    _templateObject3 = _taggedTemplateLiteralLoose(["\n  position: relative;\n  float: right;\n  padding-right: 20px;\n  -webkit-transform: translateY(-45%);\n  font-size: 20.088px;\n"], ["\n  position: relative;\n  float: right;\n  padding-right: 20px;\n  -webkit-transform: translateY(-45%);\n  font-size: 20.088px;\n"]),
    _templateObject4 = _taggedTemplateLiteralLoose(["\n  from { \n    opacity:0; \n  } \n  to { \n    opacity:1; \n  }\n"], ["\n  from { \n    opacity:0; \n  } \n  to { \n    opacity:1; \n  }\n"]),
    _templateObject5 = _taggedTemplateLiteralLoose(["{\n  from {\n    opacity: 1;\n    transform-origin: 50% 50%;\n    transform: scale(1,1);\n    filter: blur(0px);\n  }\n\n  to {\n    opacity: 0;\n    transform-origin: 50% 50%;\n    transform: scale(2,2);\n    filter: blur(2px);\n  }\n}"], ["{\n  from {\n    opacity: 1;\n    transform-origin: 50% 50%;\n    transform: scale(1,1);\n    filter: blur(0px);\n  }\n\n  to {\n    opacity: 0;\n    transform-origin: 50% 50%;\n    transform: scale(2,2);\n    filter: blur(2px);\n  }\n}"]),
    _templateObject6 = _taggedTemplateLiteralLoose(["\n  width: 68px;\n  font-size: 1em;\n  margin: 3px;\n  border: 0;\n  border-radius: 15px;\n  background: ", ";\n    \n  &:focus{\n    outline:0px;\n  }\n  &:active {\n    animation: ", " 0.5s;\n  }\n\n  opacity: 0;  /* make things invisible upon start */\n  animation: ", " ease-in 1;\n  animation-fill-mode:forwards;\n  animation-duration:0.5s;\n  animation-delay: 0s;\n"], ["\n  width: 68px;\n  font-size: 1em;\n  margin: 3px;\n  border: 0;\n  border-radius: 15px;\n  background: ", ";\n    \n  &:focus{\n    outline:0px;\n  }\n  &:active {\n    animation: ", " 0.5s;\n  }\n\n  opacity: 0;  /* make things invisible upon start */\n  animation: ", " ease-in 1;\n  animation-fill-mode:forwards;\n  animation-duration:0.5s;\n  animation-delay: 0s;\n"]);

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import styled, { keyframes } from "styled-components";

export var Clock = styled.h2(_templateObject);

export var TimeContainer = styled.div(_templateObject2);

export var TButtonContainer = styled.div(_templateObject3);

var fadeIn = keyframes(_templateObject4);

var vanishOut = keyframes(_templateObject5);

export var TSingleButton = styled.button(_templateObject6, function (props) {
  if (props.stop) {
    return "#e23d3d";
  } else if (props.start) {
    return "#42a53c";
  } else {
    return "#darkgrey";
  }
}, vanishOut, fadeIn);