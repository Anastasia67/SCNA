import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import NavigationBar from "./MainNavigatieBar";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, Overlay } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState(null);
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      Alert.alert(
        "Weet u het zeker?",
        "Weet u zeker dat u terug wilt gaan?",
        [
          { text: "Annuleren", style: "cancel", onPress: () => {} },
          {
            text: "Terug",
            style: "destructive",
            onPress: () => navigation.dispatch(e.data.action),
          },
        ],
        { cancelable: true }
      );
    });

    const fetchLocation = async () => {
      // Vraag toestemming voor locatiegebruik
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert(
          "Toegang tot locatie geweigerd. Schakel locatie in om de kaart te gebruiken."
        );
        return;
      }

      // Haal huidige locatie op
      const location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      setUserLocation({ latitude, longitude });
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    };

    fetchLocation();

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Map Screen</Text>
      <Text style={styles.bodyText}>
        Hier kunt u de campus verkennen en de weg vinden naar uw lessen en
        belangrijke faciliteiten.
      </Text>

      {/* Voeg de MapView toe */}
      {region && (
        <MapView
          style={styles.map}
          region={region}
          showsUserLocation={true} // Toon de locatie van de gebruiker
        >
          {/* Voeg een marker toe voor de gebruikerslocatie */}
          {userLocation && (
            <Marker coordinate={userLocation} title="Jouw locatie" />
          )}
        </MapView>
      )}

      {/* NavigationBar aanroepen */}
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
  map: {
    width: "100%",
    height: 400,
    marginVertical: 20,
  },
});

export default MapScreen;
