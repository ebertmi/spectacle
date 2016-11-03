var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { cloneElement, Component, PropTypes } from "react";
import Radium from "radium";

var Export = Radium(_class = function (_Component) {
  _inherits(Export, _Component);

  function Export() {
    _classCallCheck(this, Export);

    return _possibleConstructorReturn(this, _Component.apply(this, arguments));
  }

  Export.prototype._renderSlides = function _renderSlides() {
    var _this2 = this;

    return this.props.slides.map(function (child, index) {
      return cloneElement(child, {
        key: index,
        slideIndex: index,
        export: _this2.props.route.params.indexOf("export") !== -1,
        print: _this2.props.route.params.indexOf("print") !== -1,
        transition: [],
        transitionDuration: 0
      });
    });
  };

  Export.prototype.render = function render() {
    var styles = {
      export: {
        height: "100%",
        width: "100%"
      }
    };
    return React.createElement(
      "div",
      { className: "spectacle-export", style: [styles.export] },
      this._renderSlides()
    );
  };

  return Export;
}(Component)) || _class;

export { Export as default };


Export.propTypes = {
  route: PropTypes.object,
  slides: PropTypes.array
};

Export.contextTypes = {
  styles: PropTypes.object
};