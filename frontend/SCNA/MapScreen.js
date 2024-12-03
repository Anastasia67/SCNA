import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import NavigationBar from "./MainNavigatieBar";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

const MapScreen = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Access route to get the user param
  const { user } = route.params || {}; // Destructure the user param

  const [region, setRegion] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true); // State to manage welcome message visibility

  useEffect(() => {
    // Hide welcome message after 5 seconds
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 5000);

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, []);

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
      {/* Welcome message: only visible if showWelcomeMessage is true */}
      {showWelcomeMessage && user && (
        <Text style={styles.welcomeText}>Welkom!</Text>
      )}

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
  welcomeText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    margin: 10,
  },
});

export default MapScreen;
