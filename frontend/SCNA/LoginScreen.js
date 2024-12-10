// LoginScreen.js
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Alert,
  Image,
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
        <Image
          source={require("./assets/Windesheim_logo+pay-off_ZG_RGB-DEF.png")}
          style={styles.logo}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
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
          Students:{"\n"}
          s1234567@student.windesheim.nl{"\n"}
          {"\n"}
          Employees:{"\n"}
          p1234567@windesheim.nl
        </Text>
        <Text style={styles.linkHeader}>Forgot your password? Go to </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://password.windesheim.nl")}
        >
          https://password.windesheim.nl
        </Text>
        <Text style={styles.importantTextHeader}>Important: </Text>
        <Text style={styles.importantText}>
          • Close your browser to sign out{"\n"}• Verify that this URL starts
          with https://sts.windesheim.nl/
        </Text>
        <Text style={styles.linkHeader}>Need help? </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL("https://serviceplein.windesheim.nl")}
        >
          Visit https://serviceplein.windesheim.nl
        </Text>
        <Text style={styles.numberText}>• T 088-469 9079</Text>
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
  logo: {
    width: 150,
    height: 200,
    marginTop: -40,
    resizeMode: "contain", // Zorgt ervoor dat de afbeelding in de gegeven afmetingen past
  },
  loginButton: {
    backgroundColor: "#B8D061",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 22,
    width: 300,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 40,
  },
  loginButtonText: {
    color: "black",
    fontSize: 16,
    textAlign: "center",
  },
  helperText: {
    fontSize: 14,
    marginBottom: 5,
    color: "#333",
    fontWeight: "bold",
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
  linkHeader: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
  },
  importantTextHeader: {
    fontSize: 14,
    color: "#333",
    fontWeight: "bold",
  },
  importantText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 15,
  },
  numberText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 15,
    marginTop: -15,
  },
});

export default LoginScreen;
