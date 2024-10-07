import React from "react";
import { StyleSheet, Text, View } from "react-native";
import NavigationBar from "./NavigatieBar";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Map Screen</Text>
      <Text style={styles.bodyText}>
        Here, you can explore the campus and find directions to your classes and
        important facilities.
      </Text>

      {/*NavigationBar aanroepen*/}
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#2e8b57",
  },
  bodyText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
  },
});

export default MapScreen;
