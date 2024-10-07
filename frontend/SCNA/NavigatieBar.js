// NavigationBar.js
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const NavigationBar = () => (
  <View style={styles.navigationBar}>
    <View style={styles.navItem}>
      <Image source={require("./assets/Route.png")} style={styles.logo} />
      <Text style={styles.navText}>Routes</Text>
    </View>
    <View style={styles.navItem}>
      <Image source={require("./assets/Map.png")} style={styles.logo} />
      <Text style={styles.navText}>Map</Text>
    </View>
    <View style={styles.navItem}>
      <Image source={require("./assets/Meer.png")} style={styles.logo} />
      <Text style={styles.navText}>Meer</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  navigationBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
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
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  logo: {
    width: 42,
    height: 42,
    resizeMode: "contain",
    marginBottom: 2,
  },
});

export default NavigationBar;
