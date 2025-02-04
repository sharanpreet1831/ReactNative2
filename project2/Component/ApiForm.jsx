import { Button, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const ApiForm = () => {
    const[name , setName ] = useState ()
    const [age , setAge] = useState()

    const data = {
        name,
        age
    }

    const [nameError , setNameError] = useState (false);
    const [ageError , setAgeError] = useState (false);

    const getApi =  async () =>{

        if(!name) {
            setNameError(true)
        }else {
            setNameError(false)
        }
       
        if(!age) {
            setAgeError(true)
        }else {
            setAgeError(false)
        }
        if (!name || !age ) {
            return false 
        }
       
        const url =  'http://localhost:3000/user' 
        let result = await fetch(url , {
            method : "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify(data)

        })
        result = await result.json() ;
        console.warn(result)
    }
  return (
    <SafeAreaView style = {styles.container}>

      <TextInput placeholder='Name' style = {styles.inputbox} onChangeText={(item) => setName(item)}></TextInput>
      {
        nameError ? <Text style = {styles.errortext} > Please Enter Valid Name </Text> : null
      }
      
      <TextInput placeholder='Age '  style = {styles.inputbox} onChangeText={(item1) => setAge(item1)}></TextInput> 
      {
        ageError ? <Text style = {styles.errortext}> Please Enter Valid Age </Text> : null 
      }

      <Button  title='Save Data'  onPress={getApi} ></Button>
      <Text> name : { name}</Text>
      <Text> age  : {age} </Text>
    </SafeAreaView>
  )
}

export default ApiForm

const styles = StyleSheet.create({
    container:{
        flex : 1, 
        justifyContent : 'center',
        alignItems : 'center'
    },
    inputbox:{
        borderWidth : 2 ,
        width : 300,
        height : 50 ,
        padding : 10 ,
        margin : 10 ,
        borderRadius : 20  ,

        shadowColor : 'blue',
        shadowOpacity : 0,
        borderColor : 'skyblue'
     },
     errortext:{
        color : 'red',
        
     }
})