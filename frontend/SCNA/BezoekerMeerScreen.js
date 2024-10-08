// BezoekerMeerScreen.js
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import NavigationBar from "./NavigatieBar";
import { useNavigation } from "@react-navigation/native";

const BezoekerMeerScreen = () => {
  const navigation = useNavigation();

  const handleMenuPress = (item) => {
    console.log(`${item} pressed`);

    // Define navigation actions based on the pressed item
    switch (item) {
      case "Versie-informatie":
        navigation.navigate("BOverDeAppScreen"); // Replace with your screen name
        break;
      case "Partners":
        navigation.navigate("BOverDeAppScreen"); // Replace with your screen name
        break;
      case "Gebruikersvoorwaarden":
        navigation.navigate("BOverDeAppScreen"); // Replace with your screen name
        break;
      case "Veel gestelde vragen":
        navigation.navigate("BHulpScreen"); // Replace with your screen name
        break;
      case "Feedback geven":
        navigation.navigate("BHulpScreen"); // Replace with your screen name
        break;
      case "Taalopties":
        navigation.navigate("BInstellingen"); // Replace with your screen name
        break;
      case "Themakeuzen":
        navigation.navigate("BInstellingen"); // Replace with your screen name
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
        <TouchableOpacity onPress={() => handleMenuPress("Versie-informatie")}>
          <Text style={styles.menuItem}>Versie-informatie</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress("Partners")}>
          <Text style={styles.menuItem}>Partners</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleMenuPress("Gebruikersvoorwaarden")}
        >
          <Text style={styles.menuItem}>Gebruikersvoorwaarden</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>Hulp en ondersteuning</Text>
        <TouchableOpacity
          onPress={() => handleMenuPress("Veel gestelde vragen")}
        >
          <Text style={styles.menuItem}>Veel gestelde vragen</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress("Feedback geven")}>
          <Text style={styles.menuItem}>Feedback geven</Text>
        </TouchableOpacity>

        <Text style={styles.headerText}>Instellingen</Text>
        <TouchableOpacity onPress={() => handleMenuPress("Taalopties")}>
          <Text style={styles.menuItem}>Taalopties</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleMenuPress("Themakeuzen")}>
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
