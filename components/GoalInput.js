import {View, Button, TextInput} from 'react-native'
import {StyleSheet} from 'react-native'

function GoalInput(){
return (
    <View style={styles.inputContainer}>
    <TextInput style={styles.textContainer} 
    placeholder='Enter Your Course Name Here !'
    onChangeText={goalsInputHandler}>
    </TextInput>
    <Button title='Add Course' onPress={addGoalsHandler}></Button>
  </View>   
 
);
}
export default GoalInput;
const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:24,
        borderBottomWidth:1,
        borderBotthomColor:'#cccccc',
        },
        textContainer:{
      borderWidth:1,
      borderColor:'#cccccc',
      width:'70%',
      marginRight:8,
      padding:8
        },

})