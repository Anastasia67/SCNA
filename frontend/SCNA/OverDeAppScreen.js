// OverDeAppScreen.js
import React from "react";
import { StyleSheet, Text, View, } from "react-native";
import NavigationBar from "./NavigatieBar";

const OverDeAppScreen = () => {
  return (
    <View style={styles.container}>
      {/* Hoofdmenu-items */}
      <View style={styles.menuContainer}>
        <Text style={styles.headerText}>Over de app</Text>
        <Text style={styles.menuItem}>Versie-informatie</Text>
        <Text style={styles.menuItem}>Partners</Text>
        <Text style={styles.menuItem}>Gebruikersvoorwaarden</Text>
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

export default OverDeAppScreen;
