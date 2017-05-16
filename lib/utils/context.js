var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Component } from "react";
import PropTypes from "prop-types";
import { updateRoute } from "../actions";
import { countSlides } from "./slides";

var Context = (_temp = _class = function (_Component) {
  _inherits(Context, _Component);

  function Context() {
    _classCallCheck(this, Context);

    var _this = _possibleConstructorReturn(this, _Component.apply(this, arguments));

    _this._handleLocationChange = _this._handleLocationChange.bind(_this);
    _this._handleLocationChange(_this.props);
    return _this;
  }

  Context.prototype.getChildContext = function getChildContext() {
    var _props = this.props,
        history = _props.history,
        styles = _props.styles,
        store = _props.store;

    return {
      history: history,
      styles: styles,
      store: store
    };
  };

  Context.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    this._handleLocationChange(nextProps);
  };

  Context.prototype._handleLocationChange = function _handleLocationChange(_ref) {
    var history = _ref.history,
        store = _ref.store,
        deck = _ref.children;

    var slideCount = countSlides(deck.props.children);
    store.dispatch(updateRoute({
      location: history.location,
      slideCount: slideCount
    }));
  };

  Context.prototype.render = function render() {
    return this.props.children;
  };

  return Context;
}(Component), _class.displayName = "Context", _class.propTypes = {
  children: PropTypes.node,
  history: PropTypes.object,
  store: PropTypes.object,
  styles: PropTypes.object
}, _class.childContextTypes = {
  styles: PropTypes.object,
  history: PropTypes.object,
  store: PropTypes.object
}, _temp);


export default Context;