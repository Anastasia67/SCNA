// Route.js
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker"; // dropdown
import NavigationBar from "./MainNavigatieBar";

const RouteScreen = ({ navigation, route }) => {
  const [selectedBuilding, setSelectedBuilding] = useState("");
  const [classroom, setClassroom] = useState("");

  // Haal gebouw en klas op van de route parameters als ze bestaan
  useEffect(() => {
    if (route.params?.building) {
      setSelectedBuilding(route.params.building);
    }
    if (route.params?.classroom) {
      setClassroom(route.params.classroom);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      {/* Dropdown for building selection */}
      <Text style={styles.label}>Gebouw</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedBuilding}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedBuilding(itemValue)}
        >
          <Picker.Item label="Selecteer een gebouw" value="" />
          <Picker.Item label="Gebouw A" value="A" />
          <Picker.Item label="Gebouw B" value="B" />
          <Picker.Item label="Gebouw C" value="C" />
          <Picker.Item label="Gebouw D" value="D" />
          <Picker.Item label="Gebouw E" value="E" />
          <Picker.Item label="Gebouw F" value="F" />
          <Picker.Item label="Gebouw G" value="G" />
          <Picker.Item label="Gebouw H" value="H" />
          <Picker.Item label="Gebouw S" value="S" />
          <Picker.Item label="Gebouw T" value="T" />
          <Picker.Item label="Gebouw X" value="X" />
          <Picker.Item label="Gebouw Z" value="Z" />
        </Picker>
      </View>

      <View style={styles.searchContainerKlas}>
        <Text style={styles.label}>Lokaal/Klas</Text>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder=""
            placeholderTextColor="#888"
            value={classroom} // Stel de waarde in op classroom state
            onChangeText={(text) => setClassroom(text)}
          />
          <Icon name="search" size={20} color="#888" style={styles.icon} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.roosterButton}
        onPress={() => navigation.navigate("Rooster")}
      >
        <Text style={styles.buttonText}>Rooster</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.routeButton}
        onPress={() => navigation.navigate("RouteScreen")} // Vervang "RouteScreen" voor echte navigatie
      >
        <Text style={styles.buttonText}>Route Maken</Text>
      </TouchableOpacity>

      {/* NavigationBar aanroepen */}
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f0f8ff",
    padding: 20,
  },
  searchContainer: {
    width: "100%",
    marginBottom: 20,
    marginTop: 20,
  },
  searchContainerKlas: {
    width: "100%",
    marginBottom: 20,
    marginTop: 30,
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#fff",
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    height: 50,
    paddingHorizontal: 10,
    color: "#333",
  },
  icon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#2e8b57",
    alignSelf: "flex-start",
    marginBottom: 10,
    marginTop: "5%",
  },
  dropdownContainer: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 20,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  picker: {
    height: 50,
    width: "100%",
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
  routeButton: {
    backgroundColor: "#71B682",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 50,
    width: "80%",
  },
  roosterButton: {
    backgroundColor: "#71B682",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: "30%",
    width: "80%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default RouteScreen;
