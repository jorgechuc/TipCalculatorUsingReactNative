import { StyleSheet, Text, View } from 'react-native';

export default function ContributionCalculator() {
  return (
    <View style={styles.container}>
      <Text>Aquí estará la calculadora de aportaciones</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
