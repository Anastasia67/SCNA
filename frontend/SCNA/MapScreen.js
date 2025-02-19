// MapScreen.js
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Alert, Image } from "react-native";
import NavigationBar from "./MainNavigatieBar";
import MapView, { Marker, Polyline } from "react-native-maps";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Location from "expo-location";
import polyline from "@mapbox/polyline";

const MapScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { user } = route.params || {};

  const [region, setRegion] = useState(null);
  const [userLocation, setUserLocation] = useState(null);
  const [destination, setDestination] = useState({
    latitude: 52.500052,
    longitude: 6.084516,
  });
  const [routeCoords, setRouteCoords] = useState([]);
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  // UseEffect for splash screen timer
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplashScreen(false);
      navigation.setOptions({ headerShown: true }); // Show the header after splash
    }, 1000);

    navigation.setOptions({ headerShown: false }); // Hide the header during splash

    return () => clearTimeout(timer);
  }, [navigation]);

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
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert(
            "Locatie toestemming geweigerd",
            "Schakel locatie in om de kaart te gebruiken."
          );
          return;
        }

        await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            timeInterval: 1000,
            distanceInterval: 1,
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
      {/* Show Splash Screen */}
      {showSplashScreen ? (
        <View style={styles.splashContainer}>
          <Image
            source={require("./assets/loadinglogo.png")}
            style={styles.splashImage}
          />
        </View>
      ) : (
        <>
          {region ? (
            <MapView
              style={styles.map}
              region={region}
              showsUserLocation={true}
            >
              {userLocation && (
                <Marker coordinate={userLocation} title="Jouw locatie" />
              )}
              {destination && (
                <Marker coordinate={destination} title="Bestemming" />
              )}
              {routeCoords.length > 0 && (
                <Polyline
                  coordinates={routeCoords}
                  strokeWidth={5}
                  strokeColor="blue"
                />
              )}
            </MapView>
          ) : (
            <View style={styles.splashContainer}>
              <Image
                source={require("./assets/loadinglogo.png")}
                style={styles.splashImage}
              />
            </View>
          )}
          <NavigationBar />
        </>
      )}
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
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  splashImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default MapScreen;
