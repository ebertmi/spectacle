var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class, _class2, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*eslint new-cap:0, max-statements:0*/
/* eslint react/no-did-mount-set-state: 0 */

import React, { Children, cloneElement, Component, PropTypes } from "react";
import ReactTransitionGroup from "react-addons-transition-group";
import Radium, { Style } from "radium";
import filter from "lodash/filter";
import size from "lodash/size";
import { connect } from "react-redux";
import { updateFragment } from "../actions";

import Presenter from "./presenter";
import Export from "./export";
import Overview from "./overview";

import Fullscreen from "./fullscreen";
import Progress from "./progress";
import Controls from "./controls";
var TransitionGroup = Radium(ReactTransitionGroup);

var Deck = (_dec = connect(function (state) {
  return state;
}), _dec(_class = Radium(_class = (_temp = _class2 = function (_Component) {
  _inherits(Deck, _Component);

  function Deck() {
    _classCallCheck(this, Deck);

    var _this = _possibleConstructorReturn(this, _Component.call(this));

    _this._handleKeyPress = _this._handleKeyPress.bind(_this);
    _this._handleScreenChange = _this._handleScreenChange.bind(_this);
    _this.handleClick = _this.handleClick.bind(_this);
    _this._goToSlide = _this._goToSlide.bind(_this);
    _this.state = {
      lastSlide: null,
      fullscreen: window.innerHeight === screen.height,
      mobile: window.innerWidth < 1000
    };
    return _this;
  }

  Deck.prototype.componentDidMount = function componentDidMount() {
    var slide = this._getSlideIndex();
    this.setState({
      lastSlide: slide
    });
    this._attachEvents();
  };

  Deck.prototype.componentWillUnmount = function componentWillUnmount() {
    this._detachEvents();
  };

  Deck.prototype._attachEvents = function _attachEvents() {
    window.addEventListener("storage", this._goToSlide);
    window.addEventListener("keydown", this._handleKeyPress);
    window.addEventListener("resize", this._handleScreenChange);
  };

  Deck.prototype._detachEvents = function _detachEvents() {
    window.removeEventListener("storage", this._goToSlide);
    window.removeEventListener("keydown", this._handleKeyPress);
    window.removeEventListener("resize", this._handleScreenChange);
  };

  Deck.prototype._handleEvent = function _handleEvent(e) {
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
    }
  };

  Deck.prototype._handleKeyPress = function _handleKeyPress(e) {
    var event = window.event ? window.event : e;

    if (event.target instanceof HTMLInputElement || event.target.type === "textarea") {
      return;
    }

    this._handleEvent(e);
  };

  Deck.prototype._handleScreenChange = function _handleScreenChange() {
    this.setState({
      fullscreen: window.innerHeight === screen.height,
      mobile: window.innerWidth < 1000
    });
  };

  Deck.prototype._toggleOverviewMode = function _toggleOverviewMode() {
    var suffix = this.props.route.params.indexOf("overview") !== -1 ? "" : "?overview";
    this.context.history.replace("/" + this.props.route.slide + suffix);
  };

  Deck.prototype._togglePresenterMode = function _togglePresenterMode() {
    var suffix = this.props.route.params.indexOf("presenter") !== -1 ? "" : "?presenter";
    this.context.history.replace("/" + this.props.route.slide + suffix);
  };

  Deck.prototype._getSuffix = function _getSuffix() {
    if (this.props.route.params.indexOf("presenter") !== -1) {
      return "?presenter";
    } else if (this.props.route.params.indexOf("overview") !== -1) {
      return "?overview";
    } else {
      return "";
    }
  };

  Deck.prototype._goToSlide = function _goToSlide(e) {
    if (e.key === "spectacle-slide") {
      var data = JSON.parse(e.newValue);
      var slide = this._getSlideIndex();
      this.setState({
        lastSlide: slide || 0
      });
      if (this._checkFragments(this.props.route.slide, data.forward)) {
        this.context.history.replace("/" + data.slide + this._getSuffix());
      }
    }
  };

  Deck.prototype._prevSlide = function _prevSlide() {
    var slide = this._getSlideIndex();
    this.setState({
      lastSlide: slide
    });
    if (this._checkFragments(this.props.route.slide, false) || this.props.route.params.indexOf("overview") !== -1) {
      if (slide > 0) {
        this.context.history.replace("/" + this._getHash(slide - 1) + this._getSuffix());
        localStorage.setItem("spectacle-slide", JSON.stringify({ slide: this._getHash(slide - 1), forward: false, time: Date.now() }));
      }
    } else if (slide > 0) {
      localStorage.setItem("spectacle-slide", JSON.stringify({ slide: this._getHash(slide), forward: false, time: Date.now() }));
    }
  };

  Deck.prototype._nextSlide = function _nextSlide() {
    var slide = this._getSlideIndex();
    this.setState({
      lastSlide: slide
    });
    var children = Children.toArray(this.props.children);
    if (this._checkFragments(this.props.route.slide, true) || this.props.route.params.indexOf("overview") !== -1) {
      if (slide < children.length - 1) {
        this.context.history.replace("/" + (this._getHash(slide + 1) + this._getSuffix()));
        localStorage.setItem("spectacle-slide", JSON.stringify({ slide: this._getHash(slide + 1), forward: true, time: Date.now() }));
      }
    } else if (slide < children.length) {
      localStorage.setItem("spectacle-slide", JSON.stringify({ slide: this._getHash(slide), forward: true, time: Date.now() }));
    }
  };

  Deck.prototype._getHash = function _getHash(slide) {
    var hash = slide;
    var children = React.Children.toArray(this.props.children);
    if ("id" in children[slide].props) {
      hash = children[slide].props.id;
    }
    return hash;
  };

  Deck.prototype._checkFragments = function _checkFragments(slide, forward) {
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

  Deck.prototype._getTouchEvents = function _getTouchEvents() {
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

  Deck.prototype.handleClick = function handleClick(e) {
    if (this.clickSafe === true) {
      e.preventDefault();
      e.stopPropagation();
      e.nativeEvent.stopPropagation();
    }
  };

  Deck.prototype._handleSwipe = function _handleSwipe() {
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

  Deck.prototype._swipeDirection = function _swipeDirection(touch) {
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

  Deck.prototype._getSlideIndex = function _getSlideIndex() {
    var _this2 = this;

    var index = 0;
    if (!parseInt(this.props.route.slide)) {
      Children.toArray(this.props.children).forEach(function (slide, i) {
        if (slide.props.id === _this2.props.route.slide) {
          index = i;
        }
      });
    } else {
      index = parseInt(this.props.route.slide);
    }
    return index;
  };

  Deck.prototype._renderSlide = function _renderSlide() {
    var slide = this._getSlideIndex();
    var child = Children.toArray(this.props.children)[slide];
    return cloneElement(child, {
      dispatch: this.props.dispatch,
      fragments: this.props.fragment,
      key: slide,
      export: this.props.route.params.indexOf("export") !== -1,
      print: this.props.route.params.indexOf("print") !== -1,
      children: Children.toArray(child.props.children),
      hash: this.props.route.slide,
      slideIndex: slide,
      lastSlide: this.state.lastSlide,
      transition: child.props.transition.length ? child.props.transition : this.props.transition,
      transitionDuration: child.props.transition.transitionDuration ? child.props.transitionDuration : this.props.transitionDuration
    });
  };

  Deck.prototype.render = function render() {
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
      componentToRender = React.createElement(Presenter, {
        dispatch: this.props.dispatch,
        slides: children,
        slide: this._getSlideIndex(),
        hash: this.props.route.slide,
        route: this.props.route,
        lastSlide: this.state.lastSlide
      });
    } else if (this.props.route.params.indexOf("export") !== -1) {
      componentToRender = React.createElement(Export, { slides: children, route: this.props.route });
    } else if (this.props.route.params.indexOf("overview") !== -1) {
      componentToRender = React.createElement(Overview, { slides: children, slide: this._getSlideIndex(), route: this.props.route });
    } else {
      componentToRender = React.createElement(
        TransitionGroup,
        { component: "div", style: [styles.transition] },
        this._renderSlide()
      );
    }

    var showControls = !this.state.fullscreen && !this.state.mobile && this.props.route.params.indexOf("export") === -1 && this.props.route.params.indexOf("overview") === -1 && this.props.route.params.indexOf("presenter") === -1;

    return React.createElement(
      "div",
      _extends({
        className: "spectacle-deck",
        style: [styles.deck],
        onClick: this.handleClick
      }, this._getTouchEvents()),
      this.props.controls && showControls && React.createElement(Controls, {
        currentSlide: this._getSlideIndex(),
        totalSlides: children.length,
        onPrev: this._prevSlide.bind(this),
        onNext: this._nextSlide.bind(this)
      }),
      componentToRender,
      this.props.route.params.indexOf("export") === -1 && this.props.route.params.indexOf("overview") === -1 ? React.createElement(Progress, {
        items: children,
        currentSlide: this._getSlideIndex(),
        type: this.props.progress
      }) : "",
      this.props.route.params.indexOf("export") === -1 ? React.createElement(Fullscreen, null) : "",
      this.props.globalStyles && React.createElement(Style, { rules: Object.assign(this.context.styles.global, globals) })
    );
  };

  return Deck;
}(Component), _class2.displayName = "Deck", _class2.defaultProps = {
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
export { Deck as default };