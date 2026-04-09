import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function LoginScreen({ navigation }) {

  const users = [
    { username: "2019ICTS91", password: "123" },
    { username: "2020ICTS91", password: "abc" },
  ];

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = () => {
    const userFound = users.find(
      (user) => user.username === username && user.password === password
    );

    if (userFound) {
      setMsg("");
      navigation.navigate("Home", { regNo: username });
    } else {
      setMsg("Invalid Registration Number or Password");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Exam Portal</Text>

      <TextInput
        placeholder="Registration Number"
        placeholderTextColor="#888"
        style={styles.input}
        value={username}
        onChangeText={setUsername}
      />

      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.msg}>{msg}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    justifyContent: "center",
    padding: 25,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#00FFFF",
    textAlign: "center",
    marginBottom: 30,
  },
  input: {
    backgroundColor: "#111",
    borderColor: "#00CED1",
    borderWidth: 1,
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
    color: "#fff",
  },
  button: {
    backgroundColor: "#00CED1",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 16,
  },
  msg: {
    color: "red",
    marginTop: 15,
    textAlign: "center",
  },
});
