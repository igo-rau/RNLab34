import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed})=> pressed && styles.pressedItem }
      >
        <Text style={styles.goalItemText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6, //not working for ios if applied to <Text>, so we should wrap into <View>
    backgroundColor: "#00f",
},

goalItemText: {
    padding: 8,
    color: "white", // Styles are not cascading, so if applied to parent <View> - will have no effect.
  },

pressedItem: {
    opacity: 0.5
},
});
