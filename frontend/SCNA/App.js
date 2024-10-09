//App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import MapScreen from "./MapScreen";
import BezoekerMapScreen from "./BezoekerMapScreen";
import BezoekerMeerScreen from "./BezoekerMeerScreen";
import BezoekerRouteScreen from "./BezoekerRouteScreen";
import BHulpScreen from "./BHulpScreen";
import BInstellingen from "./BInstellingen";
import BOverDeAppScreen from "./BOverDeAppScreen";

BOverDeAppScreen;

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#71B682",
          },
          headerTintColor: "#black",
          headerTitleStyle: {
            fontWeight: "bold",
          },
          headerShadowVisible: false, // lijn onder de header
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "" }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Login" }}
        />
        <Stack.Screen
          name="BezoekerMap"
          component={BezoekerMapScreen}
          options={{ title: "Map" }}
        />
        <Stack.Screen
          name="BezoekerMeer"
          component={BezoekerMeerScreen}
          options={{ title: "Meer" }}
        />
        <Stack.Screen
          name="BezoekerRoute"
          component={BezoekerRouteScreen}
          options={{ title: "Route" }}
        />
        <Stack.Screen
          name="BHulpScreen"
          component={BHulpScreen}
          options={{ title: "Hulp" }}
        />
        <Stack.Screen
          name="BInstellingen"
          component={BInstellingen}
          options={{ title: "Instellingen" }}
        />
        <Stack.Screen
          name="BOverDeAppScreen"
          component={BOverDeAppScreen}
          options={{ title: "Over de app" }}
        />

        <Stack.Screen
          name="Map"
          component={MapScreen}
          options={{ title: "Map" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
