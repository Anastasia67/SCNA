// BezoekerMeerScreen.js
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Switch,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import NavigationBar from "./NavigatieBar";

const BezoekerMeerScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {/* Hoofdmenu-items */}
        <View style={styles.menuContainer}>
          <Text style={styles.headerText}>Resultaten weergave</Text>
          <View style={styles.row}>
            <Text style={styles.menuItem}>HBO-ICT</Text>
            <Switch value={true} style={styles.switch} />
          </View>

          <Text style={styles.headerText}>Rooster weergave</Text>
          <View style={styles.row}>
            <TouchableOpacity style={styles.addButton}>
              <Ionicons name="add" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.menuItem}></Text>
            <Text style={styles.menuItem}></Text>
            <Text style={styles.menuItem}></Text>
            <Text style={styles.menuItem}>Toon:</Text>
          </View>

          {/* Voorbeeld van Rooster Weergave-items */}
          <View style={styles.row}>
            <View style={[styles.colorBar, { backgroundColor: "#8bc34a" }]} />
            <Text style={styles.menuItem}>Klas WFHBOICT21.SEA</Text>
            <Switch value={true} style={styles.switch} />
            <Ionicons name="chevron-forward" size={24} color="green" />
          </View>

          <View style={styles.row}>
            <View style={[styles.colorBar, { backgroundColor: "#e91e63" }]} />
            <Text style={styles.menuItem}>Klas WFHBOICT22.VX</Text>
            <Switch value={false} style={styles.switch} />
            <Ionicons name="chevron-forward" size={24} color="green" />
          </View>

          <View style={styles.row}>
            <View style={[styles.colorBar, { backgroundColor: "#ff9800" }]} />
            <Text style={styles.menuItem}>Klas ICTCAAa</Text>
            <Switch value={true} style={styles.switch} />
            <Ionicons name="chevron-forward" size={24} color="green" />
          </View>

          <Text style={styles.headerText}>Toevoegen aan agenda</Text>
          <Text style={styles.bodyText}>
            Je kunt je activiteiten toevoegen aan je agenda-app. Door je te
            abonneren op je persoonlijke agenda worden je activiteiten zichtbaar
            in je agenda-app en worden ze automatisch bijgewerkt als er
            roosterwijzigingen zijn. Wijzigingen in de instellingen hierboven
            worden eveneens automatisch verwerkt. Hoe je activiteiten kunt
            toevoegen aan je agenda verschilt per apparaat en welke app je
            gebruikt voor je agenda. Als je op onderstaande knop klikt, krijg je
            een mail met een persoonlijke link en instructies voor de
            verschillende besturingssystemen en software/apps.
          </Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Verzend e-mail</Text>
          </TouchableOpacity>

          {/* Onderste tekst met versie-informatie */}
          <View style={styles.footer}>
            <Text style={styles.bodyText}>
              Deze instellingen lopen synchroon met wip.windesheim.nl.
            </Text>
            <Text style={styles.versionText}>Versie: 2.9.1</Text>
          </View>
        </View>
        <View style={styles.divider} />
        <View style={styles.divider} />
        <View style={styles.divider} />
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
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2e8b57",
    marginVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  menuItem: {
    fontSize: 18,
    flex: 1,
    color: "#333",
  },
  colorBar: {
    width: 5,
    height: 30,
    marginRight: 10,
  },
  switch: {
    marginHorizontal: 10,
  },
  toggleLabel: {
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 5,
  },
  addButton: {
    width: 40,
    height: 40,
    backgroundColor: "#4caf50",
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 15,
  },
  bodyText: {
    fontSize: 16,
    color: "#333",
    marginVertical: 15,
    textAlign: "left",
  },
  button: {
    backgroundColor: "#4caf50",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  footer: {
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    paddingTop: 10,
    marginTop: 20,
  },
  versionText: {
    fontSize: 14,
    color: "#666",
    textAlign: "left",
    marginTop: 5,
  },
  divider: {
    height: 3,
    backgroundColor: "#ccc",
    marginVertical: 15,
  },
});

export default BezoekerMeerScreen;
