import { Button } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function About({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.softwareName}>Calculadora de propinas</Text>
      <Text style={styles.versionText}>Versión 0.1</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Preferencias"
          onPress={() => navigation.navigate("UserPreferences")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  softwareName: {
    fontSize: 28,
  },
  versionText: {
    fontSize: 18,
  },
  buttonContainer: {
    marginTop: 42,
  },
});
