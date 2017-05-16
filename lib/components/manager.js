var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*eslint new-cap:0, max-statements:0*/
/* eslint react/no-did-mount-set-state: 0 */

import React, { Children, cloneElement, Component } from "react";
import PropTypes from "prop-types";
import ReactTransitionGroup from "react-addons-transition-group";
import Radium, { Style } from "radium";
import filter from "lodash/filter";
import size from "lodash/size";
import findIndex from "lodash/findIndex";
import { connect } from "react-redux";
import { setGlobalStyle, updateFragment } from "../actions";
import Typeface from "./typeface";
import { getSlideByIndex } from "../utils/slides";

import Presenter from "./presenter";
import Export from "./export";
import Overview from "./overview";

import Fullscreen from "./fullscreen";
import Progress from "./progress";
import Controls from "./controls";
var TransitionGroup = Radium(ReactTransitionGroup);

var Manager = (_dec = connect(function (state) {
  return state;
}), _dec(_class = Radium(_class = (_temp = _class2 = function (_Component) {
  _inherits(Manager, _Component);

  function Manager() {
    _classCallCheck(this, Manager);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this._handleKeyPress = _this._handleKeyPress.bind(_this);
    _this._handleScreenChange = _this._handleScreenChange.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this._goToSlide = _this._goToSlide.bind(_this);
    _this.state = {
      lastSlideIndex: null,
      slideReference: [],
      fullscreen: window.innerHeight === screen.height,
      mobile: window.innerWidth < 1000
    };
    return _this;
  }

  Manager.prototype.componentWillMount = function componentWillMount() {
    this.setState({
      slideReference: this._buildSlideReference()
    });
  };

  Manager.prototype.componentDidMount = function componentDidMount() {
    var slideIndex = this._getSlideIndex();
    this.setState({
      lastSlideIndex: slideIndex
    });
    this._attachEvents();
  };

  Manager.prototype.componentDidUpdate = function componentDidUpdate() {
    if (this.props.globalStyles && !this.context.store.getState().style.globalStyleSet) {
      this.props.dispatch(setGlobalStyle());
    }
  };

  Manager.prototype.componentWillUnmount = function componentWillUnmount() {
    this._detachEvents();
  };

  Manager.prototype._attachEvents = function _attachEvents() {
    window.addEventListener("storage", this._goToSlide);
    window.addEventListener("keydown", this._handleKeyPress);
    window.addEventListener("resize", this._handleScreenChange);
  };

  Manager.prototype._detachEvents = function _detachEvents() {
    window.removeEventListener("storage", this._goToSlide);
    window.removeEventListener("keydown", this._handleKeyPress);
    window.removeEventListener("resize", this._handleScreenChange);
  };

  Manager.prototype._handleEvent = function _handleEvent(e) {
    var event = window.event ? window.event : e;

    if (event.keyCode === 37 || event.keyCode === 33 || event.keyCode === 32 && event.shiftKey) {
      this._prevSlide();
    } else if (event.keyCode === 39 || event.keyCode === 34 || event.keyCode === 32 && !event.shiftKey) {
      this._nextSlide();
    } else if (event.altKey && event.keyCode === 79 && !event.ctrlKey && !event.metaKey) {
      // o
      this._toggleOverviewMode();
    } else if (event.altKey && event.keyCode === 80 && !event.ctrlKey && !event.metaKey) {
      // p
      this._togglePresenterMode();
    } else if (event.altKey && event.keyCode === 84 && !event.ctrlKey && !event.metaKey) {
      // t
      this._toggleTimerMode();
    }
  };

  Manager.prototype._handleKeyPress = function _handleKeyPress(e) {
    var event = window.event ? window.event : e;

    if (event.target instanceof HTMLInputElement || event.target.type === "textarea") {
      return;
    }

    this._handleEvent(e);
  };

  Manager.prototype._handleScreenChange = function _handleScreenChange() {
    this.setState({
      fullscreen: window.innerHeight === screen.height,
      mobile: window.innerWidth < 1000
    });
  };

  Manager.prototype._toggleOverviewMode = function _toggleOverviewMode() {
    var suffix = this.props.route.params.indexOf("overview") !== -1 ? "" : "?overview";
    this.context.history.replace("/" + this.props.route.slide + suffix);
  };

  Manager.prototype._togglePresenterMode = function _togglePresenterMode() {
    var suffix = this.props.route.params.indexOf("presenter") !== -1 ? "" : "?presenter";
    this.context.history.replace("/" + this.props.route.slide + suffix);
  };

  Manager.prototype._toggleTimerMode = function _toggleTimerMode() {
    var isTimer = this.props.route.params.indexOf("presenter") !== -1 && this.props.route.params.indexOf("timer") !== -1;
    var suffix = isTimer ? "?presenter" : "?presenter&timer";
    this.context.history.replace("/" + this.props.route.slide + suffix);
  };

  Manager.prototype._getSuffix = function _getSuffix() {
    if (this.props.route.params.indexOf("presenter") !== -1) {
      var isTimerMode = this.props.route.params.indexOf("timer") !== -1;
      return isTimerMode ? "?presenter&timer" : "presenter";
    } else if (this.props.route.params.indexOf("overview") !== -1) {
      return "?overview";
    } else {
      return "";
    }
  };

  Manager.prototype._goToSlide = function _goToSlide(e) {
    if (e.key === "spectacle-slide") {
      var data = JSON.parse(e.newValue);
      var slideIndex = this._getSlideIndex();
      this.setState({
        lastSlideIndex: slideIndex || 0
      });
      if (this._checkFragments(this.props.route.slide, data.forward)) {
        this.context.history.replace("/" + data.slide + this._getSuffix());
      }
    }
  };

  Manager.prototype._prevSlide = function _prevSlide() {
    var slideIndex = this._getSlideIndex();
    this.setState({
      lastSlideIndex: slideIndex
    });
    if (this._checkFragments(this.props.route.slide, false) || this.props.route.params.indexOf("overview") !== -1) {
      if (slideIndex > 0) {
        this.context.history.replace("/" + this._getHash(slideIndex - 1) + this._getSuffix());
        localStorage.setItem("spectacle-slide", JSON.stringify({ slide: this._getHash(slideIndex - 1), forward: false, time: Date.now() }));
      }
    } else if (slideIndex > 0) {
      localStorage.setItem("spectacle-slide", JSON.stringify({ slide: this._getHash(slideIndex), forward: false, time: Date.now() }));
    }
  };

  Manager.prototype._nextSlide = function _nextSlide() {
    var slideIndex = this._getSlideIndex();
    this.setState({
      lastSlideIndex: slideIndex
    });
    var slideReference = this.state.slideReference;
    if (this._checkFragments(this.props.route.slide, true) || this.props.route.params.indexOf("overview") !== -1) {
      if (slideIndex < slideReference.length - 1) {
        this.context.history.replace("/" + (this._getHash(slideIndex + 1) + this._getSuffix()));
        localStorage.setItem("spectacle-slide", JSON.stringify({ slide: this._getHash(slideIndex + 1), forward: true, time: Date.now() }));
      }
    } else if (slideIndex < slideReference.length) {
      localStorage.setItem("spectacle-slide", JSON.stringify({ slide: this._getHash(slideIndex), forward: true, time: Date.now() }));
    }
  };

  Manager.prototype._getHash = function _getHash(slideIndex) {
    return this.state.slideReference[slideIndex].id;
  };

  Manager.prototype._checkFragments = function _checkFragments(slide, forward) {
    var state = this.context.store.getState();
    var fragments = state.fragment.fragments;
    // Not proud of this at all. 0.14 Parent based contexts will fix this.
    if (this.props.route.params.indexOf("presenter") !== -1) {
      var main = document.querySelector(".spectacle-presenter-main");
      if (main) {
        var frags = main.querySelectorAll(".fragment");
        if (!frags.length) {
          return true;
        }
      } else {
        return true;
      }
    }
    if (slide in fragments) {
      var count = size(fragments[slide]);
      var visible = filter(fragments[slide], function (s) {
        return s.visible === true;
      });
      var hidden = filter(fragments[slide], function (s) {
        return s.visible !== true;
      });
      if (forward === true && visible.length !== count) {
        this.props.dispatch(updateFragment({
          fragment: hidden[0],
          visible: true
        }));
        return false;
      }
      if (forward === false && hidden.length !== count) {
        this.props.dispatch(updateFragment({
          fragment: visible[size(visible) - 1],
          visible: false
        }));
        return false;
      }
      return true;
    } else {
      return true;
    }
  };

  Manager.prototype._getTouchEvents = function _getTouchEvents() {
    var self = this;

    return {
      onTouchStart: function onTouchStart(e) {
        self.touchObject = {
          startX: e.touches[0].pageX,
          startY: e.touches[0].pageY
        };
      },
      onTouchMove: function onTouchMove(e) {
        var direction = self._swipeDirection({
          x1: self.touchObject.startX,
          x2: e.touches[0].pageX,
          y1: self.touchObject.startY,
          y2: e.touches[0].pageY
        });

        self.touchObject = {
          startX: self.touchObject.startX,
          startY: self.touchObject.startY,
          endX: e.clientX,
          endY: e.clientY,
          length: Math.round(Math.sqrt(Math.pow(e.touches[0].pageX - self.touchObject.startX, 2))),
          direction: direction
        };

        if (direction !== 0) {
          e.preventDefault();
        }
      },
      onTouchEnd: function onTouchEnd(e) {
        self._handleSwipe(e);
      },
      onTouchCancel: function onTouchCancel(e) {
        self._handleSwipe(e);
      }
    };
  };

  Manager.prototype.handleClick = function handleClick(e) {
    if (this.clickSafe === true) {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopPropagation();
    }
  };

  Manager.prototype._handleSwipe = function _handleSwipe() {
    if (typeof this.touchObject.length !== "undefined" && this.touchObject.length > 44) {
      this.clickSafe = true;
    } else {
      this.clickSafe = false;
    }

    if (Math.abs(this.touchObject.length) > 20) {
      if (this.touchObject.direction === 1) {
        this._nextSlide();
      } else if (this.touchObject.direction === -1) {
        this._prevSlide();
      }
    }

    this.touchObject = {};
  };

  Manager.prototype._swipeDirection = function _swipeDirection(touch) {
    var xDist = touch.x1 - touch.x2;
    var yDist = touch.y1 - touch.y2;
    var r = Math.atan2(yDist, xDist);
    var swipeAngle = Math.round(r * 180 / Math.PI);

    if (swipeAngle < 0) {
      swipeAngle = 360 - Math.abs(swipeAngle);
    }
    if (swipeAngle <= 45 && swipeAngle >= 0) {
      return 1;
    }
    if (swipeAngle <= 360 && swipeAngle >= 315) {
      return 1;
    }
    if (swipeAngle >= 135 && swipeAngle <= 225) {
      return -1;
    }

    return 0;
  };

  Manager.prototype._buildSlideReference = function _buildSlideReference() {
    var slideReference = [];
    Children.toArray(this.props.children).forEach(function (child, rootIndex) {
      if (!child.props.hasSlideChildren) {
        slideReference.push({
          id: child.props.id || slideReference.length,
          rootIndex: rootIndex
        });
      } else {
        child.props.children.forEach(function (setSlide, setIndex) {
          slideReference.push({
            id: setSlide.props.id || slideReference.length,
            setIndex: setIndex,
            rootIndex: rootIndex
          });
        });
      }
    });
    return slideReference;
  };

  Manager.prototype._getSlideIndex = function _getSlideIndex() {
    var _this2 = this;

    var index = parseInt(this.props.route.slide);
    if (!Number.isFinite(index)) {
      var foundIndex = findIndex(this.state.slideReference, function (reference) {
        return _this2.props.route.slide === reference.id;
      });
      index = foundIndex >= 0 ? foundIndex : 0;
    }
    return index;
  };

  Manager.prototype._getSlideByIndex = function _getSlideByIndex(index) {
    return getSlideByIndex(this.props.children, this.state.slideReference, index);
  };

  Manager.prototype._renderSlide = function _renderSlide() {
    var slideIndex = this._getSlideIndex();
    var slide = this._getSlideByIndex(slideIndex);
    return cloneElement(slide, {
      dispatch: this.props.dispatch,
      fragments: this.props.fragment,
      key: slideIndex,
      export: this.props.route.params.indexOf("export") !== -1,
      print: this.props.route.params.indexOf("print") !== -1,
      children: Children.toArray(slide.props.children),
      hash: this.props.route.slide,
      slideIndex: slideIndex,
      lastSlideIndex: this.state.lastSlideIndex,
      transition: (slide.props.transition || {}).length ? slide.props.transition : this.props.transition,
      transitionDuration: (slide.props.transition || {}).transitionDuration ? slide.props.transitionDuration : this.props.transitionDuration
    });
  };

  Manager.prototype.render = function render() {
    var globals = this.props.route.params.indexOf("export") !== -1 ? {
      body: Object.assign(this.context.styles.global.body, {
        minWidth: 1100,
        minHeight: 850,
        overflow: "auto"
      }),
      ".spectacle-presenter-next .fragment": {
        display: "none !important"
      }
    } : {
      ".spectacle-presenter-next .fragment": {
        display: "none !important"
      }
    };

    var styles = {
      deck: {
        backgroundColor: this.props.route.params.indexOf("presenter") !== -1 || this.props.route.params.indexOf("overview") !== -1 ? "black" : "",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%"
      },
      transition: {
        height: "100%",
        width: "100%",
        perspective: 1000,
        transformStyle: "flat"
      }
    };

    var componentToRender = void 0;
    var children = Children.toArray(this.props.children);
    if (this.props.route.params.indexOf("presenter") !== -1) {
      var isTimerMode = this.props.route.params.indexOf("timer") !== -1;
      componentToRender = React.createElement(Presenter, {
        dispatch: this.props.dispatch,
        slides: children,
        slideReference: this.state.slideReference,
        slideIndex: this._getSlideIndex(),
        hash: this.props.route.slide,
        route: this.props.route,
        lastSlideIndex: this.state.lastSlideIndex,
        timer: isTimerMode
      });
    } else if (this.props.route.params.indexOf("export") !== -1) {
      componentToRender = React.createElement(Export, {
        slides: children,
        slideReference: this.state.slideReference,
        route: this.props.route
      });
    } else if (this.props.route.params.indexOf("overview") !== -1) {
      componentToRender = React.createElement(Overview, {
        slides: children,
        slideReference: this.state.slideReference,
        slideIndex: this._getSlideIndex(),
        route: this.props.route
      });
    } else {
      componentToRender = React.createElement(
        TransitionGroup,
        { component: "div", style: [styles.transition] },
        this._renderSlide()
      );
    }

    var showControls = !this.state.fullscreen && !this.state.mobile && this.props.route.params.indexOf("export") === -1 && this.props.route.params.indexOf("overview") === -1 && this.props.route.params.indexOf("presenter") === -1;

    var _context$styles$googl = this.context.styles.googleFonts,
        googleFonts = _context$styles$googl === undefined ? {} : _context$styles$googl;

    var googleFontsElements = Object.keys(googleFonts).map(function (key, index) {
      return React.createElement(Typeface, {
        googleFont: googleFonts[key].name,
        styles: googleFonts[key].styles,
        key: "gFont-" + index
      });
    });

    return React.createElement(
      "div",
      _extends({
        className: "spectacle-deck",
        style: [styles.deck],
        onClick: this.handleClick
      }, this._getTouchEvents()),
      this.props.controls && showControls && React.createElement(Controls, {
        currentSlideIndex: this._getSlideIndex(),
        totalSlides: this.state.slideReference.length,
        onPrev: this._prevSlide.bind(this),
        onNext: this._nextSlide.bind(this)
      }),
      googleFontsElements,
      componentToRender,
      this.props.route.params.indexOf("export") === -1 && this.props.route.params.indexOf("overview") === -1 ? React.createElement(Progress, {
        items: this.state.slideReference,
        currentSlideIndex: this._getSlideIndex(),
        type: this.props.progress
      }) : "",
      this.props.route.params.indexOf("export") === -1 ? React.createElement(Fullscreen, null) : "",
      this.props.globalStyles && React.createElement(Style, { rules: Object.assign(this.context.styles.global, globals) })
    );
  };

  return Manager;
}(Component), _class2.displayName = "Manager", _class2.defaultProps = {
  transitionDuration: 500,
  progress: "pacman",
  controls: true,
  globalStyles: true
}, _class2.propTypes = {
  children: PropTypes.node,
  controls: PropTypes.bool,
  dispatch: PropTypes.func,
  fragment: PropTypes.object,
  globalStyles: PropTypes.bool,
  progress: PropTypes.oneOf(["pacman", "bar", "number", "none"]),
  route: PropTypes.object,
  transition: PropTypes.array,
  transitionDuration: PropTypes.number
}, _class2.contextTypes = {
  styles: PropTypes.object,
  print: PropTypes.object,
  history: PropTypes.object,
  presenter: PropTypes.bool,
  export: PropTypes.bool,
  overview: PropTypes.bool,
  store: PropTypes.object,
  slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}, _temp)) || _class) || _class);
export { Manager as default };