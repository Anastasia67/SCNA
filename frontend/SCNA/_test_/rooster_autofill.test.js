import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import RoosterScreen from "../Rooster"; // Pas het pad aan indien nodig
import { useNavigation } from "@react-navigation/native";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useNavigation: jest.fn(), // Mock de `useNavigation`-hook
  };
});

describe("Rooster Screen Navigation", () => {
  it("navigates to Route screen with pre-filled data", () => {
    const mockedNavigate = jest.fn();
    useNavigation.mockReturnValue({ navigate: mockedNavigate });

    const { getByText } = render(
      <NavigationContainer>
        <RoosterScreen />
      </NavigationContainer>
    );

    // Gebruik een bestaande titel in de lijst
    const sampleTitle = "Voorlichting projectbegin"; // Tekst uit de gegenereerde data
    fireEvent.press(getByText(sampleTitle));

    // Simuleer het klikken op de "Route Maken"-knop
    fireEvent.press(getByText("Route Maken"));

    // Controleer of `navigate` correct is aangeroepen
    expect(mockedNavigate).toHaveBeenCalledWith("Route", {
      building: "X",
      classroom: "0.13",
    });
  });
});
