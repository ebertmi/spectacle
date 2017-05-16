var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _desc, _value, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

import React, { Component } from "react";
import PropTypes from "prop-types";
import isUndefined from "lodash/isUndefined";
import { getStyles } from "../utils/base";
import Radium from "radium";
import { addFragment } from "../actions";
import { Transitionable, renderTransition } from "./transitionable";

var Slide = Transitionable(_class = Radium(_class = (_class2 = function (_Component) {
  _inherits(Slide, _Component);

  function Slide() {
    var _temp, _this, _ret;

    _classCallCheck(this, Slide);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      contentScale: 1,
      transitioning: true,
      z: 1,
      zoom: 1
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Slide.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    this.setZoom();
    var slide = this.slideRef;
    var frags = slide.querySelectorAll(".fragment");
    if (frags && frags.length && !this.context.overview) {
      Array.prototype.slice.call(frags, 0).forEach(function (frag, i) {
        frag.dataset.fid = i;
        return _this2.props.dispatch && _this2.props.dispatch(addFragment({
          slide: _this2.props.hash,
          id: i,
          visible: _this2.props.lastSlide > _this2.props.slideIndex
        }));
      });
    }
    window.addEventListener("load", this.setZoom);
    window.addEventListener("resize", this.setZoom);
  };

  Slide.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this.setZoom);
  };

  Slide.prototype.setZoom = function setZoom() {
    var mobile = window.matchMedia("(max-width: 628px)").matches;
    var content = this.contentRef;
    if (content) {
      var zoom = this.props.viewerScaleMode ? 1 : content.offsetWidth / 1000;

      var contentScaleY = content.parentNode.offsetHeight / 700;
      var contentScaleX = this.props.viewerScaleMode ? content.parentNode.offsetWidth / 1000 : content.parentNode.offsetWidth / 700;
      var minScale = Math.min(contentScaleY, contentScaleX);

      var contentScale = minScale < 1 ? minScale : 1;
      if (mobile && this.props.viewerScaleMode !== true) {
        contentScale = 1;
      }

      this.setState({
        zoom: zoom > 0.6 ? zoom : 0.6,
        contentScale: contentScale
      });
    }
  };

  Slide.prototype.allStyles = function allStyles() {
    var _props = this.props,
        align = _props.align,
        print = _props.print;


    var styles = {
      outer: _extends({
        position: this.props.export ? "relative" : "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        overflow: "hidden",
        backgroundColor: this.context.styles.global.body.background ? this.context.styles.global.body.background : ""
      }, this.props.style),
      inner: {
        display: "flex",
        position: "relative",
        flex: 1,
        alignItems: align ? align.split(" ")[1] : "center",
        justifyContent: align ? align.split(" ")[0] : "center"
      },
      content: {
        flex: 1,
        maxHeight: this.props.maxHeight || 700,
        maxWidth: this.props.maxWidth || 1000,
        transform: "scale(" + this.state.contentScale + ")",
        padding: this.state.zoom > 0.6 ? this.props.margin || 40 : 10
      }
    };

    var overViewStyles = {
      inner: {
        flexDirection: "column"
      },
      content: {
        width: "100%"
      }
    };

    var printStyles = print ? {
      backgroundColor: "white",
      backgroundImage: "none"
    } : {};

    return { styles: styles, overViewStyles: overViewStyles, printStyles: printStyles };
  };

  Slide.prototype.render = function render() {
    var _this3 = this;

    var _props2 = this.props,
        presenterStyle = _props2.presenterStyle,
        children = _props2.children;

    var _allStyles = this.allStyles(),
        styles = _allStyles.styles,
        overViewStyles = _allStyles.overViewStyles,
        printStyles = _allStyles.printStyles;

    if (!this.props.viewerScaleMode) {
      document.documentElement.style.fontSize = 16 * this.state.zoom + "px";
    }

    var contentClass = isUndefined(this.props.className) ? "" : this.props.className;
    return React.createElement(
      "div",
      { className: "spectacle-slide",
        ref: function ref(s) {
          _this3.slideRef = s;
        },
        style: [styles.outer, getStyles.call(this), printStyles, presenterStyle]
      },
      React.createElement(
        "div",
        { style: [styles.inner, this.context.overview && overViewStyles.inner] },
        React.createElement(
          "div",
          { ref: function ref(c) {
              _this3.contentRef = c;
            },
            className: contentClass + " spectacle-content",
            style: [styles.content, this.context.styles.components.content, this.context.overview && overViewStyles.content]
          },
          children
        )
      )
    );
  };

  return Slide;
}(Component), (_applyDecoratedDescriptor(_class2.prototype, "render", [renderTransition], Object.getOwnPropertyDescriptor(_class2.prototype, "render"), _class2.prototype)), _class2)) || _class) || _class;

Slide.defaultProps = {
  align: "center center",
  presenterStyle: {},
  style: {},
  viewerScaleMode: false
};

Slide.propTypes = {
  align: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  dispatch: PropTypes.func,
  export: PropTypes.bool,
  hash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lastSlide: PropTypes.number,
  margin: PropTypes.number,
  maxHeight: PropTypes.number,
  maxWidth: PropTypes.number,
  notes: PropTypes.any,
  presenterStyle: PropTypes.object,
  print: PropTypes.bool,
  slideIndex: PropTypes.number,
  style: PropTypes.object,
  viewerScaleMode: PropTypes.bool
};

Slide.contextTypes = {
  styles: PropTypes.object,
  export: PropTypes.bool,
  print: PropTypes.object,
  overview: PropTypes.bool,
  store: PropTypes.object
};

export default Slide;