// BezoekerMeerScreen.js
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import NavigationBar from "./NavigatieBar";

const BezoekerMeerScreen = () => {
  // Functie om actie uit te voeren wanneer op een menu-item wordt geklikt
  const handleMenuPress = (item) => {
    console.log(`${item} pressed`); // Hier kun je navigatie of andere acties toevoegen
  };

  return (
    <View style={styles.container}>
      {/* Hoofdmenu-items */}
      <View style={styles.menuContainer}>
        <Text style={styles.headerText}>Over de app</Text>
        <TouchableOpacity onPress={() => handleMenuPress("Over de app")}>
          <Text style={styles.menuItem}>Versie-informatie</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress("Over de app")}>
          <Text style={styles.menuItem}>Partners</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress("Over de app")}>
          <Text style={styles.menuItem}>Gebruikersvoorwaarden</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>Hulp en ondersteuning</Text>
        <TouchableOpacity
          onPress={() => handleMenuPress("Hulp en ondersteuning")}
        >
          <Text style={styles.menuItem}>Veel gestelde vragen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMenuPress("Hulp en ondersteuning")}
        >
          <Text style={styles.menuItem}>Feedback geven</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>Instellingen</Text>
        <TouchableOpacity onPress={() => handleMenuPress("Instellingen")}>
          <Text style={styles.menuItem}>Taalopties</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress("Instellingen")}>
          <Text style={styles.menuItem}>Themakeuzen</Text>
        </TouchableOpacity>
      </View>

      {/* NavigationBar aanroepen */}
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#2e8b57",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 5,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  bodyText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
  menuContainer: {
    marginTop: 20,
    width: "100%",
  },
  menuItem: {
    fontSize: 18,
    color: "black",
    marginVertical: 10,
    textAlign: "left",
    padding: 10,
  },
});

export default BezoekerMeerScreen;
