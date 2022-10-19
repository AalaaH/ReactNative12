
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textContainer} placeholder='Enter Your Course Name Here !'></TextInput>
        <Button title='Add Course'></Button>
      </View>   
      <View style={styles.coursesContainer}>
        <Text>List of Courses .....</Text>
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
coursesContainer:{
    flex:5,
}
});
