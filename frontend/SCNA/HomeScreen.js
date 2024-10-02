import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require("./assets/logo-background.png")} // Zorg ervoor dat het juiste pad naar de afbeelding er is
          style={styles.logo}
        />
        <Text style={styles.welcomeText}>
          Welkom bij de Smart Campus Navigatie App!
        </Text>
      </View>
      <View style={styles.bottomSection}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.buttonText}>Login met school account</Text>
        </TouchableOpacity>

        <View style={styles.spacer} />

        <TouchableOpacity
          style={styles.bezoekerButton}
          onPress={() => alert("Deze functie is nog niet beschikbaar")}
        >
          <Text style={styles.buttonText}>Ga verder als een bezoeker</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 2,
    backgroundColor: "#71B682",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 80,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain", // Zorgt ervoor dat de afbeelding in de gegeven afmetingen past
    marginBottom: 20, // Ruimte tussen logo en tekst
  },
  welcomeText: {
    fontSize: 28,
    textAlign: "center",
    marginHorizontal: 20,
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 15,
  },
  spacer: {
    height: 20, // Ruimte tussen de knoppen
  },
  loginButton: {
    backgroundColor: "#B8D061",
    paddingVertical: 12, // Ruimte binnen de knop
    paddingHorizontal: 20,
    borderRadius: 22,
    width: 300,
  },
  bezoekerButton: {
    backgroundColor: "#B8D061",
    paddingVertical: 12, // Ruimte binnen de knop
    paddingHorizontal: 20,
    borderRadius: 22,
    width: 300,
  },
  buttonText: {
    color: "black",
    fontSize: 20,
    textAlign: "center",
  },
});

export default HomeScreen;
