var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import History from "react-history/BrowserHistory";

import theme from "../themes/default";
import Context from "./context";

var Controller = (_temp = _class = function (_Component) {
  _inherits(Controller, _Component);

  function Controller() {
    _classCallCheck(this, Controller);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Controller.prototype.render = function render() {
    var _this2 = this;

    var styles = this.props.theme ? this.props.theme : theme();
    return React.createElement(
      History,
      null,
      function (history) {
        var action = history.action,
            location = history.location;

        var printEnabled = location.search.indexOf("print") !== -1;
        return React.createElement(
          Context,
          {
            store: _this2.props.store,
            history: history,
            styles: printEnabled ? styles.print : styles.screen
          },
          _this2.props.children
        );
      }
    );
  };

  return Controller;
}(Component), _class.propTypes = {
  children: PropTypes.node,
  store: PropTypes.object,
  theme: PropTypes.object
}, _temp);
export { Controller as default };