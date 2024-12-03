import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import NavigationBar from "./MainNavigatieBar";

import { useNavigation } from "@react-navigation/native";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import polyline from "@mapbox/polyline";

const MapScreen = () => {
  const navigation = useNavigation();
  const route = useRoute(); // Access route to get the user param
  const { user } = route.params || {}; // Destructure the user param

  const [region, setRegion] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState({
    latitude: 52.379189, // Example coordinates (Amsterdam)
    longitude: 4.899431,
  });
  const [routeCoords, setRouteCoords] = useState([]);
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

            // Fetch route data using OSRM
            fetchRoute({ latitude, longitude }, destination);
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

  const fetchRoute = async (origin, destination) => {
    try {
      const url = `http://router.project-osrm.org/route/v1/driving/${origin.longitude},${origin.latitude};${destination.longitude},${destination.latitude}?overview=full&geometries=polyline`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.routes.length) {
        const points = polyline.decode(data.routes[0].geometry);
        const coords = points.map(([latitude, longitude]) => ({
          latitude,
          longitude,
        }));
        setRouteCoords(coords);
      } else {
        Alert.alert("No Routes Found", "Could not fetch a route.");
      }
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Could not fetch the route.");
    }
  };

  return (
    <View style={styles.container}>
      {/* Add MapView */}
      {/* Welcome message: only visible if showWelcomeMessage is true */}
      {showWelcomeMessage && user && (
        <Text style={styles.welcomeText}>Welkom!</Text>
      )}

      {/* Voeg de MapView toe */}
      {region ? (
        <MapView
          style={styles.map}
          region={region}
          showsUserLocation={true} // Show user's location
        >
          {/* User location marker */}
          {userLocation && (
            <Marker coordinate={userLocation} title="Jouw locatie" />
          )}
          {/* Destination marker */}
          {destination && (
            <Marker coordinate={destination} title="Bestemming" />
          )}
          {/* Route Polyline */}
          {routeCoords.length > 0 && (
            <Polyline
              coordinates={routeCoords}
              strokeWidth={5}
              strokeColor="blue"
            />
          )}
        </MapView>
      ) : (
        <Text style={styles.loadingText}>Locatie wordt geladen...</Text>
      )}

      {/* NavigationBar */}
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
