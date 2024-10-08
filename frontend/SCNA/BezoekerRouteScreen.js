// BezoekerRouteScreen.js
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Picker } from "@react-native-picker/picker"; // dropdown
import NavigationBar from "./NavigatieBar";

const BezoekerRouteScreen = ({ navigation }) => {
  // Zorg ervoor dat navigation prop is toegevoegd
  const [selectedBuilding, setSelectedBuilding] = useState("");

  return (
    <View style={styles.container}>
      {/* Search Bars */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Jouw locatie"
            placeholderTextColor="#888"
          />
          <Icon name="search" size={20} color="#888" style={styles.icon} />
        </View>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Waar wil je heen?"
            placeholderTextColor="#888"
          />
          <Icon name="search" size={20} color="#888" style={styles.icon} />
        </View>
      </View>

      {/* Dropdown for building selection */}
      <Text style={styles.label}>Gebouw</Text>
      <View style={styles.dropdownContainer}>
        <Picker
          selectedValue={selectedBuilding}
          style={styles.picker}
          onValueChange={(itemValue) => setSelectedBuilding(itemValue)}
        >
          <Picker.Item label="Selecteer een gebouw" value="" />
          <Picker.Item label="Gebouw A" value="gebouwA" />
          <Picker.Item label="Gebouw B" value="gebouwB" />
          <Picker.Item label="Gebouw C" value="gebouwC" />
          <Picker.Item label="Gebouw D" value="gebouwD" />
          <Picker.Item label="Gebouw E" value="gebouwE" />
          <Picker.Item label="Gebouw F" value="gebouwF" />
          <Picker.Item label="Gebouw G" value="gebouwG" />
          <Picker.Item label="Gebouw H" value="gebouwH" />
          <Picker.Item label="Gebouw S" value="gebouwS" />
          <Picker.Item label="Gebouw T" value="gebouwT" />
          <Picker.Item label="Gebouw X" value="gebouwX" />
          <Picker.Item label="Gebouw Z" value="gebouwZ" />
        </Picker>
      </View>

      <View style={styles.searchContainerKlas}>
        <Text style={styles.label}>Lokaal/Klas</Text>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder=""
            placeholderTextColor="#888"
          />
          <Icon name="search" size={20} color="#888" style={styles.icon} />
        </View>
      </View>

      <TouchableOpacity
        style={styles.routeButton}
        onPress={() => navigation.navigate("RouteScreen")} // Vervang "RouteScreen" door het daadwerkelijke scherm waar je naartoe wilt navigeren
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
    marginBottom: 20,
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
    backgroundColor: "#B8D061",
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginTop: 120,
    width: 275,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default BezoekerRouteScreen;
