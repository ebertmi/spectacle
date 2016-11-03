var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from "react";
import { getStyles } from "../utils/base";
import Radium from "radium";

var Cite = Radium(_class = function (_Component) {
  _inherits(Cite, _Component);

  function Cite() {
    _classCallCheck(this, Cite);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Cite.prototype.render = function render() {
    return React.createElement(
      "cite",
      { className: this.props.className, style: [this.context.styles.components.cite, getStyles.call(this), this.props.style] },
      "- ",
      this.props.children
    );
  };

  return Cite;
}(Component)) || _class;

export { Cite as default };


Cite.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

Cite.contextTypes = {
  styles: PropTypes.object
};