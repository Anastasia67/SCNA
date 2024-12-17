//auth.test.js
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react-native";
import LoginScreen from "../LoginScreen";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

beforeAll(() => {
  jest.spyOn(console, "error").mockImplementation(() => {});
  jest.spyOn(console, "log").mockImplementation(() => {});
});

afterAll(() => {
  console.error.mockRestore();
  console.log.mockRestore();
});

// Mock Firebase Authentication
jest.mock("firebase/auth", () => ({
  signInWithEmailAndPassword: jest.fn(),
}));

jest.mock("../firebaseConfig", () => ({
  auth: {}, // Mock the auth instance
}));

describe("LoginScreen Tests", () => {
  it("logs in a user with correct credentials", async () => {
    // Mock successful login response
    signInWithEmailAndPassword.mockResolvedValue({
      user: {
        uid: "mock-uid",
        email: "test@example.com",
      },
    });

    const mockNavigation = { navigate: jest.fn() };

    const { getByPlaceholderText, getByText } = render(
      <LoginScreen navigation={mockNavigation} />
    );

    // Fill in email and password fields
    fireEvent.changeText(getByPlaceholderText("E-mail"), "test@example.com");
    fireEvent.changeText(getByPlaceholderText("Password"), "password123");

    // Press the login button
    fireEvent.press(getByText("Sign in"));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "test@example.com",
        "password123"
      );
      expect(mockNavigation.navigate).toHaveBeenCalledWith("Map", {
        user: {
          uid: "mock-uid",
          email: "test@example.com",
          displayName: undefined,
          photoURL: undefined,
        },
      });
    });
  }, 10000); // Set timeout to 10 seconds instead standard 5

  it("handles invalid login credentials", async () => {
    // Mock rejected login
    signInWithEmailAndPassword.mockRejectedValue(
      new Error("Invalid credentials")
    );

    const mockNavigation = { navigate: jest.fn() };

    const { getByPlaceholderText, getByText } = render(
      <LoginScreen navigation={mockNavigation} />
    );

    // Fill in email and password fields
    fireEvent.changeText(getByPlaceholderText("E-mail"), "wrong@example.com");
    fireEvent.changeText(getByPlaceholderText("Password"), "wrongpassword");

    // Press the login button
    fireEvent.press(getByText("Sign in"));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "wrong@example.com",
        "wrongpassword"
      );
    });
  });
});
