var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from "react";
import Radium from "radium";

var Fullscreen = Radium(_class = function (_Component) {
  _inherits(Fullscreen, _Component);

  function Fullscreen() {
    _classCallCheck(this, Fullscreen);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Fullscreen.prototype.toggleFullScreen = function toggleFullScreen() {
    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        document.documentElement.msRequestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  };

  Fullscreen.prototype.render = function render() {
    var styles = {
      position: "absolute",
      bottom: 20,
      right: 20,
      opacity: 0,
      cursor: "pointer",
      transition: "300ms opacity ease",
      ":hover": {
        opacity: 1
      }
    };
    return React.createElement(
      "svg",
      {
        onClick: this.toggleFullScreen.bind(this),
        style: [styles, this.context.styles.fullscreen],
        width: "30px",
        height: "30px",
        viewBox: "0 0 512 512"
      },
      React.createElement("path", { d: "M73.143,329.143H0V512h182.857v-73.143H73.143V329.143z M0,182.857h73.143V73.143h109.715V0H0V182.857z M438.857,438.857\r H329.143V512H512V329.143h-73.143V438.857z M329.143,0v73.143h109.715v109.715H512V0H329.143z"
      })
    );
  };

  return Fullscreen;
}(Component)) || _class;

export { Fullscreen as default };


Fullscreen.contextTypes = {
  styles: PropTypes.object
};