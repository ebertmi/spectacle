var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from "react";
import { getStyles } from "../utils/base";
import Radium from "radium";

var S = Radium(_class = function (_Component) {
  _inherits(S, _Component);

  function S() {
    _classCallCheck(this, S);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  S.prototype.render = function render() {
    var _props = this.props,
        type = _props.type,
        style = _props.style,
        children = _props.children;

    var styles = {};
    if (type.indexOf("strikethrough") !== -1) {
      styles = _extends({}, styles, { textDecoration: "line-through" });
    }
    if (type.indexOf("underline") !== -1) {
      styles = _extends({}, styles, { textDecoration: "underline" });
    }
    if (type.indexOf("bold") !== -1) {
      styles = _extends({}, styles, { fontWeight: "bold" });
    }
    if (type.indexOf("italic") !== -1) {
      styles = _extends({}, styles, { fontStyle: "italic" });
    }
    return React.createElement(
      "span",
      { className: this.props.className, style: [styles, this.context.styles.components.s[type], getStyles.call(this), style] },
      children
    );
  };

  return S;
}(Component)) || _class;

export { S as default };


S.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  type: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
};

S.contextTypes = {
  styles: PropTypes.object
};