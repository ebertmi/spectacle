var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, createElement, PropTypes } from "react";
import { getStyles } from "../utils/base";
import Radium from "radium";

var Heading = Radium(_class = function (_Component) {
  _inherits(Heading, _Component);

  function Heading() {
    _classCallCheck(this, Heading);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.resize = _this.resize.bind(_this);
    _this.state = {
      scale: 1,
      height: 16
    };
    return _this;
  }

  Heading.prototype.componentDidMount = function componentDidMount() {
    this.resize();
    window.addEventListener("load", this.resize);
    window.addEventListener("resize", this.resize);
  };

  Heading.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
    this.resize();
  };

  Heading.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("load", this.resize);
    window.removeEventListener("resize", this.resize);
  };

  Heading.prototype.resize = function resize() {
    if (this.props.fit) {
      var text = this.textRef;
      var container = this.containerRef;
      text.style.display = "inline-block";
      var scale = container.offsetWidth / text.offsetWidth;
      var height = text.offsetHeight * scale;
      text.style.display = "block";
      this.setState({
        scale: scale,
        height: height
      });
    }
  };

  Heading.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        size = _props.size,
        lineHeight = _props.lineHeight,
        fit = _props.fit,
        style = _props.style,
        children = _props.children;

    var Tag = "H" + size;
    var styles = {
      container: {
        display: "block",
        width: "100%",
        height: this.state.height
      },
      text: {
        fontSize: 16,
        display: "block",
        margin: "0",
        padding: "0",
        lineHeight: lineHeight,
        transform: "scale(" + this.state.scale + ")",
        transformOrigin: "center top"
      },
      nonFit: {
        lineHeight: lineHeight
      }
    };
    return fit ? React.createElement(
      "div",
      {
        className: this.props.className,
        ref: function ref(c) {
          _this2.containerRef = c;
        },
        style: [this.context.styles.components.heading["h" + size], getStyles.call(this), styles.container]
      },
      React.createElement(
        "span",
        { ref: function ref(t) {
            _this2.textRef = t;
          }, style: [styles.text, style] },
        children
      )
    ) : createElement(Tag, {
      className: this.props.className,
      style: [this.context.styles.components.heading["h" + size], getStyles.call(this), styles.nonFit, style]
    }, children);
  };

  return Heading;
}(Component)) || _class;

export { Heading as default };


Heading.defaultProps = {
  size: 1,
  lineHeight: 1
};

Heading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fit: PropTypes.bool,
  lineHeight: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object
};

Heading.contextTypes = {
  styles: PropTypes.object
};