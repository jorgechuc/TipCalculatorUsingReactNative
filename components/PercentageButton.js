import { Button, StyleSheet, View } from "react-native";

export default function PercentageButton(props) {
  return (
    <View style={styles.percentageButton}>
      <Button title={props.percentage + "%"} />
    </View>
  );
}

const styles = StyleSheet.create({
    percentageButton: {
      flex: 1,
      alignItems: "stretch",
      justifyContent: "center",
      marginLeft: 4,
      marginRight: 4,
      width: 100,
      fontSize: 24,
    },
  });
  