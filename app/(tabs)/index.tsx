import {View ,TextInput, Button,StyleSheet,Text,FlatList} from 'react-native';
import { useState } from 'react';
import GoalList from "../../components/GoalList"
import AddGoal from "../../components/AddGoal"
export default function HomeScreen() {
  
  const [allGoals,setAllGoals]=useState([])
  const [showModal,setShowModal]=useState(false)
 
  const addGoal=(currentGoal)=>{
      setAllGoals((allGoals)=> [...allGoals,{uid:Math.random().toString(),value:currentGoal}])
      // console.log(allGoals)
      // console.log(`goal trying to add is: ${currentGoal}`)
      setShowModal(false)
  }
  const setModal=()=>{
    setShowModal(false)
  }
  const deleteGoal=(goalId)=>{
    // console.log("goal to delete with id: ",goalId)
    setAllGoals((prevGoals)=>{
      return prevGoals.filter((goal)=>{
        return goal.uid!== goalId
      })
    })
  }
  return (
    <View style={styles.main}>
        <Button title='Add Goal' onPress={()=>setShowModal(true)}/>
        <AddGoal setModal={setModal} visible={showModal} allGoals={allGoals} addGoal={addGoal}/>
        <FlatList
          data={allGoals}
          keyExtractor={(item)=>item.uid}
          renderItem={(itemData)=>{
            return <GoalList uid={itemData.item.uid} 
            onDelete={(goalId)=>deleteGoal(goalId)}
            title={itemData.item.value}/>
          }}
        />
      
    </View>
  );
}

const styles=StyleSheet.create({
  main:{
      padding:50
  }
})