import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";

export default function HomeScreen({ navigation, route }) {

  const { regNo } = route.params;

  const subjects = [
    "TICT4213 Data Mining and Data Warehousing",
    "TICT4223 Digital Image Processing",
    "TICT4242 Mobile Application Development",
    "TICT4262 Cloud Application Development",
  ];

  const [selectedSubjects, setSelectedSubjects] = useState([]);

  const toggleSubject = (subject) => {
    if (selectedSubjects.includes(subject)) {
      setSelectedSubjects(selectedSubjects.filter((item) => item !== subject));
    } else {
      setSelectedSubjects([...selectedSubjects, subject]);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Welcome {regNo}</Text>
      <Text style={styles.subtitle}>Select Subjects</Text>

      {subjects.map((subject, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.subjectBox,
            selectedSubjects.includes(subject) && styles.selectedBox,
          ]}
          onPress={() => toggleSubject(subject)}
        >
          <Text style={styles.subjectText}>
            {selectedSubjects.includes(subject) ? "✓ " : ""}
            {subject}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity
        style={styles.proceedButton}
        onPress={() =>
          navigation.navigate("Record", { subjects: selectedSubjects })
        }
      >
        <Text style={styles.proceedText}>Proceed</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#000", padding: 20 },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#00FFFF",
    marginBottom: 10,
  },
  subtitle: {
    color: "#aaa",
    marginBottom: 15,
  },
  subjectBox: {
    padding: 18,
    borderRadius: 10,
    backgroundColor: "#111",
    borderWidth: 1,
    borderColor: "#00CED1",
    marginBottom: 12,
  },
  selectedBox: {
    backgroundColor: "#00CED1",
  },
  subjectText: {
    color: "#fff",
    fontWeight: "500",
  },
  proceedButton: {
    backgroundColor: "#00CED1",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
  },
  proceedText: {
    color: "#000",
    fontWeight: "bold",
  },
});
