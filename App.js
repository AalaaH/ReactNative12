
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, FlatList } from 'react-native';
import GoalItem from './components/GoatItem';

export default function App() {
  const [enteredcourse, setEnteredcourse]= useState('');
  const [courseGoals, SetcourseGoals]= useState([]);

  function goalsInputHandler(entertext){
setEnteredcourse(entertext);
  };

  function addGoalsHandler(){
    SetcourseGoals(currentcoursegoals=> [...currentcoursegoals,
      {text: enteredcourse, id:Math.random().toString()}]);
  };
  
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textContainer} 
        placeholder='Enter Your Course Name Here !'
        onChangeText={goalsInputHandler}>
        </TextInput>
        <Button title='Add Course' onPress={addGoalsHandler}></Button>
      </View>   
      <View style={styles.coursesContainer}>
      <FlatList 
      data={courseGoals} 
      renderItem={(itemData)=>{
         return <GoalItem text={itemData.item.text}/>
      }}
      keyExtractor={(item,index) =>{
        return item.id;
      }} 
      alwaysBounceHorizontal={false}>
      </FlatList>
       </View>   
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer:{
    flex:1,
    paddingTop:50,
    paddingHorizontal:16

  },
 
coursesContainer:{
    flex:5,
}
});
