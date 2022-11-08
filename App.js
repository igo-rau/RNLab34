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

      <View style={styles.goalsContainer}>
        <Text>List of goals to come...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex:1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1,
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'

  },
  TextInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '70%',
    marginRight: 8,
    padding: 8
  }, 
  goalsContainer: {
    flex: 5
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
