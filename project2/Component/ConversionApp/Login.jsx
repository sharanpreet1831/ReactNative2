import { View, Text, SafeAreaView, StyleSheet, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import Home from  './MyHome'


const Login = (props) => {
  const [name , setName] = useState("");
  const [age , setAge]  = useState();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 30 }}> Login Screen </Text>
      <Button title='Go to home page '
        onPress={() => props.navigation.navigate("Home" , {name , age  })}
      ></Button>
      <TextInput   placeholder='name'  onChangeText={(text) =>setName(text)} />
      <TextInput  placeholder='age'  onChangeText={(text) => setAge(text)}/>
    </View>
  )
}
const style = StyleSheet.create({})

export default Login