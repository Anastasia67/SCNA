// LoginScreen.js
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Linking,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Import Firebase Authentication

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      console.log("Login successful:", user);

      navigation.navigate("Map", {
        user: {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      Alert.alert("Login Failed", error.message);
    }
  };

  return (
    <View style={styles.container}>
      {/* Login Form */}
      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Wachtwoord"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Sign in</Text>
        </TouchableOpacity>
        <Text style={styles.helperText}>
          Sign in with your Windesheim account:
        </Text>
        <Text style={styles.exampleText}>
          Students: s1234567@student.windesheim.nl{"\n"}
          Employees: p1234567@windesheim.nl
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://password.windesheim.nl")}
        >
          Forgot your password? Go to https://password.windesheim.nl
        </Text>
        <Text style={styles.importantText}>
          Important:
          {"\n"}• Close your browser to sign out
          {"\n"}• Verify that this URL starts with https://sts.windesheim.nl/
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://serviceplein.windesheim.nl")}
        >
          Need help? Visit https://serviceplein.windesheim.nl
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#4CAF50",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    color: "white",
    fontSize: 16,
    marginRight: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  formContainer: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 50,
    backgroundColor: "white",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: "#4CAF50",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  helperText: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
  },
  exampleText: {
    fontSize: 14,
    color: "#555",
    marginBottom: 15,
  },
  link: {
    fontSize: 14,
    color: "#4CAF50",
    textDecorationLine: "underline",
    marginBottom: 15,
  },
  importantText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 15,
  },
});

export default LoginScreen;
