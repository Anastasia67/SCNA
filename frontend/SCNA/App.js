//App.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./HomeScreen";
import LoginScreen from "./LoginScreen";
import MapScreen from "./MapScreen";
import BezoekerMapScreen from "./BezoekerMapScreen";
import MeerScreen from "./Meer";
import BezoekerMeerScreen from "./BezoekerMeerScreen";
import RouteScreen from "./Route";
import BezoekerRouteScreen from "./BezoekerRouteScreen";
import RoosterScreen from "./Rooster";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#45b97c",
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
          name="Map"
          component={MapScreen}
          options={{ title: "Map" }}
        />
        <Stack.Screen
          name="Meer"
          component={MeerScreen}
          options={{ title: "Meer" }}
        />
        <Stack.Screen
          name="Route"
          component={RouteScreen}
          options={{ title: "Route" }}
        />
        <Stack.Screen
          name="Rooster"
          component={RoosterScreen}
          options={{ title: "Rooster" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
