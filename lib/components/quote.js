var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import { getStyles } from "../utils/base";
import Radium from "radium";

var Quote = Radium(_class = function (_Component) {
  _inherits(Quote, _Component);

  function Quote() {
    _classCallCheck(this, Quote);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Quote.prototype.render = function render() {
    var typefaceStyle = this.context.typeface || {};
    return React.createElement(
      "span",
      { className: this.props.className, style: [this.context.styles.components.quote, getStyles.call(this), this.props.style, typefaceStyle] },
      this.props.children
    );
  };

  return Quote;
}(Component)) || _class;

export { Quote as default };


Quote.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Quote.contextTypes = {
  styles: PropTypes.object,
  store: PropTypes.object,
  typeface: PropTypes.object
};