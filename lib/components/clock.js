function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import { Clock as ClockStyle } from "./time-components";

var startTime = function startTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours %= 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;
  var strTime = hours + " : " + minutes + " : " + seconds + " " + ampm;
  return strTime;
};

var Clock = function (_Component) {
  _inherits(Clock, _Component);

  function Clock() {
    var _temp, _this, _ret;

    _classCallCheck(this, Clock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { time: new Date(Date.now()) }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Clock.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.interval = setInterval(function () {
      _this2.setState({
        time: new Date()
      });
    }, 1000);
  };

  Clock.prototype.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.interval);
  };

  Clock.prototype.render = function render() {
    return React.createElement(
      ClockStyle,
      null,
      startTime(this.state.time)
    );
  };

  return Clock;
}(Component);

export { Clock as default };