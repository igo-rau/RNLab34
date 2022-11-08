import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View>
        <TextInput placeholder='Your course goal!' />
        <Button title='Add Goal'/>

      </View>

      <Text style={styles.dummyText}>Igor Rautiainen Lab34!</Text>

      <View>
        <Text>List of goals to come...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50
  }
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // dummyText: {
  //   margin: 16,
  //   borderWidth: 2,
  //   borderColor: "#F88",
  //   padding: 16,
  // },
});
