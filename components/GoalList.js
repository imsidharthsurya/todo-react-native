import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
const GoalList = (props) => {
  return (
    <TouchableOpacity onPress={()=>props.onDelete(props.uid)}>
      <View style={styles.listItems}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItems: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 1,
  },
});

export default GoalList;
