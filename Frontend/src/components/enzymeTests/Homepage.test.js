import React from "react";
import { shallow, mount, render } from "../enzyme";
// import Login from '../components/Common/Login/Login'
import LandingPage from "../components/Common/LandingPage/LandingPage";
describe("Landing Page Test Suite", () => {
  it("should render the form", () => {
    const wrapper = shallow(<LandingPage />);

    expect(wrapper.find("form").exists()).toBe(true);
    expect(wrapper.find("button").exists()).toBe(true);
    expect(wrapper.find("input").exists()).toBe(true);
  });
});
