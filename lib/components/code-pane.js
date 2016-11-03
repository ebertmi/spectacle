var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from "react";
import { getStyles } from "../utils/base";
import Radium from "radium";
import isUndefined from "lodash/isUndefined";

var format = function format(str) {
  return str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
};

var CodePane = Radium(_class = function (_Component) {
  _inherits(CodePane, _Component);

  function CodePane() {
    _classCallCheck(this, CodePane);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  CodePane.prototype.componentDidMount = function componentDidMount() {
    return window.Prism && window.Prism.highlightAll();
  };

  CodePane.prototype.createMarkup = function createMarkup() {
    var _props = this.props,
        source = _props.source,
        children = _props.children;

    var code = isUndefined(source) || source === "" ? children : source;
    return {
      __html: format(code)
    };
  };

  CodePane.prototype.render = function render() {
    return React.createElement(
      "pre",
      { className: this.props.className, style: [this.context.styles.components.codePane.pre, getStyles.call(this), this.props.style] },
      React.createElement("code", {
        className: "language-" + this.props.lang,
        style: this.context.styles.components.codePane.code,
        dangerouslySetInnerHTML: this.createMarkup()
      })
    );
  };

  return CodePane;
}(Component)) || _class;

export { CodePane as default };


CodePane.contextTypes = {
  styles: PropTypes.object
};

CodePane.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  lang: PropTypes.string,
  source: PropTypes.string,
  style: PropTypes.object
};

CodePane.defaultProps = {
  lang: "markup",
  source: ""
};