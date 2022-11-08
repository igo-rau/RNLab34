import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.TextInput} placeholder='Your course goal!' />
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
  },
  inputContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    marginRight: 8,
    padding: 8
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
