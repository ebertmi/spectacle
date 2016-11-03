var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from "react";
import Radium from "radium";

var Fill = Radium(_class = function (_Component) {
  _inherits(Fill, _Component);

  function Fill() {
    _classCallCheck(this, Fill);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Fill.prototype.render = function render() {
    var styles = {
      flex: 1
    };
    return React.createElement(
      "div",
      { className: this.props.className, style: [styles, this.props.style] },
      this.props.children
    );
  };

  return Fill;
}(Component)) || _class;

export { Fill as default };


Fill.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};