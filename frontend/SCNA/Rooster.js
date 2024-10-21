import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import NavigationBar from "./MainNavigatieBar";

const RoosterScreen = () => {
  // Mock data for the schedule
  const schedule = [
    {
      day: "Mon, Sep 23, 2024",
      time: "10:30 - 12:30",
      title: "Praktijkgerichte Software Engineering",
      location: "AC1.18; AC1.20",
    },
    {
      day: "Mon, Sep 23, 2024",
      time: "12:30 - 14:30",
      title: "Basis Algoritmiek en Informatica",
      location: "AC1.18; AC1.20",
    },
    {
      day: "Tue, Sep 24, 2024",
      time: "12:30 - 14:30",
      title: "Praktijkgerichte Software Engineering",
      location: "AC1.18; AC1.20",
    },
    {
      day: "Wed, Sep 25, 2024",
      time: "16:00 - 18:00",
      title: "Low-code Development",
      location: "AL9.02",
    },
    {
      day: "Thu, Sep 26, 2024",
      time: "16:30 - 17:30",
      title: "Voorlichting Cambridge Advanced English",
      location: "AL2.16",
    },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.timeText}>{item.time}</Text>
      <Text style={styles.titleText}>{item.title}</Text>
      <Text style={styles.locationText}>{item.location}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Week 39</Text>
      <FlatList
        data={schedule}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
      />
      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#2e8b57",
  },
  itemContainer: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  timeText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  titleText: {
    fontSize: 14,
    color: "#2e8b57",
    marginTop: 5,
  },
  locationText: {
    fontSize: 12,
    color: "#666",
    marginTop: 5,
  },
});

export default RoosterScreen;
