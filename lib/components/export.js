var _class;

var _templateObject = _taggedTemplateLiteralLoose(["\n  height: 100%;\n  width: 100%;\n"], ["\n  height: 100%;\n  width: 100%;\n"]);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteralLoose(strings, raw) { strings.raw = raw; return strings; }

import React, { cloneElement, Component } from "react";
import PropTypes from "prop-types";
import Radium from "radium";
import { getSlideByIndex } from "../utils/slides";
import styled from "styled-components";

var SpectacleExport = styled.div(_templateObject);

var Export = Radium(_class = function (_Component) {
  _inherits(Export, _Component);

  function Export() {
    _classCallCheck(this, Export);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Export.prototype._renderSlides = function _renderSlides() {
    var _this2 = this;

    return this.props.slideReference.map(function (reference, index) {
      var slide = getSlideByIndex(_this2.props.slides, _this2.props.slideReference, index);
      return cloneElement(slide, {
        key: index,
        slideIndex: index,
        export: _this2.props.route.params.indexOf("export") !== -1,
        print: _this2.props.route.params.indexOf("print") !== -1,
        transition: [],
        transitionDuration: 0
      });
    });
  };

  Export.prototype.render = function render() {
    return React.createElement(
      SpectacleExport,
      null,
      this._renderSlides()
    );
  };

  return Export;
}(Component)) || _class;

export { Export as default };


Export.propTypes = {
  route: PropTypes.object,
  slideReference: PropTypes.array,
  slides: PropTypes.array
};

Export.contextTypes = {
  styles: PropTypes.object
};