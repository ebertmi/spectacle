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
import { shallow, mount } from "enzyme";
import { Transitionable, renderTransition } from "./transitionable";
import { VictoryAnimation } from "victory-core";

var ViewMock = Transitionable(_class = (_class2 = function (_Component) {
  _inherits(ViewMock, _Component);

  function ViewMock() {
    var _temp, _this, _ret;

    _classCallCheck(this, ViewMock);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = { transitioning: true }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  ViewMock.prototype.render = function render() {
    return React.createElement(
      "div",
      null,
      "Hello World!"
    );
  };

  return ViewMock;
}(Component), (_applyDecoratedDescriptor(_class2.prototype, "render", [renderTransition], Object.getOwnPropertyDescriptor(_class2.prototype, "render"), _class2.prototype)), _class2)) || _class;

describe("@renderTransition", function () {
  it("should wrap the view component in a VictoryAnimation component", function () {
    var wrapper = shallow(React.createElement(ViewMock, { transition: [] }));
    expect(wrapper.type()).toBe(VictoryAnimation);
  });
});

describe("@Transitionable", function () {
  afterEach(function () {
    jest.resetAllMocks();
  });

  it("should add ReactCSSTransitionGroup lifecycle functions to the decorated class.", function () {
    expect(ViewMock.prototype.componentWillEnter).toBeDefined();
    expect(ViewMock.prototype.componentWillAppear).toBeDefined();
    expect(ViewMock.prototype.componentWillLeave).toBeDefined();
  });

  it("should call getTransitionStyles to get the transition styles when rendered.", function () {
    var wrapper = mount(React.createElement(ViewMock, { transition: [] }));
    wrapper.instance().getTransitionStyles = jest.fn();
    wrapper.update();
    expect(wrapper.instance().getTransitionStyles).toHaveBeenCalled();
  });
});