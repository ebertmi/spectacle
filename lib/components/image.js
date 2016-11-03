var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from "react";
import { getStyles } from "../utils/base";
import Radium from "radium";

var Image = Radium(_class = function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Image.prototype.render = function render() {
    var styles = {
      width: this.props.width || "",
      height: this.props.height || "",
      display: this.props.display || ""
    };
    return React.createElement("img", {
      className: this.props.className,
      src: this.props.src,
      style: [this.context.styles.components.image, getStyles.call(this), styles, this.props.style]
    });
  };

  return Image;
}(Component)) || _class;

export { Image as default };


Image.propTypes = {
  className: PropTypes.string,
  display: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  src: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Image.contextTypes = {
  styles: PropTypes.object
};