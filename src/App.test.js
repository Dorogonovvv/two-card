import React from "react";
import { shallow } from "enzyme";
import App, { DEFAULT_PLAYERS_AMOUNT, MAX_PLAYERS_AMOUNT } from "./App";
import * as onDealClickModule from "./helpers/on-deal-click";
import { onDealClick } from "./helpers/on-deal-click";

describe("App component", () => {
  it("should render Deals button correctly", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("button")).toHaveLength(1);
    expect(wrapper.find("button").prop("children")).toBe("NEW DEAL");
  });
  it("should render players amount input with default value", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("input")).toHaveLength(1);
    expect(wrapper.find("input").prop("value")).toBe(DEFAULT_PLAYERS_AMOUNT);
  });
  it("players amount shouldn't be changed out of the ranges", () => {
    const wrapper = shallow(<App />);
    wrapper.find("input").prop("onChange")({ target: { value: 89 } });
    expect(wrapper.find("input").prop("value")).toBe(MAX_PLAYERS_AMOUNT);
  });
  it("check deal button click handler", () => {
    jest.spyOn(onDealClickModule, "onDealClick");
    const wrapper = shallow(<App />);
    wrapper.find("input").prop("onChange")({ target: { value: 89 } });
    wrapper.find("button").prop("onClick")();
    expect(onDealClickModule.onDealClick).toHaveBeenCalledWith(
      MAX_PLAYERS_AMOUNT
    );
  });
});
