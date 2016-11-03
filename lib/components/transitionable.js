var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*eslint new-cap:0, max-statements:0*/
import React, { cloneElement } from "react";
import { VictoryAnimation } from "victory-core";

/**
 * Decorator for adding Spectacle transition support
 * to components' ReactCSSTransitionGroup lifecycle functions.
 * @param {class} target The class to be decorated as Transitionable
 * @returns {object} The transition animation lifecyle functions
 */
var Transitionable = function Transitionable(target) {
  var transitionable = {
    componentWillEnter: function componentWillEnter(callback) {
      this.setState({ transitioning: false, reverse: false, z: 1 });
      this.routerCallback(callback);
    },
    componentWillAppear: function componentWillAppear(callback) {
      this.setState({ transitioning: false, reverse: false, z: 1 });
      this.routerCallback(callback);
    },
    componentWillLeave: function componentWillLeave(callback) {
      this.setState({ transitioning: true, reverse: true, z: "" });
      this.routerCallback(callback);
    },
    routerCallback: function routerCallback(callback) {
      var _props = this.props,
          transition = _props.transition,
          transitionDuration = _props.transitionDuration;

      if (transition.length > 0) {
        setTimeout(function () {
          return callback();
        }, transitionDuration);
      } else {
        callback();
      }
    },
    transitionDirection: function transitionDirection() {
      var _props2 = this.props,
          slideIndex = _props2.slideIndex,
          lastSlide = _props2.lastSlide;

      var slide = this.context.store.getState().route.slide || 0;
      return this.state.reverse ? slideIndex > slide : slideIndex > lastSlide;
    },
    getTransitionStyles: function getTransitionStyles() {
      var transition = this.props.transition;
      var _state = this.state,
          transitioning = _state.transitioning,
          z = _state.z;


      var styles = { zIndex: z };
      var transformValue = "";

      if (transition.indexOf("fade") !== -1) {
        styles = _extends({}, styles, { opacity: transitioning ? 0 : 1 });
      }

      if (transition.indexOf("zoom") !== -1) {
        transformValue += " scale(" + (transitioning ? 0.1 : 1.0) + ")";
      }

      if (transition.indexOf("slide") !== -1) {
        var offset = this.transitionDirection() ? 100 : -100;
        transformValue += " translate3d(" + (transitioning ? offset : 0) + "%, 0, 0)";
      } else {
        transformValue += " translate3d(0px, 0px, 0px)";
      }

      if (transition.indexOf("spin") !== -1) {
        var angle = this.transitionDirection() ? 90 : -90;
        transformValue += " rotateY(" + (transitioning ? angle : 0) + "deg)";
      }

      return _extends({}, styles, { transform: transformValue });
    }
  };

  Object.assign(target.prototype, transitionable);
};

/**
 * Decorator for rendering the transition. Wraps the `render` function
 * output of a component with a `VictoryAnimation` component that performs
 * the transition animation.
 * @param {class} target The class of the decorated function
 * @param {string} name The name of the decorated function
 * @param {object} descriptor The descriptor of the decorated function
 * @returns {object} descriptor A modified descriptor of the wrapped
 * transitionable render function
 */
var renderTransition = function renderTransition(target, name, descriptor) {
  var originalFunc = descriptor.value;

  descriptor.value = function wrap() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var content = originalFunc.call.apply(originalFunc, [this].concat(args));
    var transitionDuration = this.props.transitionDuration;

    return React.createElement(
      VictoryAnimation,
      {
        data: this.getTransitionStyles(),
        duration: transitionDuration,
        easing: "quadInOut"
      },
      function (animatableStyles) {
        return cloneElement(content, {
          style: [].concat(content.props.style, [animatableStyles])
        });
      }
    );
  };

  return descriptor;
};

export { Transitionable, renderTransition };