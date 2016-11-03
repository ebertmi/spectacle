function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, PropTypes } from "react";
import { findDOMNode } from "react-dom";
import findKey from "lodash/findKey";
import { connect } from "react-redux";
import { VictoryAnimation } from "victory-core";

var Appear = function (_Component) {
  _inherits(Appear, _Component);

  function Appear() {
    var _temp, _this, _ret;

    _classCallCheck(this, Appear);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      active: false
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Appear.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var state = nextProps.fragment;
    var slide = this.props.route.slide;
    var fragment = findDOMNode(this.fragmentRef);
    var key = findKey(state.fragments[slide], {
      id: parseInt(fragment.dataset.fid)
    });

    var shouldDisableAnimation = this.props.route.params.indexOf("export") !== -1 || this.props.route.params.indexOf("overview") !== -1;

    if (shouldDisableAnimation) {
      this.setState({ active: true });
      return;
    }

    if (slide in state.fragments && state.fragments[slide].hasOwnProperty(key)) {
      var active = state.fragments[slide][key].visible;
      this.setState({ active: active });
    }
  };

  Appear.prototype.render = function render() {
    var _this2 = this;

    var child = React.Children.only(this.props.children);
    var endValue = this.state.active ? 1 : 0;

    return React.createElement(
      VictoryAnimation,
      {
        data: { opacity: endValue },
        duration: 300,
        easing: "quadInOut"
      },
      function (_ref) {
        var opacity = _ref.opacity;
        return React.cloneElement(child, {
          className: "fragment",
          style: { opacity: opacity },
          ref: function ref(f) {
            _this2.fragmentRef = f;
          }
        });
      }
    );
  };

  return Appear;
}(Component);

Appear.propTypes = {
  children: PropTypes.node,
  route: PropTypes.object,
  style: PropTypes.object
};

Appear.contextTypes = {
  export: PropTypes.bool,
  overview: PropTypes.bool,
  slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

export default connect(function (state) {
  return state;
})(Appear);