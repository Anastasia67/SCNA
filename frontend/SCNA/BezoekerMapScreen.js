import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const MapScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Map Screen</Text>
      <Text style={styles.bodyText}>
        Here, you can explore the campus and find directions to your classes and
        important facilities.
      </Text>

      {/* navigatiebalk */}
      <View style={styles.navigationBar}>
        <View style={styles.navItem}>
          <Image
            source={require("./assets/logo-background.png")} // Zorg ervoor dat het juiste weg naar de afbeelding er is
            style={styles.logo}
          />
          <Text style={styles.navText}>Routes</Text>
        </View>
        <View style={styles.navItem}>
          <Image
            source={require("./assets/logo-background.png")} // Zorg ervoor dat het juiste weg naar de afbeelding er is
            style={styles.logo}
          />
          <Text style={styles.navText}>Map</Text>
        </View>
        <View style={styles.navItem}>
          <Image
            source={require("./assets/logo-background.png")} // Zorg ervoor dat het juiste weg naar de afbeelding er is
            style={styles.logo}
          />
          <Text style={styles.navText}>Meer</Text>
        </View>
      </View>
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
  navigationBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 90, // hoogte van de balk
    backgroundColor: "#71B682",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    color: "#black",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    width: 42,
    height: 42,
    resizeMode: "contain", // zorgt ervoor dat de afbeelding in de gegeven afmetingen past
    marginBottom: 2, // ruimte tussen logo en tekst
  },
});

export default MapScreen;
