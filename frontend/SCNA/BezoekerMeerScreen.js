// BezoekerMeerScreen.js
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import NavigationBar from "./NavigatieBar";
import { useNavigation } from "@react-navigation/native";

const BezoekerMeerScreen = () => {
  const navigation = useNavigation();

  const handleMenuPress = (item) => {
    console.log(`${item} pressed`);

    switch (item) {
      case "OverDeApp":
        navigation.navigate("BOverDeAppScreen");
        break;
      case "Hulp":
        navigation.navigate("BHulpScreen");
        break;
      case "Instellingen":
        navigation.navigate("BInstellingen", { fromMeer: true });
        break;
      default:
        console.log("Unknown item pressed");
    }
  };

  return (
    <View style={styles.container}>
      {/* Hoofdmenu-items */}
      <View style={styles.menuContainer}>
        <Text style={styles.headerText}>Over de app</Text>
        <TouchableOpacity onPress={() => handleMenuPress("OverDeApp")}>
          <Text style={styles.menuItem}>Versie-informatie</Text>
          <Text style={styles.menuItem}>Partners</Text>
          <Text style={styles.menuItem}>Gebruikersvoorwaarden</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>Hulp en ondersteuning</Text>
        <TouchableOpacity onPress={() => handleMenuPress("Hulp")}>
          <Text style={styles.menuItem}>Veel gestelde vragen</Text>
          <Text style={styles.menuItem}>Feedback geven</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>Instellingen</Text>
        <TouchableOpacity onPress={() => handleMenuPress("Instellingen")}>
          <Text style={styles.menuItem}>Taalopties</Text>
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
