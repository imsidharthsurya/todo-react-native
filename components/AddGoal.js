import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Modal } from "react-native";
const AddGoal = ({ allGoals, addGoal, visible, setModal }) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const handleChange = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.firstSection}>
        <TextInput
          placeholder="Enter Goal"
          style={styles.inputBox}
          value={enteredGoal}
          onChangeText={handleChange}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "80%",
          }}
        >
          <View style={{ width: "40%" }}>
            <Button title="Cancel" color="red" onPress={setModal} />
          </View>
          <View style={{ width: "40%" }}>
            <Button
              title="Add"
              onPress={() => {
                addGoal(enteredGoal);
                setEnteredGoal("");
              }}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  firstSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    padding: 5,
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 5,
    width: "80%",
  },
});
export default AddGoal;
