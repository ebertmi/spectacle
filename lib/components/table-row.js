var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component } from "react";
import PropTypes from "prop-types";
import { getStyles } from "../utils/base";
import Radium from "radium";

var TableRow = Radium(_class = function (_Component) {
  _inherits(TableRow, _Component);

  function TableRow() {
    _classCallCheck(this, TableRow);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  TableRow.prototype.render = function render() {
    return React.createElement(
      "tr",
      { className: this.props.className, style: [this.context.styles.components.tableRow, getStyles.call(this), this.props.style] },
      this.props.children
    );
  };

  return TableRow;
}(Component)) || _class;

export { TableRow as default };


TableRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object
};

TableRow.contextTypes = {
  styles: PropTypes.object,
  store: PropTypes.object
};