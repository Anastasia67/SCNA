// navbar.test.js
import React from "react";
import { render, fireEvent, act } from "@testing-library/react-native";
import NavigationBar from "../MainNavigatieBar";
import { useNavigation } from "@react-navigation/native";

// Mock useNavigation
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

describe("NavigationBar", () => {
  let navigateMock;
  let replaceMock;

  beforeEach(() => {
    navigateMock = jest.fn();
    replaceMock = jest.fn();
    useNavigation.mockReturnValue({
      navigate: navigateMock,
      replace: replaceMock,
      getState: jest.fn(() => ({
        index: 0,
        routes: [{ name: "Route" }], // Initial route is "Route"
      })),
    });
  });

  it("navigates to 'Map' when Map button is pressed", () => {
    const { getByText } = render(<NavigationBar />);
    const mapButton = getByText("Map");

    act(() => {
      fireEvent.press(mapButton);
    });

    expect(navigateMock).toHaveBeenCalledTimes(1);
    expect(navigateMock).toHaveBeenCalledWith("Map");
    expect(replaceMock).not.toHaveBeenCalled();
  });

  it("replaces route with 'Meer' if current route is 'Route'", () => {
    const { getByText } = render(<NavigationBar />);
    const meerButton = getByText("Meer");

    act(() => {
      fireEvent.press(meerButton);
    });

    expect(replaceMock).toHaveBeenCalledTimes(1);
    expect(replaceMock).toHaveBeenCalledWith("Meer");
    expect(navigateMock).not.toHaveBeenCalled();
  });

  it("does not navigate or replace if the target route is the current route", () => {
    const { getByText } = render(<NavigationBar />);
    const routeButton = getByText("Routes");

    act(() => {
      fireEvent.press(routeButton);
    });

    expect(navigateMock).not.toHaveBeenCalled();
    expect(replaceMock).not.toHaveBeenCalled();
  });

  it("replaces route with 'Route' if current route is 'Meer'", () => {
    useNavigation.mockReturnValueOnce({
      navigate: navigateMock,
      replace: replaceMock,
      getState: jest.fn(() => ({
        index: 0,
        routes: [{ name: "Meer" }], // Current route is "Meer"
      })),
    });

    const { getByText } = render(<NavigationBar />);
    const routeButton = getByText("Routes");

    act(() => {
      fireEvent.press(routeButton);
    });

    expect(replaceMock).toHaveBeenCalledTimes(1);
    expect(replaceMock).toHaveBeenCalledWith("Route");
    expect(navigateMock).not.toHaveBeenCalled();
  });
});
