import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import LoginScreen from "../LoginScreen";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

// Verhoog de Jest-time-out voor alle tests
jest.setTimeout(15000);

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {}); // Onderdruk fouten tijdens tests
  jest.spyOn(console, "log").mockImplementation(() => {}); // Onderdruk logs tijdens tests
});

afterAll(() => {
  console.error.mockRestore();
  console.log.mockRestore();
});

// Reset alle mocks vóór elke test
beforeEach(() => {
  jest.clearAllMocks();
});

// Mock Firebase Authentication
jest.mock("firebase/auth", () => {
  const originalModule = jest.requireActual("firebase/auth");
  return {
    ...originalModule,
    signInWithEmailAndPassword: jest.fn(),
  };
});

jest.mock("../firebaseConfig", () => ({
  auth: {}, // Mock het auth-object
}));

describe("LoginScreen Tests", () => {
  it("logs in a user with correct credentials", async () => {
    console.log("Start test: login with correct credentials");

    // Mock een succesvolle login-respons
    signInWithEmailAndPassword.mockResolvedValue({
      user: {
        uid: "mock-uid",
        email: "test@example.com",
      },
    });

    const mockNavigation = { navigate: jest.fn() };

    const { getByPlaceholderText, getByText } = render(
      React.createElement(LoginScreen, { navigation: mockNavigation })
    );

    // Vul e-mail en wachtwoord in
    fireEvent.changeText(getByPlaceholderText("E-mail"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Password"), "password123");

    // Klik op de inlogknop
    fireEvent.press(getByText("Sign in"));

    // Controleer dat de mock is aangeroepen met de juiste waarden
    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "test@example.com",
        "password123"
      );
    });

    // Controleer dat de gebruiker wordt doorgestuurd naar de juiste pagina
    expect(mockNavigation.navigate).toHaveBeenCalledWith("Map", {
      user: {
        uid: "mock-uid",
        email: "test@example.com",
        displayName: undefined,
        photoURL: undefined,
      },
    });

    console.log("Test succesvol: login met correcte credentials");
  });

  it("handles invalid login credentials", async () => {
    console.log("Start test: invalid credentials");

    // Mock een foutmelding bij onjuiste login
    signInWithEmailAndPassword.mockRejectedValue(
      new Error("Invalid credentials")
    );

    const mockNavigation = { navigate: jest.fn() };

    const { getByPlaceholderText, getByText, getByTestId } = render(
      React.createElement(LoginScreen, { navigation: mockNavigation })
    );

    // Vul onjuiste e-mail en wachtwoord in
    fireEvent.changeText(getByPlaceholderText("E-mail"), "wrong@example.com");
    fireEvent.changeText(getByPlaceholderText("Password"), "wrongpassword");

    // Klik op de inlogknop
    fireEvent.press(getByText("Sign in"));

    // Controleer dat de mock is aangeroepen
    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "wrong@example.com",
        "wrongpassword"
      );
    });

    // Controleer dat de foutmelding wordt weergegeven en de juiste tekst bevat
    await waitFor(() => {
      const errorMessage = getByTestId("error-message");
      expect(errorMessage).not.toBeNull();
      expect(errorMessage.props.children).toBe("Invalid credentials");
    });

    console.log("Test succesvol: invalid credentials");
  });
});
