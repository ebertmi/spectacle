var _templateObject = _taggedTemplateLiteralLoose(["\n  height: 100%;\n  overflow: scroll;\n  width: 100%;\n"], ["\n  height: 100%;\n  overflow: scroll;\n  width: 100%;\n"]),
    _templateObject2 = _taggedTemplateLiteralLoose(["\n  cursor: pointer;\n  position: relative;\n  float: left;\n  height: ", "px;\n  opacity: ", ";\n  transition: opacity 333ms ease-in-out;\n  width: ", "px;\n\n  &:hover {\n    opacity: 1;\n  }\n"], ["\n  cursor: pointer;\n  position: relative;\n  float: left;\n  height: ", "px;\n  opacity: ", ";\n  transition: opacity 333ms ease-in-out;\n  width: ", "px;\n\n  &:hover {\n    opacity: 1;\n  }\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { cloneElement, Component } from "react";
import PropTypes from "prop-types";
import { getSlideByIndex } from "../utils/slides";
import styled from "styled-components";

var OverviewContainer = styled.div(_templateObject);

var SlideThumbnail = styled.div(_templateObject2, function (_ref) {
  var screen = _ref.screen;
  return screen / 3 * 0.7;
}, function (_ref2) {
  var index = _ref2.index,
      slideIndex = _ref2.slideIndex;
  return index === slideIndex ? 1 : 0.5;
}, function (_ref3) {
  var screen = _ref3.screen;
  return screen / 3;
});

var Overview = function (_Component) {
  _inherits(Overview, _Component);

  function Overview(props) {
    _classCallCheck(this, Overview);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      overviewWidth: document.documentElement.clientWidth
    };
    _this.resizeHandler = _this.resizeHandler.bind(_this);
    return _this;
  }

  Overview.prototype.componentDidMount = function componentDidMount() {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);
  };

  Overview.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  };

  Overview.prototype._slideClicked = function _slideClicked(index) {
    this.context.history.replace("/" + this._getHash(index));
  };

  Overview.prototype._getHash = function _getHash(slideIndex) {
    return this.props.slideReference[slideIndex].id;
  };

  Overview.prototype._renderSlides = function _renderSlides() {
    var _this2 = this;

    var slideIndex = this.props.slideIndex;
    var screen = this.state.overviewWidth;
    return this.props.slideReference.map(function (reference, index) {
      var slide = getSlideByIndex(_this2.props.slides, _this2.props.slideReference, index);
      var el = cloneElement(slide, {
        key: index,
        slideIndex: index,
        export: _this2.props.route.params.indexOf("export") !== -1,
        print: _this2.props.route.params.indexOf("print") !== -1,
        transition: [],
        transitionDuration: 0,
        appearOff: true
      });
      return React.createElement(
        SlideThumbnail,
        {
          index: index,
          screen: screen,
          slideIndex: slideIndex,
          key: index,
          onClick: _this2._slideClicked.bind(_this2, index)
        },
        el
      );
    });
  };

  Overview.prototype.resizeHandler = function resizeHandler() {
    this.setState({
      overviewWidth: document.documentElement.clientWidth
    });
  };

  Overview.prototype.render = function render() {
    return React.createElement(
      OverviewContainer,
      null,
      this._renderSlides()
    );
  };

  return Overview;
}(Component);

export { Overview as default };


Overview.propTypes = {
  route: PropTypes.object,
  slideIndex: PropTypes.number,
  slideReference: PropTypes.array,
  slides: PropTypes.array
};

Overview.contextTypes = {
  styles: PropTypes.object,
  history: PropTypes.object
};