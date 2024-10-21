// Meer.js
import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import NavigationBar from "./MainNavigatieBar";

const MeerScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Hoofdmenu-items */}
        <View style={styles.menuContainer}>
          <Text style={styles.headerText}>Over de app</Text>
          <Text style={styles.menuItem}>Versie-informatie</Text>
          <Text style={styles.menuItem}>Partners</Text>
          <Text style={styles.menuItem}>Gebruikersvoorwaarden</Text>

          <Text style={styles.headerText}>Hulp en ondersteuning</Text>
          <Text style={styles.menuItem}>Veel gestelde vragen</Text>
          <Text style={styles.menuItem}>Feedback geven</Text>

          <Text style={styles.headerText}>Instellingen</Text>
          <Text style={styles.menuItem}>Taalopties</Text>
          <Text style={styles.menuItem}>Themakeuzen</Text>
        </View>
      </ScrollView>

      {/* NavigationBar aanroepen */}
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
  },
  scrollViewContent: {
    padding: 20,
    alignItems: "center",
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

export default MeerScreen;
