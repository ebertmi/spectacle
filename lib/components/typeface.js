function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import { GoogleFont } from "react-typography";

var Typeface = function (_Component) {
  _inherits(Typeface, _Component);

  function Typeface() {
    _classCallCheck(this, Typeface);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Typeface.prototype.getChildContext = function getChildContext() {
    return {
      typeface: {
        fontFamily: this.props.googleFont || this.props.font || "",
        fontWeight: this.props.weight,
        fontStyle: this.props.italic ? "italic" : "normal"
      }
    };
  };

  Typeface.prototype.render = function render() {
    var _props = this.props,
        children = _props.children,
        googleFont = _props.googleFont,
        _props$weight = _props.weight,
        weight = _props$weight === undefined ? 400 : _props$weight,
        _props$italic = _props.italic,
        italic = _props$italic === undefined ? false : _props$italic,
        styles = _props.styles;

    if (typeof googleFont !== "undefined" && googleFont.length > 0) {
      var styleSuffix = italic ? "i" : "";
      var config = {
        title: "" + googleFont,
        options: {
          googleFonts: [{
            name: googleFont,
            styles: styles || ["" + weight + styleSuffix]
          }]
        }
      };
      return React.createElement(
        "div",
        null,
        React.createElement(GoogleFont, { typography: config }),
        children
      );
    } else {
      return React.createElement(
        "div",
        null,
        children
      );
    }
  };

  return Typeface;
}(Component);

Typeface.propTypes = {
  children: PropTypes.node,
  font: PropTypes.string,
  googleFont: PropTypes.string,
  italic: PropTypes.bool,
  styles: PropTypes.array,
  weight: PropTypes.number
};

Typeface.childContextTypes = {
  typeface: PropTypes.object
};

export default Typeface;