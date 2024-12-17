//auth.unit_test.js
import auth from "@react-native-firebase/auth";

// Mock Firebase Auth
jest.mock("@react-native-firebase/auth", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    signInWithEmailAndPassword: jest.fn((email, password) => {
      if (email === "test@example.com" && password === "password123") {
        return Promise.resolve({
          user: {
            uid: "mock-uid",
            email: "test@example.com",
          },
        });
      } else {
        return Promise.reject(new Error("Invalid credentials"));
      }
    }),
  })),
}));

describe("Firebase Authentication Mock Test", () => {
  it("should sign in a user with correct credentials", async () => {
    const firebaseAuth = auth();
    const user = await firebaseAuth.signInWithEmailAndPassword(
      "test@example.com",
      "password123"
    );

    expect(user.user.uid).toBe("mock-uid");
    expect(user.user.email).toBe("test@example.com");
  });

  it("should throw an error for invalid credentials", async () => {
    const firebaseAuth = auth();

    await expect(
      firebaseAuth.signInWithEmailAndPassword(
        "wrong@example.com",
        "wrongpassword"
      )
    ).rejects.toThrow("Invalid credentials");
  });
});
