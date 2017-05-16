var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Children, cloneElement, Component } from "react";
import PropTypes from "prop-types";
import { getSlideByIndex } from "../utils/slides";
import { HeaderContainer, EndHeader, PresenterContent, SlideInfo, ContentContainer, PreviewPane, PreviewCurrentSlide, PreviewNextSlide, Notes } from "./presenter-components";

import Time from "./time";

var Presenter = (_temp2 = _class = function (_Component) {
  _inherits(Presenter, _Component);

  function Presenter() {
    var _temp, _this, _ret;

    _classCallCheck(this, Presenter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      notes: {}
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Presenter.prototype.getChildContext = function getChildContext() {
    return {
      updateNotes: this.updateNotes.bind(this)
    };
  };

  Presenter.prototype.getCurrentSlide = function getCurrentSlide() {
    return this.context.store.getState().route.slide;
  };

  Presenter.prototype.updateNotes = function updateNotes(newNotes) {
    var notes = _extends({}, this.state.notes);
    notes[this.getCurrentSlide()] = newNotes;

    this.setState({ notes: notes });
  };

  Presenter.prototype._getSlideByIndex = function _getSlideByIndex(index) {
    return getSlideByIndex(Children.toArray(this.props.slides), this.props.slideReference, index);
  };

  Presenter.prototype._renderMainSlide = function _renderMainSlide() {
    var _props = this.props,
        slideIndex = _props.slideIndex,
        hash = _props.hash,
        lastSlide = _props.lastSlide;

    var child = this._getSlideByIndex(slideIndex);
    var presenterStyle = {
      position: "relative"
    };
    return cloneElement(child, {
      dispatch: this.props.dispatch,
      key: slideIndex,
      hash: hash,
      export: this.props.route.params.indexOf("export") !== -1,
      print: this.props.route.params.indexOf("print") !== -1,
      slideIndex: slideIndex,
      lastSlide: lastSlide,
      transition: [],
      transitionDuration: 0,
      presenterStyle: presenterStyle
    });
  };

  Presenter.prototype._renderNextSlide = function _renderNextSlide() {
    var _props2 = this.props,
        slideIndex = _props2.slideIndex,
        lastSlide = _props2.lastSlide;

    var presenterStyle = {
      position: "relative"
    };
    var child = this._getSlideByIndex(slideIndex + 1);
    return child ? cloneElement(child, {
      dispatch: this.props.dispatch,
      export: this.props.route.params.indexOf("export") !== -1,
      print: this.props.route.params.indexOf("print") !== -1,
      key: slideIndex + 1,
      hash: child.props.id || slideIndex + 1,
      slideIndex: slideIndex + 1,
      lastSlide: lastSlide,
      transition: [],
      transitionDuration: 0,
      presenterStyle: presenterStyle,
      appearOff: true
    }) : React.createElement(
      EndHeader,
      null,
      "END"
    );
  };

  Presenter.prototype._renderNotes = function _renderNotes() {
    var notes = void 0;
    var currentSlide = this.getCurrentSlide();

    if (this.state.notes[currentSlide]) {
      notes = this.state.notes[currentSlide];
    } else {
      var child = this._getSlideByIndex(this.props.slideIndex);
      notes = child.props.notes;
    }

    if (!notes) {
      return false;
    }

    if (typeof notes === "string") {
      return React.createElement("div", { dangerouslySetInnerHTML: { __html: notes } });
    }
    return React.createElement(
      "div",
      null,
      notes
    );
  };

  Presenter.prototype.render = function render() {
    return React.createElement(
      PresenterContent,
      null,
      React.createElement(
        HeaderContainer,
        null,
        React.createElement(
          SlideInfo,
          null,
          "Slide ",
          this.props.slideIndex + 1,
          " of ",
          this.props.slideReference.length
        ),
        React.createElement(Time, { timer: this.props.timer })
      ),
      React.createElement(
        ContentContainer,
        null,
        React.createElement(
          PreviewPane,
          null,
          React.createElement(
            PreviewCurrentSlide,
            null,
            this._renderMainSlide()
          ),
          React.createElement(
            PreviewNextSlide,
            null,
            this._renderNextSlide()
          )
        ),
        React.createElement(
          Notes,
          null,
          this._renderNotes()
        )
      )
    );
  };

  return Presenter;
}(Component), _class.childContextTypes = {
  updateNotes: PropTypes.func
}, _temp2);
export { Presenter as default };


Presenter.propTypes = {
  dispatch: PropTypes.func,
  hash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lastSlide: PropTypes.number,
  route: PropTypes.object,
  slideIndex: PropTypes.number,
  slideReference: PropTypes.array,
  slides: PropTypes.array,
  timer: PropTypes.bool
};

Presenter.contextTypes = {
  styles: PropTypes.object,
  store: PropTypes.object.isRequired
};