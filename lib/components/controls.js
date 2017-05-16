var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import Radium from "radium";

var Controls = Radium(_class = function (_Component) {
  _inherits(Controls, _Component);

  function Controls() {
    _classCallCheck(this, Controls);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Controls.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      this.props.currentSlideIndex !== 0 && React.createElement(
        "button",
        {
          type: "button",
          key: "prev",
          onClick: this.props.onPrev,
          style: this.context.styles.controls.prev
        },
        React.createElement(
          "svg",
          {
            key: "prevIcon",
            style: this.context.styles.controls.prevIcon,
            width: "32px",
            height: "32px",
            viewBox: "0 0 512 828.586"
          },
          React.createElement("path", { d: "M512,97.707L414.293,0L0,414.293l414.293,414.293L512,730.88L195.414,414.293L512,97.707z" })
        )
      ),
      this.props.currentSlideIndex < this.props.totalSlides - 1 && React.createElement(
        "button",
        {
          type: "button",
          key: "next",
          onClick: this.props.onNext,
          style: this.context.styles.controls.next
        },
        React.createElement(
          "svg",
          {
            key: "nextIcon",
            style: this.context.styles.controls.nextIcon,
            width: "32px",
            height: "32px",
            viewBox: "0 0 512 828.586"
          },
          React.createElement("path", { d: "M97.707,0L0,97.707l316.586,316.586L0,730.88l97.707,97.706L512,414.293L97.707,0z" })
        )
      )
    );
  };

  return Controls;
}(Component)) || _class;

export { Controls as default };


Controls.propTypes = {
  currentSlideIndex: PropTypes.number,
  onNext: PropTypes.func,
  onPrev: PropTypes.func,
  totalSlides: PropTypes.number
};

Controls.contextTypes = {
  styles: PropTypes.object
};