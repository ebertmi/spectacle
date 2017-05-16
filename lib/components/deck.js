var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";

import { Provider } from "react-redux";
import configureStore from "../store";

import Controller from "../utils/controller";
import Manager from "./manager";

var store = configureStore();

var Deck = (_temp = _class = function (_Component) {
  _inherits(Deck, _Component);

  function Deck() {
    _classCallCheck(this, Deck);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Deck.prototype.render = function render() {
    return React.createElement(
      Provider,
      { store: store },
      React.createElement(
        Controller,
        { theme: this.props.theme, store: store, history: this.props.history },
        React.createElement(
          Manager,
          this.props,
          this.props.children
        )
      )
    );
  };

  return Deck;
}(Component), _class.displayName = "Deck", _class.propTypes = {
  children: PropTypes.node,
  controls: PropTypes.bool,
  globalStyles: PropTypes.bool,
  history: PropTypes.object,
  progress: PropTypes.oneOf(["pacman", "bar", "number", "none"]),
  theme: PropTypes.object,
  transition: PropTypes.array,
  transitionDuration: PropTypes.number
}, _temp);
export { Deck as default };