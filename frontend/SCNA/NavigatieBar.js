// NavigatieBar.js
import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const NavigationBar = () => {
  const navigation = useNavigation();

  const handlePress = (route) => {
    const currentRoute =
      navigation.getState().routes[navigation.getState().index].name;

    if (currentRoute !== route) {
      navigation.navigate(route);
    }
  };

  return (
    <View style={styles.navigationBar}>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handlePress("BezoekerRoute")}
      >
        <Image source={require("./assets/Route.png")} style={styles.logo} />
        <Text style={styles.navText}>Routes</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handlePress("BezoekerMap")}
      >
        <Image source={require("./assets/Map.png")} style={styles.logo} />
        <Text style={styles.navText}>Map</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.navItem}
        onPress={() => handlePress("BezoekerMeer")}
      >
        <Image source={require("./assets/Meer.png")} style={styles.logo} />
        <Text style={styles.navText}>Meer</Text>
      </TouchableOpacity>
    </View>
  );
};

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
