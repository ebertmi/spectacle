function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from "react";
import Clock from "./clock";
import Timer from "./timer";
import { TimeContainer } from "./time-components";

var Time = function (_Component) {
  _inherits(Time, _Component);

  function Time() {
    _classCallCheck(this, Time);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = { timer: false };
    return _this;
  }

  Time.prototype._renderClock = function _renderClock() {
    if (this.state.timer) {
      return React.createElement(Timer, null);
    } else {
      return React.createElement(Clock, null);
    }
  };

  Time.prototype.render = function render() {
    return React.createElement(
      TimeContainer,
      null,
      this.props.timer ? React.createElement(Timer, null) : React.createElement(Clock, null)
    );
  };

  return Time;
}(Component);

export { Time as default };

Time.propTypes = {
  timer: PropTypes.bool
};