import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable onPress={props.onDeleteItem.bind(this, props.id)}>
      <View style={styles.goalItem}>
        <Text style={styles.goalItemText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6, //not working for ios if applied to <Text>, so we should wrap into <View>
    backgroundColor: "#00f",
  },

  goalItemText: {
    color: "white", // Styles are not cascading, so if applied to parent <View> - will have no effect.
  },
});
