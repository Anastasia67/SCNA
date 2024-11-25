import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import NavigationBar from "./MainNavigatieBar";
import { useNavigation } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
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

    const trackLocation = async () => {
      try {
        // Vraag toestemming voor locatiegebruik
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Locatie toestemming geweigerd",
            "Schakel locatie in om de kaart te gebruiken."
          );
          return;
        }

        // Start het volgen van de gebruiker
        await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 1000, // Update elke seconde
            distanceInterval: 1, // Update na 1 meter beweging
          },
          (location) => {
            const { latitude, longitude } = location.coords;
            setUserLocation({ latitude, longitude });
            setRegion({
              latitude,
              longitude,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            });
          }
        );
      } catch (error) {
        console.error("Locatiefout:", error);
        Alert.alert(
          "Fout bij ophalen locatie",
          "Er is een probleem opgetreden bij het ophalen van je locatie."
        );
      }
    };

    trackLocation();

    return () => {
      unsubscribe();
    };
  }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Voeg de MapView toe */}
      {region ? (
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
      ) : (
        <Text style={styles.loadingText}>Locatie wordt geladen...</Text>
      )}

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
  map: {
    flex: 1,
  },
  loadingText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
  },
});

export default MapScreen;