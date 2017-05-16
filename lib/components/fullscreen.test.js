import React from "react";
import { mount } from "enzyme";
import { mountToJson } from "enzyme-to-json";
import Fullscreen from "./fullscreen";

describe("<Fullscreen />", function () {
  test("should render correctly.", function () {
    var context = { styles: { styles: { fullscreen: {} } } };
    var wrapper = mount(React.createElement(Fullscreen, null), { context: context });
    expect(mountToJson(wrapper)).toMatchSnapshot();
  });

  test("should toggle fullscreen when the button is selected.", function () {
    var context = { styles: { styles: { fullscreen: {} } } };
    var wrapper = mount(React.createElement(Fullscreen, null), { context: context });
    wrapper.instance().handleToggleFullScreen = jest.fn();
    wrapper.update();
    wrapper.find("svg").simulate("click");
    expect(wrapper.instance().handleToggleFullScreen).toHaveBeenCalledTimes(1);
  });
});