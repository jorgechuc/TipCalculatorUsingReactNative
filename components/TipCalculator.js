import { useState } from "react";
import { TextInput } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import PercentageButton from "./PercentageButton";

export default function TipCalculator() {
  const [importe, setImporte] = useState('0');
  const [totalPersonas, setTotalPersonas] = useState('1');
  const [porcentajePropina, setPorcentajePropina] = useState('0');

  const [importePropina, setImportePropina] = useState('0');
  const [importeTotal, setImporteTotal] = useState('0');
  const [importePropinaPorPersona, setImportePropinaPorPersona] = useState('0');
  const [importePorPersona, setImportePorPersona] = useState('0');

  function CalculaPropina() {
    const amount = parseFloat(importe);
    const numPersons = parseInt(totalPersonas);
    const percentage = parseFloat(porcentajePropina);

    const propina = amount * percentage / 100.0;
    const total = amount + propina;
    const propinaPorPersona = propina / numPersons;
    const totalPorPersona = total / numPersons;
    
    setImportePropina(propina.toFixed(2));
    setImporteTotal(total.toFixed(2));
    setImportePropinaPorPersona(propinaPorPersona.toFixed(2));
    setImportePorPersona(totalPorPersona.toFixed(2));
  }

  function importeInputHandler(nuevoImporte) {
    console.log("Nuevo importe: " + nuevoImporte);
    setImporte(nuevoImporte);
    console.log(importe);
    CalculaPropina();
  }

  function totalPersonasInputHandler(numPersonas) {
    setTotalPersonas(numPersonas);
  }

  function porcentajePropinaInputHandler(porcentaje) {
    setPorcentajePropina(porcentaje);
  }

    return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Importe cuenta:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={importe}
            onChangeText={importeInputHandler}
          />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}># personas:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            inputMode='decimal'
            value={totalPersonas}
            onChangeText={totalPersonasInputHandler}
          />
        </View>

        <View style={styles.buttonsContainer}>
          <PercentageButton percentage="7.5" />
          <PercentageButton percentage="10" />
          <PercentageButton percentage="12.5" />
          <PercentageButton percentage="15" />
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>% propina:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={porcentajePropina}
            onChangeText={porcentajePropinaInputHandler}
          />
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.row}>
          <Text style={styles.label}>Importe de la propina:</Text>
          <Text style={styles.outputLabel}>{importePropina}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Importe total:</Text>
          <Text style={styles.outputLabel}>{importeTotal}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Propina por persona:</Text>
          <Text style={styles.outputLabel}>{importePropinaPorPersona}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.label}>Importe por persona:</Text>
          <Text style={styles.outputLabel}>{importePorPersona}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  section: {
    backgroundColor: "#c0c0c0",
    margin: 12,
    padding: 12,
    borderColor: "black",
    borderRadius: 6,
  },
  row: {
    flexDirection: "row",
  },
  label: {
    flex: 1,
    marginTop: 6,
    marginBottom: 6,
    fontSize: 18,
  },
  input: {
    flex: 1,
    marginTop: 6,
    marginBottom: 6,
    fontSize: 18,
    backgroundColor: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginTop: 12,
    marginBottom: 12,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  outputLabel: {
    flex: 1,
    marginTop: 6,
    marginBottom: 6,
    textAlign: "right",
    fontSize: 18,
  },
});
