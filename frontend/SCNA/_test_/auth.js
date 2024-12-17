//auth.js
import { render, fireEvent } from "@testing-library/react-native";
import React from "react";
import { Text, Button } from "react-native";
import auth from "@react-native-firebase/auth";

// Mocked component example
const LoginComponent = () => {
  const handleLogin = async () => {
    try {
      const userCredential = await auth().signInWithEmailAndPassword(
        "test@example.com",
        "password123"
      );
      console.log("User:", userCredential.user.email);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <>
      <Button title="Login" onPress={handleLogin} />
      <Text>Login Component</Text>
    </>
  );
};

// Test
describe("Firebase Authentication", () => {
  it("logs in a user with correct credentials", async () => {
    const { getByText } = render(<LoginComponent />);

    const loginButton = getByText("Login");

    await fireEvent.press(loginButton);

    expect(auth().signInWithEmailAndPassword).toHaveBeenCalledWith(
      "test@example.com",
      "password123"
    );
  });

  it("handles invalid login credentials", async () => {
    auth().signInWithEmailAndPassword.mockRejectedValue(
      new Error("Invalid credentials")
    );

    const { getByText } = render(<LoginComponent />);

    const loginButton = getByText("Login");

    await fireEvent.press(loginButton);

    expect(auth().signInWithEmailAndPassword).toHaveBeenCalled();
  });
});
