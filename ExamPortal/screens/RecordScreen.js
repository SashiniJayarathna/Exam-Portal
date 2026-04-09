import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function RecordScreen({ route }) {

  const { subjects } = route.params;

  const [examType, setExamType] = useState("");
  const [studentName, setStudentName] = useState("");

  const paymentDetails = [
    { id: "1", type: "Medical", payment: "Rs. 500" },
    { id: "2", type: "Resit", payment: "Rs. 250" },
    { id: "3", type: "Update", payment: "Rs. 250" },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Student Record</Text>

      <Text style={styles.label}>Selected Subjects:</Text>
      {subjects.map((sub, index) => (
        <Text key={index} style={styles.subjectItem}>• {sub}</Text>
      ))}

      <TextInput
        placeholder="Enter Student Name"
        placeholderTextColor="#888"
        style={styles.input}
        value={studentName}
        onChangeText={setStudentName}
      />

      <Text style={styles.label}>Select Exam Type</Text>

      <FlatList
        data={paymentDetails}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.examBox,
              examType === item.type && styles.selectedExam,
            ]}
            onPress={() => setExamType(item.type)}
          >
            <Text style={styles.examText}>{item.type}</Text>
            <Text style={styles.paymentText}>
              Payment: {item.payment}
            </Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.confirmButton}
        onPress={() =>
          alert(
            `Name: ${studentName}\nExam Type: ${examType}\nRegistration Confirmed`
          )
        }
      >
        <Text style={styles.confirmText}>Confirm</Text>
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
    marginBottom: 15,
  },
  label: {
    color: "#aaa",
    marginTop: 15,
    marginBottom: 8,
  },
  subjectItem: {
    color: "#fff",
    marginLeft: 10,
  },
  input: {
    backgroundColor: "#111",
    borderColor: "#00CED1",
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
    color: "#fff",
  },
  examBox: {
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#00CED1",
    marginVertical: 6,
    backgroundColor: "#111",
  },
  selectedExam: {
    backgroundColor: "#00CED1",
  },
  examText: {
    fontWeight: "bold",
    color: "#fff",
  },
  paymentText: {
    color: "#ccc",
  },
  confirmButton: {
    backgroundColor: "#00CED1",
    padding: 18,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  confirmText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
});
