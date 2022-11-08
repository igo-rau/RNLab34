import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.dummyText}>Igor Rautiainen Lab34!</Text>
      </View>
      <Text
        style={styles.dummyText}
      >
        Igor Rautiainen Lab34!
      </Text>
      <Button title="Fine!" />
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
  dummyText: {
    margin: 16,
    borderWidth: 2,
    borderColor: "#F88",
    padding: 16,
  },
});
