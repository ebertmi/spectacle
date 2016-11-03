var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from "react";
import { getStyles } from "../utils/base";
import Radium from "radium";

var List = Radium(_class = function (_Component) {
  _inherits(List, _Component);

  function List() {
    _classCallCheck(this, List);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  List.prototype.render = function render() {
    return this.props.ordered ? React.createElement(
      "ol",
      { reversed: this.props.reversed, start: this.props.start, type: this.props.type, className: this.props.className, style: [this.context.styles.components.list, getStyles.call(this), this.props.style] },
      this.props.children
    ) : React.createElement(
      "ul",
      { className: this.props.className, style: [this.context.styles.components.list, getStyles.call(this), this.props.style] },
      this.props.children
    );
  };

  return List;
}(Component)) || _class;

export { List as default };


List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ordered: PropTypes.bool,
  reversed: PropTypes.bool,
  start: PropTypes.number,
  style: PropTypes.object,
  type: PropTypes.string
};

List.defaultProps = {
  ordered: false,
  reversed: false,
  start: 1,
  type: "1"
};

List.contextTypes = {
  styles: PropTypes.object
};