import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welkom bij de Navigatie App!</Text>
      <Button
        title="Ga naar Login"
        onPress={() => navigation.navigate("Login")}
      />
      <Button
        title="Toekomstige functie"
        onPress={() => alert("Deze functie is nog niet beschikbaar")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
