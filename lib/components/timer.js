function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import { Clock as TimerHeader, TButtonContainer, TSingleButton } from "./time-components";

var timeCounter = function timeCounter(time) {
  var hours = Math.floor(time / 3600);
  var minutes = Math.floor(time / 60);
  var seconds = time % 60;

  var areHours = hours > 0;

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  var noHrTime = minutes + " : " + seconds;
  var hrTime = hours + " : " + noHrTime;

  return areHours ? hrTime : noHrTime;
};

var Timer = function (_Component) {
  _inherits(Timer, _Component);

  function Timer() {
    _classCallCheck(this, Timer);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      elapsedTime: 0,
      paused: true
    };
    _this.handleStartTimer = _this.handleStartTimer.bind(_this);
    _this.handleStopTimer = _this.handleStopTimer.bind(_this);
    _this.handleResetTimer = _this.handleResetTimer.bind(_this);
    return _this;
  }

  Timer.prototype.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.interval);
  };

  Timer.prototype.handleStartTimer = function handleStartTimer() {
    var _this2 = this;

    this.setState({
      paused: false
    });
    this.interval = setInterval(function () {
      _this2.setState({
        elapsedTime: _this2.state.elapsedTime + 1
      });
    }, 1000);
  };

  Timer.prototype.handleStopTimer = function handleStopTimer() {
    this.setState({
      paused: true
    });
    clearInterval(this.interval);
  };

  Timer.prototype.handleResetTimer = function handleResetTimer() {
    this.handleStopTimer();
    this.setState({
      elapsedTime: 0
    });
  };

  Timer.prototype._renderResetButton = function _renderResetButton() {
    return React.createElement(
      TSingleButton,
      {
        onClick: this.handleResetTimer
      },
      "Reset"
    );
  };

  Timer.prototype._renderStartButton = function _renderStartButton() {
    return React.createElement(
      TSingleButton,
      {
        onClick: this.handleStartTimer,
        start: true
      },
      "Start"
    );
  };

  Timer.prototype._renderStopButton = function _renderStopButton() {
    return React.createElement(
      TSingleButton,
      {
        onClick: this.handleStopTimer,
        stop: true
      },
      "Stop"
    );
  };

  Timer.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        TimerHeader,
        null,
        timeCounter(this.state.elapsedTime)
      ),
      React.createElement(
        TButtonContainer,
        null,
        this.state.elapsedTime !== 0 && this.state.paused ? this._renderResetButton() : null,
        this.state.paused ? this._renderStartButton() : this._renderStopButton()
      )
    );
  };

  return Timer;
}(Component);

export { Timer as default };