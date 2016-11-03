var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { cloneElement, Component, PropTypes } from "react";
import Radium from "radium";

var Overview = Radium(_class = function (_Component) {
  _inherits(Overview, _Component);

  function Overview(props) {
    _classCallCheck(this, Overview);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      overviewWidth: document.documentElement.clientWidth
    };
    _this.resizeHandler = _this.resizeHandler.bind(_this);
    return _this;
  }

  Overview.prototype.componentDidMount = function componentDidMount() {
    this.resizeHandler();
    window.addEventListener("resize", this.resizeHandler);
  };

  Overview.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  };

  Overview.prototype._slideClicked = function _slideClicked(index) {
    this.context.history.replace("/" + this._getHash(index));
  };

  Overview.prototype._getHash = function _getHash(slide) {
    var hash = slide;
    if ("id" in this.props.slides[slide].props) {
      hash = this.props.slides[slide].props.id;
    }
    return hash;
  };

  Overview.prototype._renderSlides = function _renderSlides() {
    var _this2 = this;

    var slide = this.props.slide;
    var screen = this.state.overviewWidth;
    return this.props.slides.map(function (child, index) {
      var style = {
        position: "relative",
        width: screen / 3,
        height: screen / 3 * 0.7,
        float: "left",
        opacity: index === slide ? 1 : 0.5,
        cursor: "pointer",
        ":hover": {
          opacity: 1
        }
      };
      var el = cloneElement(child, {
        key: index,
        slideIndex: index,
        export: _this2.props.route.params.indexOf("export") !== -1,
        print: _this2.props.route.params.indexOf("print") !== -1,
        transition: [],
        transitionDuration: 0,
        appearOff: true
      });
      return React.createElement(
        "div",
        { key: index, style: [style], onClick: _this2._slideClicked.bind(_this2, index) },
        el
      );
    });
  };

  Overview.prototype.resizeHandler = function resizeHandler() {
    this.setState({
      overviewWidth: this.overviewRef.clientWidth
    });
  };

  Overview.prototype.render = function render() {
    var _this3 = this;

    var styles = {
      overview: {
        height: "100%",
        width: "100%",
        overflow: "scroll"
      }
    };
    return React.createElement(
      "div",
      { className: "spectacle-overview", ref: function ref(o) {
          _this3.overviewRef = o;
        }, style: [styles.overview] },
      this._renderSlides()
    );
  };

  return Overview;
}(Component)) || _class;

export { Overview as default };


Overview.propTypes = {
  route: PropTypes.object,
  slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  slides: PropTypes.array
};

Overview.contextTypes = {
  styles: PropTypes.object,
  history: PropTypes.object
};