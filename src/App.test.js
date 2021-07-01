import React from "react";
import { shallow } from "enzyme";
import App, { DEFAULT_PLAYERS_AMOUNT, MAX_PLAYERS_AMOUNT } from "./App";
import { CardHands } from "./CardHands";

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
  it("render number of round", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("h1").at(0).prop("children")).toEqual([
      "Played ",
      0,
      " time",
      "",
    ]);
  });
  it("should render CardHands with correct props", () => {
    const wrapper = shallow(<App />);
    const CardHandsComponent = wrapper.find(CardHands);
    expect(CardHandsComponent).toHaveLength(1);
    expect(CardHandsComponent.props()).toEqual(
      expect.objectContaining({ round: 0, playersAmount: 2 })
    );
  });
});
