var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import Radium from "radium";

var Progress = Radium(_class = function (_Component) {
  _inherits(Progress, _Component);

  function Progress() {
    _classCallCheck(this, Progress);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Progress.prototype.getWidth = function getWidth() {
    return {
      width: 100 * this.props.currentSlideIndex / (this.props.items.length - 1) + "%"
    };
  };

  Progress.prototype.getPacmanStyle = function getPacmanStyle(side) {
    var animationName = "pacman" + side + "Frames" + (this.props.currentSlideIndex % 2 ? "" : "Bis");
    return {
      animation: animationName + " 0.12s linear 10 alternate both"
    };
  };

  Progress.prototype.getPointPosition = function getPointPosition(i) {
    return {
      top: "-20px",
      left: 5 + 20 * (i - this.props.items.length / 2) + "px"
    };
  };

  Progress.prototype.getPointStyle = function getPointStyle(i) {
    var style = this.getPointPosition(i);
    if (this.props.currentSlideIndex >= i) {
      style.opacity = 0;
    }

    return style;
  };

  Progress.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        type = _props.type,
        currentSlideIndex = _props.currentSlideIndex,
        items = _props.items;

    var style = this.context.styles.progress;
    var markup = void 0;
    switch (type) {
      case "none":
        return false;
      case "pacman":
        style = style.pacman;
        markup = React.createElement(
          "div",
          null,
          React.createElement(
            "div",
            { style: [style.pacman, this.getPointPosition(currentSlideIndex)] },
            React.createElement("div", { style: [style.pacmanTop, this.getPacmanStyle("Top")] }),
            React.createElement("div", { style: [style.pacmanBottom, this.getPacmanStyle("Bottom")] })
          ),
          items.map(function (item, i) {
            return React.createElement("div", {
              style: [style.point, _this2.getPointStyle(i)],
              key: "presentation-progress-" + i
            });
          })
        );
        break;
      case "number":
        style = style.number;
        markup = React.createElement(
          "div",
          null,
          currentSlideIndex + 1,
          " / ",
          items.length
        );
        break;
      case "bar":
        style = style.bar;
        markup = React.createElement("div", { style: [style.bar, this.getWidth()] });
        break;
      default:
        return false;
    }
    return React.createElement(
      "div",
      { style: [style.container] },
      markup
    );
  };

  return Progress;
}(Component)) || _class;

export { Progress as default };


Progress.propTypes = {
  currentSlideIndex: PropTypes.number,
  items: PropTypes.array,
  type: PropTypes.oneOf(["pacman", "bar", "number", "none"])
};

Progress.contextTypes = {
  styles: PropTypes.object
};