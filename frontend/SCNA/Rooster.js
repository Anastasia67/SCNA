// Rooster.js
import React, { useState } from "react";
import {
  View,
  Text,
  SectionList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";
import NavigationBar from "./MainNavigatieBar";
import { useNavigation } from "@react-navigation/native";

// Mock data function to simulate getting a schedule based on a specific week number
const getScheduleForWeek = (weekNumber) => {
  const schedules = {
    42: [
      {
        day: "do 19 okt. 2024",
        data: [
          {
            time: "14:00 - 15:00",
            title: "Mentor gesprek",
            location: "Online, Teams",
            docent: "A. Mentoren",
            klas: "Klas A",
            oevl: "Mentoring Session | MEN.SES.V42",
            opmerking: "Neem je vragen mee.",
          },
        ],
      },
      {
        day: "vr 20 okt. 2024",
        data: [
          {
            time: "09:00 - 11:00",
            title: "Workshop Data Analysis",
            location: "A4.01",
            docent: "D. Expert",
            klas: "Workshop G1",
            oevl: "Workshop Data | DAT.WKS.V20",
            opmerking: "Breng je laptop mee.",
          },
        ],
      },
    ],
    43: [
      {
        day: "di 22 okt. 2024",
        data: [
          {
            time: "16:30 - 17:30",
            title: "Voorlichting projectbegin",
            location: "X0.13",
            docent: "M. Presentator",
            klas: "Algemeen",
            oevl: "Introductie | INT.PRJ.V43",
            opmerking: "Alle studenten welkom.",
          },
        ],
      },
      {
        day: "wo 23 okt. 2024",
        data: [
          {
            time: "13:30 - 15:30",
            title: "Project Cloud Architecture and Automation Assessment",
            location: "T4.31",
            docent: "G. Scherpenzeel",
            klas: "ICTCAAa",
            oevl: "Project Cloud Architecture and Automation | ICT.CAA.PRJ.V23",
            opmerking: "Eindopdracht voorbereiden.",
          },
        ],
      },
      {
        day: "do 24 okt. 2024",
        data: [
          {
            time: "08:30 - 10:30",
            title: "Cloud Architecture Methods, Toets",
            location: "A2.14",
            docent: "R. Docent",
            klas: "Klas 2A",
            oevl: "Toets | CLA.MET.V24",
            opmerking: "Breng ID-kaart mee.",
          },
          {
            time: "11:30 - 13:30",
            title: "Project Cloud Architecture and Automation Assessment",
            location: "T4.31",
            docent: "G. Scherpenzeel",
            klas: "ICTCAAa",
            oevl: "Project Cloud Architecture and Automation | ICT.CAA.PRJ.V23",
            opmerking: "Werk in groepen.",
          },
          {
            time: "13:30 - 15:30",
            title: "Project Cloud Architecture and Automation Assessment",
            location: "T4.31",
            docent: "G. Scherpenzeel",
            klas: "ICTCAAa",
            oevl: "Project Cloud Architecture and Automation | ICT.CAA.PRJ.V23",
            opmerking: "Werk aan eindverslag.",
          },
        ],
      },
    ],
    44: [
      {
        day: "ma 30 okt. 2024",
        data: [
          {
            time: "10:00 - 12:00",
            title: "Basis van GenAI",
            location: "B2.15",
            docent: "AI Expert",
            klas: "G1 GenAI",
            oevl: "GenAI Basics | GEN.AI.BSC.V44",
            opmerking: "Bring notes.",
          },
        ],
      },
    ],
  };
  return schedules[weekNumber] || [];
};

const RoosterScreen = () => {
  const [currentWeek, setCurrentWeek] = useState(43);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const schedule = getScheduleForWeek(currentWeek);

  const renderItem = ({ item, section }) => (
    <TouchableOpacity
      onPress={() => {
        setSelectedItem({ ...item, day: section.day });
        setModalVisible(true);
      }}
      style={styles.itemContainer}
    >
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{item.time.split(" - ")[0]}</Text>
        <Text style={styles.endTimeText}>{item.time.split(" - ")[1]}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.locationText}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section: { day } }) => (
    <View style={styles.sectionHeaderContainer}>
      <Text style={styles.sectionHeaderText}>{day}</Text>
    </View>
  );

  const goToPreviousWeek = () => {
    setCurrentWeek((prevWeek) => Math.max(prevWeek - 1, 1));
  };

  const goToNextWeek = () => {
    setCurrentWeek((prevWeek) => prevWeek + 1);
  };

  const closeModal = () => {
    setModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={goToPreviousWeek} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.headerText}>Week {currentWeek}</Text>
        <TouchableOpacity onPress={goToNextWeek} style={styles.arrowButton}>
          <Text style={styles.arrowText}>{">"}</Text>
        </TouchableOpacity>
      </View>
      <SectionList
        sections={schedule}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
      <Modal visible={isModalVisible} transparent={false} animationType="slide">
        <View style={styles.modalContainer}>
          {selectedItem && (
            <>
              <View style={styles.modalHeader}>
                <View style={{ width: 80, alignItems: "flex-start" }}>
                  <TouchableOpacity
                    onPress={closeModal}
                    style={styles.backButton}
                  >
                    <Text style={styles.backButtonText}>{"< Terug"}</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.modalHeaderText}>Roostergegevens</Text>
                <View style={{ width: 80 }} />
              </View>

              <Text style={styles.modalDayText}>{selectedItem.day}</Text>
              <View style={styles.divider} />
              <Text style={styles.modalTitleText}>{selectedItem.title}</Text>
              <View style={styles.modalContent}>
                <Text style={styles.detailLabel}>Tijd:</Text>
                <Text>{selectedItem.time}</Text>
                <Text style={styles.detailLabel}>Lokaal:</Text>
                <Text>{selectedItem.location}</Text>
                <Text style={styles.detailLabel}>Klas:</Text>
                <Text>{selectedItem.klas}</Text>
                <Text style={styles.detailLabel}>Docent:</Text>
                <Text>{selectedItem.docent}</Text>
                <Text style={styles.detailLabel}>OE/EvL:</Text>
                <Text>{selectedItem.oevl}</Text>
                <Text style={styles.detailLabel}>Opmerking:</Text>
                <Text>{selectedItem.opmerking}</Text>
              </View>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => {
                  // Haal gebouw en lokaal/klas uit de geselecteerde item
                  if (selectedItem && selectedItem.location) {
                    const building = selectedItem.location.charAt(0); // Haal de eerste letter (bijv. 'B')
                    const classroom = selectedItem.location.slice(1); // De rest van de string (bijv. '2.15')

                    navigation.navigate("Route", { building, classroom });
                  }
                }}
              >
                <Text style={styles.closeButtonText}>Route Maken</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </Modal>

      <NavigationBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2e8b57",
  },
  arrowButton: {
    padding: 10,
  },
  arrowText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "grey",
  },
  sectionHeaderContainer: {
    backgroundColor: "#e0e0e0",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 15,
  },
  sectionHeaderText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  itemContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  timeContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  timeText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
  endTimeText: {
    fontSize: 14,
    color: "#888",
  },
  detailsContainer: {
    flex: 4,
    paddingLeft: 10,
  },
  titleText: {
    fontSize: 14,
    color: "#2e8b57",
    fontWeight: "bold",
  },
  locationText: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
  modalContainer: {
    flex: 1,
    paddingTop: 60,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  modalHeader: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#71B682",
    paddingVertical: 15,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1,
  },
  backButton: {
    marginLeft: 20,
  },
  backButtonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  modalHeaderText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  modalDayText: {
    fontSize: 22,
    textAlign: "center",
    color: "#2e8b57",
    marginBottom: 15,
    marginTop: 30,
    fontWeight: "bold",
  },
  divider: {
    height: 3,
    backgroundColor: "#ccc",
    marginVertical: 15,
  },
  modalTitleText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalContent: {
    marginVertical: 10,
  },
  detailLabel: {
    fontWeight: "bold",
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: "#B8D061",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 50,
    width: "80%",
    alignSelf: "center",
  },
  closeButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default RoosterScreen;
