const authMock = {
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
  createUserWithEmailAndPassword: jest.fn((email) => {
    return Promise.resolve({
      user: {
        uid: "new-user-id",
        email: email,
      },
    });
  }),
  signOut: jest.fn(() => Promise.resolve()),
};

export default () => authMock;
