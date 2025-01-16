// bezoeker_navbar.test.js
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import NavigationBar from "../NavigatieBar"; // Pas het pad aan indien nodig.
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: jest.fn(),
  };
});

describe("NavigationBar Component", () => {
  const mockNavigate = jest.fn();
  const mockReplace = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    useNavigation.mockReturnValue({
      navigate: mockNavigate,
      replace: mockReplace,
      getState: jest.fn(() => ({
        routes: [
          { name: "BezoekerRoute" },
          { name: "BezoekerMap" },
          { name: "BezoekerMeer" },
        ],
        index: 0, // Simuleert dat de huidige route 'BezoekerRoute' is
      })),
    });
  });

  it("navigates to 'BezoekerRoute' when the first button is pressed", () => {
    const { getByText } = render(<NavigationBar />);

    fireEvent.press(getByText("Routes"));
    expect(mockReplace).not.toHaveBeenCalled(); // Al op 'BezoekerRoute'
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it("navigates to 'BezoekerMap' when the second button is pressed", () => {
    const { getByText } = render(<NavigationBar />);

    fireEvent.press(getByText("Map"));
    expect(mockNavigate).toHaveBeenCalledWith("BezoekerMap");
  });

  it("navigates to 'BezoekerMeer' when the third button is pressed", () => {
    const { getByText } = render(<NavigationBar />);

    fireEvent.press(getByText("Meer"));
    expect(mockReplace).toHaveBeenCalledWith("BezoekerMeer");
  });

  it("does not navigate if the current route matches the target route", () => {
    const { getByText } = render(<NavigationBar />);

    fireEvent.press(getByText("Routes"));
    expect(mockNavigate).not.toHaveBeenCalled();
    expect(mockReplace).not.toHaveBeenCalled();
  });
});
