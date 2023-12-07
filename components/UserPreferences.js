import { useState } from "react";
import {
  Button,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserPreferences() {
  const [nombre, setNombre] = useState("");
  const [onlyWiFi, setOnlyWiFi] = useState(false);

  function nameInputHandler(enteredValue) {
    setNombre(enteredValue);
  }

  function onlyWiFiHandler() {
    setOnlyWiFi((previousState) => !previousState);
  }

  // async function GetPreferences(key) {
  //   try {
  //     const value = await AsyncStorage.getItem(key);
  //     console.log("Valor recuperado: " + value);
  //     return value;
  //   }
  //   catch (error) {
  //     console.log("Error: " + error);
  //   }
  // }

  function saveHandler() {
    // try {
    //   console.log("Nombre=" + nombre);
    //   await AsyncStorage.setItem("nombre", nombre);
    // }
    // catch (error) {
    //   console.log("Error: " + error);
    // }
  }


  // const value = await GetPreferences("nombre");
  // console.log("Valor recuperado=" + value);

  return (
    <View style={styles.mainContainer}>
      <View style={styles.row}>
        <Text style={styles.text}>Nombre a mostrar:</Text>
        <TextInput
          style={styles.input}
          value={nombre}
          onChangeText={nameInputHandler}
        />
      </View>
      <View style={styles.row}>
        {/* <Text style={styles.text}>Tema:</Text> */}
        {/* Radio Buttons */}
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Sólo WiFi?</Text>
        <Switch
          style={styles.value}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={onlyWiFi ? "#f5dd4b" : "#f4f3f4"}
          value={onlyWiFi}
          onValueChange={onlyWiFiHandler}
        />
      </View>
      {/* <Button title="Guardar" onPress={saveHandler} /> */}
      <Button title="Guardar"/>
      </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: "#c0c0c0",
  },
  row: {
    flexDirection: "row",
  },
  column: {
    flex: 1,
  },
  text: {
    flex: 1,
    fontSize: 14,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "#fff",
  },
  value: {
    flex: 1,
  },
});
