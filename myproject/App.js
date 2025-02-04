/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  Button,

  Text,

  View,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


const App = () => {
  const fruit = () => {
    console.log(" fruit function called  ")
  }
  const [name, setName] = useState("sharan")
  const [age , setAge] = useState(15);
  let data = "hello "
  const testname = () =>{
    setName("preet")
    data = "hiii"
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }} >helloooo  s </Text>
      <Button title="press here" color={"red"} onPress={fruit}> from sharn </Button>
     
      <Text style = {{ fontSize : 30 }}>{name}</Text>
      <Button title='update name ' onPress={()=> testname()}></Button>
      <Text style = {{ fontSize : 30 }}>{data}</Text>
      <Button title='update props' onPress={()=> {
        setAge(50)
      }}></Button>
      <User  age = {age} mail={"sharan@gmail.com"} />

    </View >
  );

}; 

const User = (props) => {
  return (
    <View style ={{backgroundColor:'green' , padding:10}}>
      <Text style = {{ fontSize : 30 }}>age  {props.age}  </Text>
      <Text style = {{ fontSize : 30 }}>  mail :{props.mail}  </Text>
    </View>
  );
}

const Userdata = () => {
  return (
    <View>
      <Text style={{ fontSize: 30 }}>Name : Sharan </Text>
      <Text style={{ fontSize: 30 }}>Age  : 123 </Text>
      <Text style={{ fontSize: 30 }}>mail : 12@gmail.com </Text>
    </View>
  );
}




export default App;
