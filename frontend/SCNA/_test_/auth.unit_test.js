//auth.unit_test.js
import auth from "@react-native-firebase/auth";

describe("Firebase Authentication Mock Test", () => {
  it("should sign in a user with correct credentials", async () => {
    const user = await auth().signInWithEmailAndPassword(
      "test@example.com",
      "password123"
    );

    expect(user.user.uid).toBe("mock-uid");
    expect(user.user.email).toBe("test@example.com");
  });

  it("should throw an error for invalid credentials", async () => {
    await expect(
      auth().signInWithEmailAndPassword("wrong@example.com", "wrongpassword")
    ).rejects.toThrow("Invalid credentials");
  });
});
