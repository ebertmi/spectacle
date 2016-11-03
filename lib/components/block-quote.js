var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from "react";
import { getStyles } from "../utils/base";
import Radium from "radium";

var BlockQuote = Radium(_class = function (_Component) {
  _inherits(BlockQuote, _Component);

  function BlockQuote() {
    _classCallCheck(this, BlockQuote);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  BlockQuote.prototype.render = function render() {
    return React.createElement(
      "blockquote",
      { className: this.props.className, style: [this.context.styles.components.blockquote, getStyles.call(this), this.props.style] },
      this.props.children
    );
  };

  return BlockQuote;
}(Component)) || _class;

export { BlockQuote as default };


BlockQuote.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

BlockQuote.contextTypes = {
  styles: PropTypes.object
};