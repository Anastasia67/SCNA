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
    backgroundColor: "#f0f8ff",
  },
  map: {
    flex: 1,
  },
});

export default MapScreen;
