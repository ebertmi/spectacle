var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _class, _class2, _temp2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { cloneElement, Component, PropTypes } from "react";
import Radium from "radium";

var startTime = function startTime(date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var seconds = date.getSeconds();
  var ampm = hours >= 12 ? "PM" : "AM";
  hours %= 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? "0 " + minutes : minutes;
  seconds = seconds < 10 ? "0 " + seconds : seconds;
  var strTime = hours + " : " + minutes + " : " + seconds + " " + ampm;
  return strTime;
};

var Presenter = Radium(_class = (_temp2 = _class2 = function (_Component) {
  _inherits(Presenter, _Component);

  function Presenter() {
    var _temp, _this, _ret;

    _classCallCheck(this, Presenter);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      notes: {},
      time: startTime(new Date())
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Presenter.prototype.getChildContext = function getChildContext() {
    return {
      updateNotes: this.updateNotes.bind(this)
    };
  };

  Presenter.prototype.componentWillMount = function componentWillMount() {
    var _this2 = this;

    this.time = setInterval(function () {
      _this2.setState({
        time: startTime(new Date())
      });
    }, 1000);
  };

  Presenter.prototype.componentWillUnmount = function componentWillUnmount() {
    clearInterval(this.time);
  };

  Presenter.prototype.getCurrentSlide = function getCurrentSlide() {
    return this.context.store.getState().route.slide;
  };

  Presenter.prototype.updateNotes = function updateNotes(newNotes) {
    var notes = _extends({}, this.state.notes);
    notes[this.getCurrentSlide()] = newNotes;

    this.setState({ notes: notes });
  };

  Presenter.prototype._renderMainSlide = function _renderMainSlide() {
    var _props = this.props,
        slides = _props.slides,
        slide = _props.slide,
        hash = _props.hash,
        lastSlide = _props.lastSlide;

    var child = slides[slide];
    var presenterStyle = {
      position: "relative"
    };
    return cloneElement(child, {
      dispatch: this.props.dispatch,
      key: slide,
      hash: hash,
      export: this.props.route.params.indexOf("export") !== -1,
      print: this.props.route.params.indexOf("print") !== -1,
      slideIndex: slide,
      lastSlide: lastSlide,
      transition: [],
      transitionDuration: 0,
      presenterStyle: presenterStyle
    });
  };

  Presenter.prototype._renderNextSlide = function _renderNextSlide() {
    var _props2 = this.props,
        slides = _props2.slides,
        slide = _props2.slide,
        lastSlide = _props2.lastSlide;

    var presenterStyle = {
      position: "relative"
    };
    var endStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      margin: 0,
      color: "white"
    };
    var child = slides[parseInt(slide) + 1];
    return child ? cloneElement(child, {
      dispatch: this.props.dispatch,
      export: this.props.route.params.indexOf("export") !== -1,
      print: this.props.route.params.indexOf("print") !== -1,
      key: slide + 1,
      hash: child.props.id || slide + 1,
      slideIndex: slide + 1,
      lastSlide: lastSlide,
      transition: [],
      transitionDuration: 0,
      presenterStyle: presenterStyle,
      appearOff: true
    }) : React.createElement(
      "h1",
      { style: [endStyle] },
      "END"
    );
  };

  Presenter.prototype._renderNotes = function _renderNotes() {
    var notes = void 0;
    var currentSlide = this.getCurrentSlide();

    if (this.state.notes[currentSlide]) {
      notes = this.state.notes[currentSlide];
    } else {
      var child = this.props.slides[this.props.slide];
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
    var styles = {
      presenter: {
        height: "100%",
        width: "100%",
        display: "flex",
        flex: 1,
        flexDirection: "column"
      },
      header: {
        position: "absolute",
        display: "block",
        color: "white",
        width: "100%",
        height: "20%",
        textAlign: "center",
        padding: "20px 50px"
      },
      slideInfo: {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        float: "left",
        margin: 0,
        lineHeight: 1,
        display: "inline-block",
        fontSize: 28
      },
      clock: {
        position: "relative",
        top: "50%",
        transform: "translateY(-50%)",
        float: "right",
        margin: 0,
        lineHeight: 1,
        display: "inline-block",
        fontSize: 28
      },
      preview: {
        display: "flex",
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        flex: 1
      },
      main: {
        display: "inline-block",
        width: "50%",
        height: "60%",
        border: "2px solid white",
        padding: 20,
        margin: 20,
        position: "relative"
      },
      next: {
        display: "inline-block",
        width: "40%",
        height: "50%",
        border: "2px solid white",
        padding: 20,
        margin: 20,
        position: "relative"
      },
      notes: {
        position: "absolute",
        display: "block",
        color: "white",
        width: "100%",
        height: "20%",
        bottom: "0px",
        textAlign: "left",
        padding: "20px 50px",
        columnCount: "2",
        fontSize: "0.8em"
      }
    };
    return React.createElement(
      "div",
      { className: "spectacle-presenter", style: [styles.presenter] },
      React.createElement(
        "div",
        { style: styles.header },
        React.createElement(
          "h2",
          { style: styles.slideInfo },
          "Slide ",
          this.props.slide + 1,
          " of ",
          this.props.slides.length
        ),
        React.createElement(
          "h2",
          { style: styles.clock },
          this.state.time
        )
      ),
      React.createElement(
        "div",
        { style: styles.preview },
        React.createElement(
          "div",
          { className: "spectacle-presenter-main", style: [styles.main] },
          this._renderMainSlide()
        ),
        React.createElement(
          "div",
          { className: "spectacle-presenter-next", style: [styles.next] },
          this._renderNextSlide()
        )
      ),
      React.createElement(
        "div",
        { className: "spectacle-presenter-notes", style: [styles.notes] },
        this._renderNotes()
      )
    );
  };

  return Presenter;
}(Component), _class2.childContextTypes = {
  updateNotes: PropTypes.func
}, _temp2)) || _class;

export { Presenter as default };


Presenter.propTypes = {
  dispatch: PropTypes.func,
  hash: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  lastSlide: PropTypes.number,
  route: PropTypes.object,
  slide: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  slides: PropTypes.array
};

Presenter.contextTypes = {
  styles: PropTypes.object,
  store: PropTypes.object.isRequired
};